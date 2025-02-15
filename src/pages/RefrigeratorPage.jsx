import Topbar from "@/components/common/topbar/Topbar";
import { styled } from "styled-components";
import {useEffect,useState} from 'react';
import CategoryNo from "@/components/refrigerator/CategoryNo";
import CategoryYes from "@/components/refrigerator/CategoryYes";
import { getIngredient,getCondiment } from "@/apis/refrigerator/getIngredient";

const RefriWrapper = styled.div`
  padding: 30px 30px 100px;
`;

export default function RefrigeratorPage() {
  const [ingredient,setIngredient]= useState([])
  const [condiment,setCondiment]= useState([])
  const [loading,setLoading] =useState(true)
  
  // console.log('렌더링')
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response1 = await getIngredient();
        const response2 = await getCondiment();
        // console.log(response1);
        // console.log(response2);
        setIngredient(response1)
        setCondiment(response2)
        setLoading(false)
      } catch (error) {
       console.log(error)
      }
    };

    fetchData();  
  }, []);  

  if(loading){
    return <p>Loading...</p>
  }

  return (
    <>
      <Topbar pageTitle="나의 냉장고" />
      <RefriWrapper>
        {ingredient.length > 0 ? (
          <CategoryYes category='식재료' ingredient={ingredient} />
        ) : (
          <CategoryNo category="식재료" marginBottom="120px" />
        )}

        {condiment.length > 0 ? (
          <CategoryYes category='조미료' ingredient={condiment}/>
        ) : (
          <CategoryNo category="조미료" marginBottom="0" />
        )}
      </RefriWrapper>
    </>
  );
}
