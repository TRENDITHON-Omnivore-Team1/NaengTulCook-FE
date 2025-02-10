import * as S from "./CategoryYes.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function CategoryYes({category,ingredient}){
  // console.log(ingredient)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
  };

  const groupedItems = [];
  for (let i = 0; i < ingredient.length; i += 12) {
    groupedItems.push(ingredient.slice(i, i + 12));
  }
  // console.log(groupedItems)
  return (
      <S.CateWrapper category={category}>
        <S.CateHeader>
          <S.CateName>{category}</S.CateName>
          <S.DeleteText>삭제하기</S.DeleteText>
        </S.CateHeader>
        <Slider {...settings}>
          {groupedItems.map((group, index) => (
            <div key={index} >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)", // 4열
                  gridColumnGap: '42px',
                  padding:'4px'
                }}
              >
                {group.map((item) => (
                  <S.ItemContainer key={item.ingredient_id}>
                    <S.ItemImageContainer>
                      <S.ItemImage
                        src={item.picture}
                        alt='alt'
                      />
                    </S.ItemImageContainer>
                    <S.ItemText>{item.name}</S.ItemText>
                  </S.ItemContainer>
                  
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </S.CateWrapper>
  )
}
