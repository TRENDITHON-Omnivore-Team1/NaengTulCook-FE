import * as A from "./Topbar.style";
import dropdownSvg from "@/assets/icons/icon_dropdown.svg";
import checkSvg from "@/assets/icons/icon_check.svg";
import backSvg from "@/assets/icons/icon_arrow_back.svg";
import { useState } from "react";
import { BackgroundDarkOverlay } from "@/styles/common/CommonStyleComp";
import { useNavigate } from "react-router-dom";

function DropdownComp({
  optionList,
  currentIndex,
  setCurrentIndex,
  setIsOpened,
  onOptionSelect,
  pathList,
}) {
  return (
    <>
      <BackgroundDarkOverlay />
      <A.DropdownContainer>
        {optionList.map((option, i) => (
          <A.TextButton onClick={() => setCurrentIndex(i)} $isActive={i == currentIndex} key={i}>
            {option}
          </A.TextButton>
        ))}
        <A.CheckImg
          onClick={() => {
            // CheckImg 클릭 시 라우팅 이동
            if (pathList && pathList[currentIndex]) {
              onOptionSelect(currentIndex);
            }
            setIsOpened(false);
          }}
          src={checkSvg}
          alt="선택완료"
        />
      </A.DropdownContainer>
    </>
  );
}

export default function Topbar({
  pageTitle = "",
  optionList = [],
  onOptionSelect,
  pathList,
  isSubPage = false,
}) {
  const navigate = useNavigate();
  const [isOpened, setIsOpened] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMoveToBack = () => {
    navigate(-1);
  };

  return (
    <>
      {isSubPage ? (
        // 뒤로가기 상단바
        <A.CompContainerSec>
          <A.Icon28Img onClick={handleMoveToBack} src={backSvg} alt="뒤로가기" />
          <A.ButtonArea>{pageTitle}</A.ButtonArea>
        </A.CompContainerSec>
      ) : (
        // 메인 상단바 - 드롭다운 유무
        <A.CompContainer>
          {optionList.length > 0 ? (
            <A.ButtonArea onClick={() => setIsOpened(true)}>
              {optionList[currentIndex]}
              <A.IconImg src={dropdownSvg} alt="드롭다운" />
            </A.ButtonArea>
          ) : (
            <A.ButtonArea>{pageTitle}</A.ButtonArea>
          )}
        </A.CompContainer>
      )}

      {/* 드롭다운 */}
      {isOpened && (
        <DropdownComp
          optionList={optionList}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          setIsOpened={setIsOpened}
          onOptionSelect={onOptionSelect}
          pathList={pathList}
        />
      )}
    </>
  );
}
