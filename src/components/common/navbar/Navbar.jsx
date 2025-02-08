import { useLocation, useNavigate } from "react-router-dom";
import * as A from "./Navbar.style";
import refrigeratorSvg from "@/assets/icons/icon_refrigerator.svg";
import refrigeratorActiveSvg from "@/assets/icons/icon_refrigerator_active.svg";
import recipeSvg from "@/assets/icons/icon_recipe.svg";
import recipeActiveSvg from "@/assets/icons/icon_recipe_active.svg";
import communitySvg from "@/assets/icons/icon_community.svg";
import communityActiveSvg from "@/assets/icons/icon_community_active.svg";
import mypageSvg from "@/assets/icons/icon_mypage.svg";
import mypageActiveSvg from "@/assets/icons/icon_mypage_active.svg";

function NavButtonComp({ navUrl, iconSvg, activeIconSvg, navText }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === `/${navUrl}`;

  const handleMoveToPage = () => {
    navigate(`/${navUrl}`);
  };

  return (
    <A.NavButton onClick={handleMoveToPage} $isActive={isActive}>
      <A.IconImg src={isActive ? activeIconSvg : iconSvg} alt={navText} />
      <A.NavText $isActive={isActive}>{navText}</A.NavText>
    </A.NavButton>
  );
}

export default function Navbar() {
  return (
    <>
      <A.CompContainer>
        <NavButtonComp
          iconSvg={refrigeratorSvg}
          activeIconSvg={refrigeratorActiveSvg}
          navUrl="refrigerator"
          navText="냉장고"
        />
        <NavButtonComp
          iconSvg={recipeSvg}
          activeIconSvg={recipeActiveSvg}
          navUrl="recipe"
          navText="레시피"
        />
        <NavButtonComp
          iconSvg={communitySvg}
          activeIconSvg={communityActiveSvg}
          navUrl="community"
          navText="이웃의 장"
        />
        <NavButtonComp
          iconSvg={mypageSvg}
          activeIconSvg={mypageActiveSvg}
          navUrl="my-page"
          navText="내 정보"
        />
      </A.CompContainer>
    </>
  );
}
