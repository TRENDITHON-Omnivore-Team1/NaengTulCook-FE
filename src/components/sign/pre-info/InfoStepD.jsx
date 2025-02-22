const options = [
  "곡류",
  "채소",
  "과일",
  "달걀",
  "유제품",
  "소스 양념장",
  "육류",
  "해산물",
  "어패류",
];

export default function InfoStepD({ register }) {
  return (
    <>
      {options.map((option, i) => (
        <label key={i}>
          <input
            type="checkbox"
            value={option}
            {...register("ingredient", {
              validate: (value, allValues) => {
                return (
                  (allValues["ingredient"] && allValues["ingredient"].length > 0) ||
                  "최소 하나 이상 선택해야 합니다."
                );
              },
            })}
          />
          {option}
        </label>
      ))}
    </>
  );
}
