const options = [
  "마라탕",
  "스테이크",
  "떡볶이",
  "초밥",
  "크림파스타",
  "김치찌개",
  "된장국",
  "샐러드",
  "잡채",
  "짜장면",
  "핫도그",
];

export default function InfoStepC({ register }) {
  return (
    <>
      {options.map((option, i) => (
        <label key={i}>
          <input
            type="checkbox"
            value={option}
            {...register("favorite", {
              validate: (value, allValues) => {
                return (
                  (allValues["favorite"] && allValues["favorite"].length > 0) ||
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
