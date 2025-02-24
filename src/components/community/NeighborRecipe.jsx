import * as S from './NeighborRecipe.style'
import star_red from '@/assets/community/star_red.svg'
import {useState,useEffect} from 'react'
import { getRecipeAll,getRecipeRecommend } from '@/apis/community/GetRecipe';
import { useNavigate } from 'react-router-dom';

export default function NeighborRecipe(){
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          getRecipeAll(),
          getRecipeRecommend(),
        ]);
        console.log(response1,response2)
        setData1(response1);
        setData2(response2);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (data1 === null || data2 === null) {
    return <div>Loading...</div>;
  }

  return(
    <>
      <S.FlexContainer>
        { data2.ageGroupRecommendations.length > 0 &&
        <S.FlexItem>
          <S.TitleText>같은 나이대의 사람들에게 인기에요!</S.TitleText>
          <S.CardWrapper>
            {data2.ageGroupRecommendations.map((d)=>{
              return(
                <S.CardContainer key={d.id} onClick={()=>navigate(`/community/recipe/${d.id}`)}>
                  <S.CardImage src={`http://13.211.69.139:8080${d.picture}`} $width={119} $height={194}/>
                  <S.CardText>{d.title}</S.CardText>
                </S.CardContainer>
              )
            })}
          </S.CardWrapper>
        </S.FlexItem>
        }
        { data2.familyTypeRecommendations.length > 0 &&
        <S.FlexItem>
          <S.TitleText>{data2.family}에게 인기레시피</S.TitleText>
          <S.CardWrapper>
            {data2.familyTypeRecommendations.map((d)=>{
              return(
                <S.CardContainer key={d.id} onClick={()=>navigate(`/community/recipe/${d.id}`)}>
                  <S.CardImage src={`http://13.211.69.139:8080${d.picture}`} $width={119} $height={107}/>
                  <S.CardText>{d.title}</S.CardText>
                </S.CardContainer>
              )
            })}
          </S.CardWrapper>
        </S.FlexItem>
        }
        
        <div>
          <S.TextFlex>
            <S.TitleText>자유롭게 레시피를 공유해보세요!</S.TitleText>
            <S.SubText2 onClick={()=>navigate('/community/write-recipe')}>레시피 추가하기</S.SubText2>
          </S.TextFlex>
          <S.ColFlexContainer>
            {data1.map((d)=>{
              console.log(d.picture)
              return(
                <S.ColFlexItem key={d.id} onClick={()=>navigate(`/community/recipe/${d.id}`)}>
                  <S.RoundImg src={`http://13.211.69.139:8080${d.picture}`} />
                  <div>
                    <S.NickText>{d.userNickname}</S.NickText>
                    <S.RecipeTitle>{d.title}</S.RecipeTitle>
                    <img src={star_red} style={{width:'10px',height:'10px'}}/>
                    <S.StarText>{d.likeCount}</S.StarText>
                  </div>
               </S.ColFlexItem>
              )
            })}
            
            
          </S.ColFlexContainer>
        </div>
          
      </S.FlexContainer>
    </>
  )
}