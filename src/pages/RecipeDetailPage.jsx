import { useParams } from "react-router-dom";

export default function RecipeDetailPage() {
  const { id } = useParams();

  return (
    <>
      <p>RecipeDetailPage</p>
    </>
  );
}
