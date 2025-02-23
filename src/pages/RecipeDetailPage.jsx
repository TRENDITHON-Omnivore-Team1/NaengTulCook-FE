import BigButton from "@/components/common/button/BigButton";
import RecipeDetail from "@/components/community/neighbor-recipe/RecipeDetail";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 하단 플로팅 버튼
const GradationWhite = styled.div`
  position: absolute;
  bottom: 0;
  padding-bottom: 40px;

  width: 100%;
  height: 160px;

  display: flex;
  justify-content: center;
  align-items: end;

  background: linear-gradient(180deg, rgba(255, 255, 255, 0) -10%, #fff 80%);
`;

export default function RecipeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleMoveToCooking = () => {
    navigate(`/recipe/cooking?recipeName=${name}`); // id값 수정
  };

  return (
    <>
      <RecipeDetail />
      <GradationWhite>
        <BigButton onClick={handleMoveToCooking} type="button" buttonText="요리하기" />
      </GradationWhite>
    </>
  );
}
