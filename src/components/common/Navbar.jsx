import { useNavigate } from "react-router-dom";
import * as A from "./Navbar.style";
import refrigeratorSvg from "@/assets/icons/icon_refrigerator.svg";
import recipeSvg from "@/assets/icons/icon_recipe.svg";
import communitySvg from "@/assets/icons/icon_community.svg";
import mypageSvg from "@/assets/icons/icon_mypage.svg";

function NavButtonComp({ navUrl, iconSvg, navText }) {
  const navigate = useNavigate();
  const handleMoveToPage = () => {
    navigate(`/${navUrl}`);
  };

  return (
    <A.NavButton onClick={handleMoveToPage}>
      <A.IconImg src={iconSvg} alt={navText} />
      <A.NavText>{navText}</A.NavText>
    </A.NavButton>
  );
}

export default function Navbar() {
  return (
    <>
      <A.CompContainer>
        <NavButtonComp iconSvg={refrigeratorSvg} navUrl="refrigerator" navText="냉장고" />
        <NavButtonComp iconSvg={recipeSvg} navUrl="recipe" navText="레시피" />
        <NavButtonComp iconSvg={communitySvg} navUrl="community" navText="이웃의 장" />
        <NavButtonComp iconSvg={mypageSvg} navUrl="my-page" navText="내 정보" />
      </A.CompContainer>
    </>
  );
}
