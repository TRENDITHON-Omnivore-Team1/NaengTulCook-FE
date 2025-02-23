import * as S from './NeighborRecipe.style'
import star_red from '@/assets/community/star_red.svg'

const dummy =[
  {
    url:'https://www.homecuisine.co.kr/files/attach/images/140/583/005/0f63b96014f8ab404e13bf16e2347c92.JPG',
    name:'간장계란밥',
  },
  {
    url:'https://i.namu.wiki/i/VanLYhMvqv8-eIzfLZ7-JrfKG58ylFqCArNPzVTLdTa05LLittzg0yfUHVhmn8YPiOknwUhwi0kJ-fGVH-m_wg.webp',
    name:'스팸마요',
  },
  {
    url:'https://i.namu.wiki/i/mG__ekAYrVaJYQh6uBRZDDBHWDn6VDaXIOg3Wi8q-cs4FE42OqkFY95bkx5lb-4KbZkS1EvKSH3Jct8GSpbyWw.webp',
    name:'토스트',
  },
  {
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXLlJPuwYXvNgtqnhTa3-9lHoyR8m5GwQsw&s',
    name:'알리오올리오'
  }
]
export default function NeighborRecipe(){
  return(
    <>
      <S.FlexContainer>
        <S.FlexItem>
          <S.TitleText>같은 나이대의 사람들에게 인기에요!</S.TitleText>
          <S.CardWrapper>
            {dummy.map((d,index)=>{
              return(
                <S.CardContainer key={index}>
                  <S.CardImage src={d.url} $width={119} $height={194}/>
                  <S.CardText>{d.name}</S.CardText>
                </S.CardContainer>
              )
            })}
          </S.CardWrapper>
        </S.FlexItem>
        <S.FlexItem>
          <S.TitleText>1인 가구에게 인기레시피</S.TitleText>
          <S.CardWrapper>
            {dummy.map((d,index)=>{
              return(
                <S.CardContainer key={index}>
                  <S.CardImage src={d.url} $width={119} $height={107}/>
                  <S.CardText>{d.name}</S.CardText>
                </S.CardContainer>
              )
            })}
          </S.CardWrapper>
        </S.FlexItem>
        <S.FlexItem>
          <S.TextFlex>
            <S.TitleText>프리미엄 레시피</S.TitleText>
            <S.SubText>이웃이 등록한 유료 레시피에요</S.SubText>
          </S.TextFlex>
          <S.CardWrapper>
            {dummy.map((d,index)=>{
              return(
                <S.CardContainer key={index}>
                  <S.CardImage src={d.url} $width={119} $height={107}/>
                  <S.CardText>{d.name}</S.CardText>
                </S.CardContainer>
              )
            })}
          </S.CardWrapper>
        </S.FlexItem>
        <div>
          <S.TextFlex>
            <S.TitleText>자유롭게 레시피를 공유해보세요!</S.TitleText>
            <S.SubText2>레시피 추가하기</S.SubText2>
          </S.TextFlex>
          <S.ColFlexContainer>
            <S.ColFlexItem>
              <S.RoundImg src={dummy[0].url} />
              <div>
                <S.NickText>홍길동</S.NickText>
                <S.RecipeTitle>마라+크림 조합이 의외로 환상적! 매콤한 마라 크림 우동 레시피</S.RecipeTitle>
                <img src={star_red} style={{width:'10px',height:'10px'}}/>
                <S.StarText>304</S.StarText>
              </div>
            </S.ColFlexItem>
            <S.ColFlexItem>
              <S.RoundImg src={dummy[0].url} />
              <div>
                <S.NickText>홍길동</S.NickText>
                <S.RecipeTitle>마라+크림 조합이 의외로 환상적! 매콤한 마라 크림 우동 레시피</S.RecipeTitle>
                <img src={star_red} style={{width:'10px',height:'10px'}}/>
                <S.StarText>304</S.StarText>
              </div>
            </S.ColFlexItem>
          </S.ColFlexContainer>
        </div>
          
      </S.FlexContainer>
    </>
  )
}