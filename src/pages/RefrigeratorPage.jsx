import Topbar from "@/components/common/topbar/Topbar";
import * as S from "@/components/refrigerator/Refrigeraor.style";
import Plus from "@/assets/refrigerator/plus.svg"

export default function RefrigeratorPage() {
  return (
    <>
      <Topbar pageTitle={"나의 냉장고"} />
      <S.RefriWrapper>
        <S.Pre_bold_20>식재료</S.Pre_bold_20>
        <S.PlusImg src={Plus}/>
        <S.Pre_semibold_16 style={{marginBottom:'120px',textAlign:'center'}}>재료를 담아보세요</S.Pre_semibold_16>

        <S.Pre_bold_20>조미료</S.Pre_bold_20>
        <S.PlusImg src={Plus}/>
        <S.Pre_semibold_16 style={{textAlign:'center'}}>재료를 담아보세요</S.Pre_semibold_16>
      </S.RefriWrapper>
    </>
  );
}
