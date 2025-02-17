import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { postSignUp } from "@/apis/sign/postSignUp";
import { useState } from "react";
import * as A from "./SignUp.style";
import * as S from "@/components/sign/Sign.style";
import BigButton from "@/components/common/button/BigButton";
import closeSvg from "@/assets/splash/icon_close.svg";

export default function SignUp() {
  const schema = yup.object({
    id: yup.string().required("아이디를 반드시 입력해주세요."),
    password: yup
      .string()
      .required("비밀번호를 반드시 입력해주세요.")
      .min(6, "비밀번호는 6자 이상이어야 합니다.")
      .max(16, "비밀번호는 16자 이하여야 합니다."),
    passwordCheck: yup
      .string()
      .required("비밀번호를 재입력해주세요.")
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  });

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await postSignUp({
        body: { userIdentifier: data.id, password: data.password },
      });

      navigate(`/login`);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleMoveToLogin = () => {
    navigate(`/login`);
  };

  return (
    <>
      <S.BackgroundForm onSubmit={handleSubmit(onSubmit)} $isBlack={true}>
        <A.InputContainer>
          <A.Topbar>
            <A.IconButton onClick={handleMoveToLogin} src={closeSvg} alt="뒤로가기" />
            <A.PageTitle>냉털쿡 가입하기</A.PageTitle>
          </A.Topbar>

          <S.InputLabel $isWhite={true}>사용할 아이디를 입력해주세요.</S.InputLabel>
          <S.StyledSignInput type="text" {...register("id")} placeholder="아이디" />
          <S.ErrorMessage>{errors.id?.message}</S.ErrorMessage>

          <S.InputLabel $isWhite={true}>사용할 비밀번호를 입력해주세요.</S.InputLabel>
          <S.StyledSignInput type="password" {...register("password")} placeholder="비밀번호" />
          <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>

          <S.InputLabel $isWhite={true}>비밀번호 확인</S.InputLabel>
          <S.StyledSignInput
            type="password"
            {...register("passwordCheck")}
            placeholder="비밀번호 확인"
          />
          <S.ErrorMessage>{errors.passwordCheck?.message}</S.ErrorMessage>

          {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        </A.InputContainer>

        <S.ButtonContainer>
          <BigButton type="submit" buttonText="가입하기" $isWhiteButton={true} />
          <S.SpanButton onClick={handleMoveToLogin}>
            이미 가입하셨나요?
            <A.LoginSpan>로그인하기</A.LoginSpan>
          </S.SpanButton>
        </S.ButtonContainer>
      </S.BackgroundForm>
    </>
  );
}
