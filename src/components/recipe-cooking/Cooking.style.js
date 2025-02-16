import { styled } from "styled-components";

export const CarouselContent = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  /* overflow: hidden; */
`;
export const ImgContainer = styled.img`
  display: block;
  width: 100%;
  height: 256px;

  object-fit: cover;
`;
export const ContentContainer = styled.div`
  position: relative;
  top: -20px;

  width: 100%;
  height: calc(100vh - 256px);
  padding: 20px 24px;

  border-radius: 20px 20px 0 0;
  background-color: #fff;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
