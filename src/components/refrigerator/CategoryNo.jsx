import * as S from "./CategoryNo.style";
import Plus from "@/assets/refrigerator/plus.svg"

export default function CategoryNo({category,marginBottom}){
  return (
    <S.CateWrapper>
      <S.Pre_bold_20>{category}</S.Pre_bold_20>
      <S.PlusImg src={Plus}/>
      <S.Pre_semibold_16 style={{marginBottom:`${marginBottom}`,textAlign:'center'}}>재료를 담아보세요</S.Pre_semibold_16>
    </S.CateWrapper>
  )
}