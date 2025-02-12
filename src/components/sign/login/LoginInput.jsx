import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// 추후 api 리팩토링 필요
const api = axios.create({
  baseURL: "http://13.211.69.139:8080",
});

export default function LoginInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  async function signInUser({ id, password }) {
    try {
      const response = await api.post("/api/users/login", {
        userIdentifier: id,
        password: password,
      });

      return response.data;
    } catch (error) {
      console.error("로그인 실패: ", error.response?.data || error.message);
      return false;
    }
  }

  const onSubmit = async (data) => {
    console.log(data);
    const userId = await signInUser({ id: data.id, password: data.password });

    if (userId) {
      localStorage.setItem("userId", userId);
      // localStorage.setItem("isFirstLogin", true); // 튜토리얼 화면용
      navigate(`/refrigerator`);
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
        <br />
        <button type="submit">로그인</button>
      </form>
      <button onClick={handleMoveToSignUp}>가입하기</button>
    </>
  );
}
