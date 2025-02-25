import { useFieldArray } from "react-hook-form";
import * as A from "./RecipeStep.style";

export default function RecipeStepB({ register, control }) {
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
      <h2>식재료 등록</h2>
      {ingreFields.map((field, index) => (
        <div key={field.id}>
          <input
            type="text"
            placeholder="재료 이름"
            {...register(`ingredient.${index}.name`, {
              required: "재료 이름을 입력해주세요.",
            })}
          />
          <input
            type="text"
            placeholder="용량"
            {...register(`ingredient.${index}.amount`, {
              required: "용량을 입력해주세요.",
            })}
          />
          <button type="button" onClick={() => handleRemove(ingreRemove, ingreFields, index)}>
            삭제
          </button>
        </div>
      ))}
      <button type="button" onClick={handlePlusIngredient}>
        +
      </button>

      <h2>양념재료 등록</h2>
      {seaFields.map((field, index) => (
        <div key={field.id}>
          <input
            type="text"
            placeholder="재료 이름"
            {...register(`seasoning.${index}.name`, {
              required: "재료 이름을 입력해주세요.",
            })}
          />
          <input
            type="text"
            placeholder="용량"
            {...register(`seasoning.${index}.amount`, {
              required: "용량을 입력해주세요.",
            })}
          />
          <button type="button" onClick={() => handleRemove(seaRemove, seaFields, index)}>
            삭제
          </button>
        </div>
      ))}
      <button type="button" onClick={handlePlusSeasoning}>
        +
      </button>

      <h2>도구 등록</h2>
      {toolFields.map((field, index) => (
        <div key={field.id}>
          <input
            type="text"
            placeholder="재료 이름"
            {...register(`tool.${index}.name`, {
              required: "재료 이름을 입력해주세요.",
            })}
          />
          <button type="button" onClick={() => handleRemove(toolRemove, toolFields, index)}>
            삭제
          </button>
        </div>
      ))}
      <button type="button" onClick={handlePlusTool}>
        +
      </button>
    </>
  );
}
