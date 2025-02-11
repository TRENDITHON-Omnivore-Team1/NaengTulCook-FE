import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const handleMoveToLogin = () => {
    navigate(`/login`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("회원가입되었습니다");

    // navigate(`/refrigerator`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="password" />
        <input type="password" />
        <button type="submit">가입하기</button>
      </form>
      <button onClick={handleMoveToLogin}>로그인하기</button>
    </>
  );
}
