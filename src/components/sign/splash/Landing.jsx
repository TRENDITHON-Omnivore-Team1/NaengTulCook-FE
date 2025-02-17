import { useNavigate } from "react-router-dom";
import * as S from "@/components/sign/Sign.style";
import * as A from "./Splash.style";
import BigButton from "@/components/common/button/BigButton";
import landingPng from "@/assets/splash/img_landing.png";
import logoSvg from "@/assets/splash/logo_landing.svg";

export default function Landing() {
  const navigate = useNavigate();

  const handleMoveToPage = (page) => {
    navigate(`/${page}`);
  };

  return (
    <>
      <A.CompContainer>
        <A.CompBg src={landingPng} />
        <A.ContentContainer>
          <A.LogoTitle>
            <img src={logoSvg} alt="냉털쿡" />
            냉털쿡
          </A.LogoTitle>
          <A.IntroduceText>
            알짜배기 레시피로
            <br />
            오늘 저녁 메뉴 고민 끝!
          </A.IntroduceText>
          <BigButton
            onClickFn={() => handleMoveToPage("login")}
            buttonText="로그인"
            $isWhiteButton={true}
          />
          <S.SpanButton onClick={() => handleMoveToPage("sign-up")}>가입하기</S.SpanButton>
        </A.ContentContainer>
      </A.CompContainer>
    </>
  );
}
