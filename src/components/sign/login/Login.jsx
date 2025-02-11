import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleMoveToSignUp = () => {
    navigate(`/sign-up`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인되었습니다");

    // navigate(`/refrigerator`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="password" />
        <button type="submit">로그인</button>
      </form>
      <button onClick={handleMoveToSignUp}>가입하기</button>
    </>
  );
}
