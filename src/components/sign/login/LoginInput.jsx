import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postLogin } from "@/apis/sign/postLogin";

export default function LoginInput() {
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
      localStorage.setItem("userId", userId);
      // localStorage.setItem("isFirstLogin", true); // 튜토리얼 화면용(정보 추가하는 페이지에)
      navigate(`/refrigerator`);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleMoveToSignUp = () => {
    navigate(`/sign-up`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="아이디"
          {...register("id", { required: "아이디를 입력해주세요." })}
        />
        {errors.id && <span style={{ color: "red" }}>{errors.id.message}</span>}
        <br />
        <input
          type="password"
          placeholder="비밀번호"
          {...register("password", { required: "비밀번호를 입력해주세요." })}
        />
        {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
        {errorMessage && <span style={{ color: "red" }}>{errorMessage}</span>}
        <br />
        <button type="submit">로그인</button>
      </form>
      <button onClick={handleMoveToSignUp}>가입하기</button>
    </>
  );
}
