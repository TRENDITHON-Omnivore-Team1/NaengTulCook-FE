import { useNavigate } from "react-router-dom";

export default function SplashPage() {
  const navigate = useNavigate();

  const handleMoveToPage = (page) => {
    navigate(`/${page}`);
  };

  return (
    <>
      <button onClick={() => handleMoveToPage("login")}>로그인</button>
      <br />
      <button onClick={() => handleMoveToPage("sign-up")}>가입하기</button>
    </>
  );
}
