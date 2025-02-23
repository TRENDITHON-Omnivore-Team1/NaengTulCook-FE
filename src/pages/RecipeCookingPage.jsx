import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCookCreate } from "@/apis/recipe/getCookCreate";
import CookingCarousel from "@/components/recipe-cooking/CookingCarousel";

export default function RecipeCookingPage() {
  const [searchParam] = useSearchParams();
  const recipeName = searchParam.get("recipeName");

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useState(() => {
    const fetchData = async () => {
      try {
        const response = await getCookCreate(recipeName);

        setData(response);
        setIsLoading(true);
      } catch {
        setIsError(true);
      }
    };

    if (recipeName) {
      fetchData();
    }
  }, [recipeName]);

  return (
    <>
      <CookingCarousel data={data} isLoading={isLoading} isError={isError} />
    </>
  );
}
