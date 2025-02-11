import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const navigate = useNavigate();

  const handleMoveToSignUp = () => {
    navigate(`/sign-up`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmitButton");

    // navigate(`/refrigerator`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="password" />
        <button>로그인</button>
      </form>
      <button onClick={handleMoveToSignUp}>가입하기</button>
    </>
  );
}
