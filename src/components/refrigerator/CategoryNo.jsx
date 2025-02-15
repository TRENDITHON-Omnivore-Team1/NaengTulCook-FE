import * as S from "./CategoryNo.style";
import Plus from "@/assets/refrigerator/plus.svg"
import { useNavigate } from "react-router-dom";

export default function CategoryNo({category,marginBottom}){
  const navigate =useNavigate()

  const handleGoAddIngridient = ()=>{
    navigate('/refrigerator/add-ingredient')
  }
  
  return (
    <S.CateWrapper>
      <S.Pre_bold_20>{category}</S.Pre_bold_20>
      <S.PlusImg src={Plus}
        onClick={handleGoAddIngridient}
      />
      <S.Pre_semibold_16 style={{marginBottom:`${marginBottom}`,textAlign:'center'}}>재료를 담아보세요</S.Pre_semibold_16>
    </S.CateWrapper>
  )
}