import { useFieldArray } from "react-hook-form";
import * as A from "./RecipeStep.style";
import appendSvg from "@/assets/neighbor-recipe-write/button_append.svg";
import removeSvg from "@/assets/neighbor-recipe-write/button_remove.svg";

export default function RecipeStepB({ register, control, ingredient, seasoning, tool }) {
  // useFieldArray로 ingredients라는 배열 필드를 관리
  const {
    fields: ingreFields,
    append: ingreAppend,
    remove: ingreRemove,
  } = useFieldArray({
    control,
    name: "ingredient",
  });
  const {
    fields: seaFields,
    append: seaAppend,
    remove: seaRemove,
  } = useFieldArray({
    control,
    name: "seasoning",
  });
  const {
    fields: toolFields,
    append: toolAppend,
    remove: toolRemove,
  } = useFieldArray({
    control,
    name: "tool",
  });

  const handlePlusIngredient = () => {
    ingreAppend({
      name: "",
      amount: "",
    });
  };
  const handlePlusSeasoning = () => {
    seaAppend({
      name: "",
      amount: "",
    });
  };
  const handlePlusTool = () => {
    toolAppend({
      name: "",
    });
  };

  const handleRemove = (removeFn, fields, index) => {
    if (fields.length > 1) {
      removeFn(index);
    } else {
      alert("최소 하나의 항목은 있어야 합니다.");
    }
  };

  return (
    <>
      <A.InputSetTitle>식재료 등록</A.InputSetTitle>
      <A.IngreWrapper>
        {ingreFields.map((field, index) => (
          <A.IngreTextInputList key={field.id}>
            <A.IngreButtonImg
              src={removeSvg}
              onClick={() => handleRemove(ingreRemove, ingreFields, index)}
            />
            <A.IngreTextInput
              type="text"
              placeholder="재료 이름"
              {...register(`ingredient.${index}.name`, {
                required: "재료 이름을 입력해주세요.",
              })}
            />
            <A.IngreTextInput
              type="text"
              placeholder="용량과 단위"
              {...register(`ingredient.${index}.amount`, {
                required: "용량을 입력해주세요.",
              })}
            />
          </A.IngreTextInputList>
        ))}
        <A.IngreButtonImg src={appendSvg} onClick={handlePlusIngredient} />
      </A.IngreWrapper>

      <A.InputSetTitle>양념재료 등록</A.InputSetTitle>
      <A.IngreWrapper>
        {seaFields.map((field, index) => (
          <A.IngreTextInputList key={field.id}>
            <A.IngreButtonImg
              src={removeSvg}
              onClick={() => handleRemove(seaRemove, seaFields, index)}
            />
            <A.IngreTextInput
              type="text"
              placeholder="재료 이름"
              {...register(`seasoning.${index}.name`, {
                required: "재료 이름을 입력해주세요.",
              })}
            />
            <A.IngreTextInput
              type="text"
              placeholder="용량과 단위"
              {...register(`seasoning.${index}.amount`, {
                required: "용량을 입력해주세요.",
              })}
            />
          </A.IngreTextInputList>
        ))}
        <A.IngreButtonImg src={appendSvg} onClick={handlePlusSeasoning} />
      </A.IngreWrapper>

      <A.InputSetTitle>도구 등록</A.InputSetTitle>
      <A.IngreWrapper>
        {toolFields.map((field, index) => (
          <A.IngreTextInputList key={field.id}>
            <A.IngreButtonImg
              src={removeSvg}
              onClick={() => handleRemove(toolRemove, toolFields, index)}
            />
            <A.RecipeTextInput
              type="text"
              placeholder="도구 이름"
              {...register(`tool.${index}.name`, {
                required: "도구 이름을 입력해주세요.",
              })}
            />
          </A.IngreTextInputList>
        ))}
        <A.IngreButtonImg src={appendSvg} onClick={handlePlusTool} />
      </A.IngreWrapper>
    </>
  );
}
