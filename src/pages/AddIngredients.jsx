import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {postIngredient} from "@/apis/refrigerator/postIngredient"
import * as S from "@/components/refrigerator/AddIngredients.style"
import previusArrow from "@/assets/refrigerator/previousArrow.svg"
import magnifierCircle from "@/assets/refrigerator/magnifierCircle.svg"
import magnifierStick from "@/assets/refrigerator/magnifierStick.svg"
import plus_add from "@/assets/refrigerator/plus_add.svg"
import check from "@/assets/refrigerator/check.svg"

const typeArr = ['전체', '가공/유제품', '채소', '육류', '해산물', '곡물', '과일', '조미료', '냉동식품']

function getLabel(type) {
  switch (type) {
    case "전체":
      return "all";
    case "가공/유제품":
      return "dairy";
    case "채소":
      return "vegetables";
    case "육류":
      return "meat";
    case "해산물":
      return "seafood";
    case "곡물":
      return "grains";
    case "과일":
      return "fruits";
    case "조미료":
      return "seasonings";
    case "냉동식품":
      return "frozen";
    default:
      return "searchByName";
  }
}

export default function AddIngredients() {
  const [searchName, setSearchName] = useState('');
  const [selectedType, setSelectedType] = useState('전체')
  const [data, setData] = useState([])
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const navigate = useNavigate();
  // console.log(searchName)
  // console.log(selectedType)
  console.log(selectedIngredients)
  const handleSearchName = (e) => {
    setSearchName(e.target.value); 
  };
  const handleSelectedType = (e) => {
    setSelectedType(e.target.textContent);
  }
  const handleSelectIngredient = (ingredientName) => {
    setSelectedIngredients((prevSelected) => {
      // ingredientName이 이미 선택되어 있으면 삭제, 없으면 추가
      if (prevSelected.includes(ingredientName)) {
        return prevSelected.filter((name) => name !== ingredientName);
      } else {
        return [...prevSelected, ingredientName];
      }
    });
  };
  const handleSubmit = async () => {
    try {
      const response = await postIngredient(selectedIngredients)
  
      console.log("전송 성공:", response);
      alert("재료가 성공적으로 추가되었습니다!");
      navigate('/refrigerator')
    } catch (error) {
      console.error("전송 실패:", error);
      alert("재료 추가에 실패했습니다.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `${import.meta.env.VITE_BASE_URL}/api/ingredients/${getLabel(selectedType)}`;
  
        // searchName이 비어있지 않다면 검색 API 사용
        if (searchName.trim() !== "") {
          url = `${import.meta.env.VITE_BASE_URL}/api/ingredients/searchByName?name=${searchName}`;
        }
  
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };
  
    fetchData();
  }, [selectedType, searchName]); 
  

  return (
    <>
      <S.AddIngreWrapper>
        <S.HeaderContainer>
          <S.PreviousArrowImg src={previusArrow} alt="alt"
            onClick={() => navigate(-1)}
          />
          <S.SearchInputContainer>
            <S.ManifierImgContainer>
              <S.ManifierCircleImg src={magnifierCircle} alt="alt"/>
              <S.ManifierStickImg src={magnifierStick} alt="alt"/>
            </S.ManifierImgContainer>
            <S.SearchInput 
              type='text'
              value={searchName}
              onChange={handleSearchName}
              placeholder="원하는 재료를 검색하세요"/>
          </S.SearchInputContainer>
          <S.CompleteButton onClick={handleSubmit}>완료</S.CompleteButton>
        </S.HeaderContainer>
        
        <S.TypeArrContainer>
        {searchName ? (
            <S.TypeText $isActive={true}>검색결과</S.TypeText>
          ) : (
            typeArr.map((type, index) => {
              let isActive = selectedType === type;

              return (
                <S.TypeText 
                  key={index} 
                  $isActive={isActive}
                  onClick={handleSelectedType}
                >
                  {type}
                </S.TypeText>
              );
            })
          )}
        </S.TypeArrContainer>
        {data ? 
          <S.IngredientsContainer>
            {data.map((d)=>(
              <S.IngredientContainer 
                key={d.ingredientId}
                onClick={() => handleSelectIngredient(d.name)}
              >
                <S.ImgContainer>
                  <S.IngredientImg src={d.picture} alt="alt"/>
                </S.ImgContainer>
                <S.IngredientName>{d.name}</S.IngredientName>
                <S.PlusImg 
                  src={selectedIngredients.includes(d.name) ? check : plus_add} 
                  alt="alt"
                />
              </S.IngredientContainer>
            ))}
          </S.IngredientsContainer>
          : <p>로딩 중...</p>}

      </S.AddIngreWrapper>
    </>
  );
}
