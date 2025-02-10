import * as S from "./CategoryYes.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import plus_gray from '@/assets/refrigerator/plus_gray.svg';
import minus from '@/assets/refrigerator/minus.svg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CategoryYes({ category, ingredient}) {
  const plusIngrident = [{ ingredient_id: 0, name: '+', picture: plus_gray }, ...ingredient];
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const navigate = useNavigate()
  console.log(isDeleteMode)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
  };

  const groupedItems = [];
  for (let i = 0; i < plusIngrident.length; i += 12) {
    groupedItems.push(plusIngrident.slice(i, i + 12));
  }

  const handleComplete =()=>{
    setIsDeleteMode(false)
  }

  return (
    <S.CateWrapper $category={category}>
      <S.CateHeader>

        {!isDeleteMode ? (
          <>
            <S.CateName>{category}</S.CateName>
            <S.DeleteText onClick={() => setIsDeleteMode(true)}>삭제하기</S.DeleteText>
          </>
         ) : (
          <>
            <S.CateName>삭제할 재료를 선택해주세요</S.CateName>
            <S.ButtonContainer>
              <S.CancelButton onClick={()=>{setIsDeleteMode(false)}}>취소</S.CancelButton>
              <S.CompleteButton onClick={handleComplete}>완료</S.CompleteButton>
            </S.ButtonContainer>
          </>
        )}
      </S.CateHeader>
      <Slider {...settings}>
        {groupedItems.map((group, index) => (
          <div key={index}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)", // 4열
                gridColumnGap: '42px',
                padding: '4px'
              }}
            >
              {group.map((item) => (
                <S.ItemContainer key={item.ingredient_id}>
                  {item.ingredient_id === 0 ? (
                    <S.PlusImg 
                      src={item.picture} 
                      alt="plus"
                      onClick={() => {
                        navigate('/refrigerator/add-ingredient', { state: { value: category } });
                      }}
                    />
                  ) : (
                    <>
                      <S.ItemImageContainer>
                        <S.ItemImage
                          src={item.picture}
                          alt={item.name}
                        />
                        {isDeleteMode &&
                        <S.DeleteImg 
                          src={minus}
                          alt="alt"
                        ></S.DeleteImg>
                        }
                      </S.ItemImageContainer>
                      <S.ItemText>{item.name}</S.ItemText>
                    </>
                  )}
                </S.ItemContainer>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </S.CateWrapper>
  );
}
