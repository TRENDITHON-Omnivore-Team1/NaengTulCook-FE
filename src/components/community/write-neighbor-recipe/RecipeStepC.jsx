import { useFieldArray } from "react-hook-form";
import * as A from "./RecipeStep.style";
import appendSvg from "@/assets/neighbor-recipe-write/button_append.svg";
import removeSvg from "@/assets/neighbor-recipe-write/button_remove.svg";

export default function RecipeStepC({ register, control, recipe }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "recipe",
  });

  const handleRemove = (index) => {
    if (fields.length > 1) {
      remove(index);
    } else {
      alert("최소 하나의 항목은 있어야 합니다.");
    }
  };

  return (
    <>
      <A.InputSetTitle>조리 방법</A.InputSetTitle>
      <A.IngreWrapper>
        {fields.map((field, index) => (
          <A.IngreTextInputList key={field.id}>
            <A.IngreButtonImg src={removeSvg} onClick={() => handleRemove(index)} />
            <A.RecipeTextInput
              type="text"
              placeholder="재료 이름"
              {...register(`recipe.${index}.name`, {
                required: "재료 이름을 입력해주세요.",
              })}
            />
          </A.IngreTextInputList>
        ))}
        <A.IngreButtonImg
          src={appendSvg}
          onClick={() =>
            append({
              name: "",
            })
          }
        />
      </A.IngreWrapper>
    </>
  );
}
