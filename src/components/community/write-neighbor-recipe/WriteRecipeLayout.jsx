import Topbar from "@/components/common/topbar/Topbar";
import RecipeStepA from "./RecipeStepA";
import * as A from "./WriteRecipeLayout.style";

export default function WriteRecipeLayout() {
  return (
    <>
      <Topbar pageTitle="레시피 공유" isSubPage={true} />
      <RecipeStepA />
    </>
  );
}
