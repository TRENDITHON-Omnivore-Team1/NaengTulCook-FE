// import { useState } from "react";
import * as A from "./FloatingButton.style";
import filterSvg from "@/assets/icons/icon_filter.svg";
import writingSvg from "@/assets/icons/icon_writing.svg";
export default function FloatingButton({ buttonName = "필터링" }) {
  // 추후 url에서 데이터 받아오도록 변경
  // const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <A.ButtonContainer onClick={() => setIsOpened(true)}>
        {buttonName == "필터링" ? (
          <img src={filterSvg} alt={buttonName} />
        ) : (
          <img src={writingSvg} alt={buttonName} />
        )}
      </A.ButtonContainer>
    </>
  );
}
