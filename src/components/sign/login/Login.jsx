import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postLogin } from "@/apis/sign/postLogin";
import * as A from "./Login.style";
import * as S from "@/components/sign/Sign.style";
import BigButton from "@/components/common/button/BigButton";
import logoSvg from "@/assets/splash/logo_login.svg";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const userId = await postLogin({
        body: { userIdentifier: data.id, password: data.password },
      });

      localStorage.setItem("userId", userId.userId);
      // localStorage.setItem("isFirstLogin", true); // 튜토리얼 화면용(정보 추가하는 페이지에)
      if (userId.nicknameExists) {
        navigate(`/refrigerator`);
      } else {
        navigate(`/refrigerator`); // 사전정보입력 페이지로 수정
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleMoveToSignUp = () => {
    navigate(`/sign-up`);
  };

  return (
    <>
      <S.BackgroundForm onSubmit={handleSubmit(onSubmit)}>
        <A.InputContainer>
          <A.LogoTitle>
            <img src={logoSvg} alt="냉털쿡" />
            냉털쿡
          </A.LogoTitle>
          <A.IntroduceText>
            냉장고 털 준비됐나요?
            <br />
            로그인 후 이용 가능합니다.
          </A.IntroduceText>

          <S.InputLabel>아이디</S.InputLabel>
          <S.StyledSignInput
            type="text"
            placeholder="아이디"
            {...register("id", { required: "아이디를 입력해주세요." })}
          />
          {errors.id && <S.ErrorMessage>{errors.id.message}</S.ErrorMessage>}

          <S.InputLabel>비밀번호</S.InputLabel>
          <S.StyledSignInput
            type="password"
            placeholder="비밀번호"
            {...register("password", { required: "비밀번호를 입력해주세요." })}
          />
          {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
          {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        </A.InputContainer>

        <S.ButtonContainer>
          <BigButton type="submit" buttonText="로그인" />
          <S.SpanButton onClick={handleMoveToSignUp}>냉털쿡에 가입하기</S.SpanButton>
        </S.ButtonContainer>
      </S.BackgroundForm>
    </>
  );
}
