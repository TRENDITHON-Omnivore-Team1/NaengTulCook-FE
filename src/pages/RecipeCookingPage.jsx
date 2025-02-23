import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCookCreate } from "@/apis/recipe/getCookCreate";
import CookingCarousel from "@/components/recipe-cooking/CookingCarousel";
import { RecipeCooking } from "@/dummy/RecipeCooking.js";

export default function RecipeCookingPage() {
  const [searchParam] = useSearchParams();
  const recipeName = searchParam.get("recipeName");

  const [data, setData] = useState(RecipeCooking);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCookCreate(recipeName);

      // console.log("response: ", response); // 나중에 삭제!!
      setData(response);
    };

    if (recipeName) {
      fetchData();
    }
  }, [recipeName]);

  return (
    <>
      <CookingCarousel data={data} />
    </>
  );
}
