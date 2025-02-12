import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { postSignUp } from "@/apis/sign/postSignUp";
import { useState } from "react";

export default function SignUpInput() {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("id")} placeholder="아이디" />
        <span style={{ color: "red" }}>{errors.id?.message}</span>
        <br />
        <input type="password" {...register("password")} placeholder="비밀번호" />
        <span style={{ color: "red" }}>{errors.password?.message}</span>
        <br />
        <input type="password" {...register("passwordCheck")} placeholder="비밀번호 확인" />
        <span style={{ color: "red" }}>{errors.passwordCheck?.message}</span>
        <br />
        {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
        <button type="submit">가입하기</button>
      </form>
      <button onClick={handleMoveToLogin}>로그인하기</button>
    </>
  );
}
