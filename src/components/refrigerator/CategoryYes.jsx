import * as S from "./CategoryYes.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import plus_gray from '@/assets/refrigerator/plus_gray.svg';

export default function CategoryYes({ category, ingredient,navigate }) {
  const plusIngrident = [{ ingredient_id: 0, name: '+', picture: plus_gray }, ...ingredient];
  console.log(navigate)
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


  return (
    <S.CateWrapper $category={category}>
      <S.CateHeader>
        <S.CateName>{category}</S.CateName>
        <S.DeleteText>삭제하기</S.DeleteText>
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
