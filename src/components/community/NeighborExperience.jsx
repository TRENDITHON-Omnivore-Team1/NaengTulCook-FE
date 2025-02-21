import * as S from "@/components/community/NeighborExperience.style"
import star_gray from "@/assets/community/star_gray.svg"
import star_red from "@/assets/community/star_red.svg"
import arrow_down from "@/assets/community/arrow_down.svg"
import { useState,useEffect } from "react"
import { BackgroundDarkOverlay } from "@/styles/common/CommonStyleComp"
import check  from '@/assets/refrigerator/check.svg';
import { useParams,useNavigate } from "react-router-dom"
import { getNeighbor } from "@/apis/community/Neighbor"

// const dummy={
//   postId:1,
//   nickname:'홍길동',
//   title:'오늘 새로운 레시피를 도전해봤어요',
//   content:'기본 감바스에 아보카도를 더했더니 식감이 부드럽고 고소함이 두 배!...',
//   like:2,
//   comment:2,
//   isLike:false,
// }

export default function NeighborExperience(){
  const [select, setSelect] = useState('최신순');
  const [isModal,setIsModal] = useState(false)
  const [data,setData] = useState([])
  const {type}=useParams()
  const navigate = useNavigate()
  // console.log(type)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNeighbor({type,select})
        setData(response)
        // console.log(response)
      } catch (err) {
        console.log(err);
      }
    };

    fetchData(); 
  }, [type,select]); 

  const handlePostDetail = (id,type)=>{
    // console.log(id,type)
    navigate(`/community/${type}/${id}`)
  } 

  return(
    <>
    {isModal &&
      <BackgroundDarkOverlay>
        <S.ModalContainer>
          <S.AlignText>정렬</S.AlignText>
          <S.FlexBox onClick={()=>{
            setSelect('최신순')
            setIsModal(false)
            }}>
            <S.FlexBoxText $isSelected={select === '최신순'}>최신순</S.FlexBoxText>
            {select === '최신순' && <S.FlexBoxImg src={check}/>}
          </S.FlexBox>
          <S.FlexBox style={{marginTop:'26px'}} onClick={()=>{
            setSelect('인기순')
            setIsModal(false)
          }}>
            <S.FlexBoxText $isSelected={select === '인기순'} >인기순</S.FlexBoxText>
            {select === '인기순' && <S.FlexBoxImg src={check}/>}
          </S.FlexBox>
        </S.ModalContainer>
      </BackgroundDarkOverlay>
      }
      
      
      <S.MainWrapper>
        <S.SelectContainer onClick={()=>setIsModal(true)}>
          <S.SelectText>{select}</S.SelectText>
          <S.ArrowDown src={arrow_down}/>
        </S.SelectContainer>

        {data.map((d)=>{
        return(
          <S.BoxContainer key={d.id} onClick={()=>handlePostDetail(d.id,type)}>
            <S.Nickname>{d.userId}</S.Nickname>
            <S.Title>{d.title}</S.Title>
            <S.Content>{d.content}</S.Content>
            <S.EtcContainer>
             {d.liked ?
             <img src={star_red} alt="star" style={{width:'14px',height:'14px',marginBottom:'4px'}}/>
             :<img src={star_gray} alt="star" style={{width:'14px',height:'14px',marginBottom:'4px'}}/>
             }         
              <S.StarNum>{d.likeCount}</S.StarNum>
              <S.CommentText>댓글 {d.viewCount}</S.CommentText>
            </S.EtcContainer>
         </S.BoxContainer>
        )
      })}
      </S.MainWrapper>
      
    </>
  )
}