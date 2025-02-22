const stepOptions1 = [
  { id: "age-0", value: "10대", style: "short" },
  { id: "age-1", value: "20대", style: "short" },
  { id: "age-2", value: "30대", style: "short" },
  { id: "age-3", value: "40대", style: "short" },
  { id: "age-4", value: "50대", style: "short" },
  { id: "age-5", value: "그 이상", style: "short" },
];
const stepOptions2 = [
  { id: "family-0", value: "1인 가구", buttonStyle: "short" },
  { id: "family-1", value: "2인 가구", buttonStyle: "short" },
  { id: "family-2", value: "다가구", buttonStyle: "long" },
];
const stepOptions3 = [
  { id: "skill-0", value: "완전 처음", buttonStyle: "long" },
  { id: "skill-1", value: "라면 끓이기 정도는 할 수 있어요", buttonStyle: "long" },
  { id: "skill-2", value: "레시피 보면 잘 따라해요", buttonStyle: "long" },
  { id: "skill-3", value: "요리하는 것이 익숙해요", buttonStyle: "long" },
  { id: "skill-4", value: "고급 요리도 할 줄 알아요", buttonStyle: "long" },
];

export default function InfoStepB({ register, step }) {
  const options = step === 1 ? stepOptions1 : step === 2 ? stepOptions2 : stepOptions3;

  const fieldName = step === 1 ? "age" : step === 2 ? "family" : "skill";

  return (
    <>
      {options.map((option) => (
        <label key={option.id}>
          <input
            type="checkbox"
            value={option.value}
            {...register(fieldName, {
              validate: (value, allValues) => {
                return (
                  (allValues[fieldName] && allValues[fieldName].length > 0) ||
                  "최소 하나 이상 선택해야 합니다."
                );
              },
            })}
          />
          {option.value}
        </label>
      ))}
    </>
  );
}
