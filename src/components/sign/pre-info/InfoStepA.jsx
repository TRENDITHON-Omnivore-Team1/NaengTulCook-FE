export default function InfoStepA({ register }) {
  return (
    <>
      <input
        type="text"
        placeholder="닉네임을 입력해 주세요."
        {...register("nickname", { required: "닉네임을 입력해 주세요." })}
      />
    </>
  );
}
