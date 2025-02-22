import * as A from "./InfoStep.style";

export default function InfoStepA({ register, nickname }) {
  return (
    <>
      <A.TextInput
        type="text"
        placeholder="닉네임을 입력해 주세요."
        {...register("nickname", {
          required: "닉네임을 입력해 주세요.",
          maxLength: { value: 10, message: "최대 10자까지 입력할 수 있습니다." },
        })}
      />
      <A.TextLength>{nickname?.length || 0}/10자</A.TextLength>
    </>
  );
}
