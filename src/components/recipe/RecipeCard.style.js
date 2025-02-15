import { styled } from "styled-components";

export const CompContainer = styled.div`
  width: 100%;
  /* width: 78vw; */
  min-width: 260px;
  max-width: 388px;

  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 8px 32px 3px rgba(0, 0, 0, 0.17);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 38vh;
  overflow: hidden;
`;
export const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
export const OverlayGradation = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
  z-index: 10;
  background: linear-gradient(180deg, rgba(231, 29, 29, 0) 72%, #fff 100%);
`;
// 여기부터 내용
export const CardSubtitle = styled.div`
  margin-top: 20px;
  ${(props) => props.theme.fonts.pre_medium_14}
`;
export const CardTitle = styled.div`
  margin-top: 4px;
  ${(props) => props.theme.fonts.pre_extrabold_30}
`;
export const ChipItem = styled.div`
  margin-top: 24px;
  padding: 4px 11px;
  border-radius: 50vh;
  background: rgba(3, 142, 255, 0.09);

  color: ${(props) => props.theme.colors.state_blue};
  ${(props) => props.theme.fonts.pre_medium_13}
`;
export const InfoChip = styled.div`
  margin-top: 18px;

  border-radius: 50vh;
  background-color: #f3f2f2;
`;
export const RecipeButton = styled.button`
  margin: 20px 0 24px 0;
  padding: 10px;
  width: calc(100% - 64px);

  color: #fff;
  ${(props) => props.theme.fonts.pre_semibold_16}

  border-radius: 50vh;
  background: #1d1d1d;
`;

// list
export const SliderContainer = styled.ul`
  margin: 0;
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
  .slick-list {
    /* padding: 0 30px !important; */
  }
  /* .slick-slide {
    width: calc(100vw - 60px) !important;
    max-width: 440px;
  } */
`;
export const SliderContent = styled.li`
  /* width: calc(100vw - 60px) !important; */
  width: 100%;
  height: calc(38vh + 247px + 96px);
  padding: 48px 14px;
`;
