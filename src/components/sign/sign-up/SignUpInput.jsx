import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignUpInput() {
  const schema = yup.object().shape({
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

  const onSubmit = (data) => {
    console.log("회원가입되었습니다");
    console.log(data);

    // navigate(`/login`);
  };

  const handleMoveToLogin = () => {
    navigate(`/login`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("id")} placeholder="아이디" />
        <span>{errors.id?.message}</span>
        <br />
        <input type="password" {...register("password")} placeholder="비밀번호" />
        <span>{errors.password?.message}</span>
        <br />
        <input type="password" {...register("passwordCheck")} placeholder="비밀번호 확인" />
        <span>{errors.passwordCheck?.message}</span>
        <br />
        <button type="submit">가입하기</button>
      </form>
      <button onClick={handleMoveToLogin}>로그인하기</button>
    </>
  );
}
