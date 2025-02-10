import Topbar from "@/components/common/topbar/Topbar";
import { styled } from "styled-components";
import CategoryNo from "@/components/refrigerator/CategoryNo";
import CategoryYes from "@/components/refrigerator/CategoryYes";

const ingredient = [
  {
    ingredient_id: 1,
    name: "가지",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 2,
    name: "감자",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 3,
    name: "당근",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 4,
    name: "양파",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 5,
    name: "마늘",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 6,
    name: "고추",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 7,
    name: "피망",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 8,
    name: "브로콜리",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 9,
    name: "배추",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 10,
    name: "무",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 11,
    name: "호박",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 12,
    name: "양배추",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 13,
    name: "버섯",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 14,
    name: "콩나물",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 15,
    name: "시금치",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 16,
    name: "파프리카",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 17,
    name: "오이",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 18,
    name: "고구마",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 19,
    name: "대파",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
  {
    ingredient_id: 20,
    name: "청경채",
    picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSymoT7NfS-KJSF91EbzSPars3rsuNDg-ZNulwgK5OdzvnT9AMQnMmDbI-xspPDGucCvdpcV5P3_sQXuURCvSFxr-ERSE-yQRuorno5tA",
  },
];

// const ingredient = [];
const condiment = [];

export const RefriWrapper = styled.div`
  padding: 30px 30px 100px;
`;

export default function RefrigeratorPage() {
  return (
    <>
      <Topbar pageTitle="나의 냉장고" />
      <RefriWrapper>
        {ingredient.length > 0 ? (
          <CategoryYes category='식재료' ingredient={ingredient}/>
        ) : (
          <CategoryNo category="식재료" marginBottom="120px" />
        )}

        {condiment.length > 0 ? (
          <CategoryYes/>
        ) : (
          <CategoryNo category="조미료" marginBottom="0" />
        )}
      </RefriWrapper>
    </>
  );
}
