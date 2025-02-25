import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Topbar from "@/components/common/topbar/Topbar";
import * as S from "@/components/community/CommunityWrite.style";
import { postNeightbor } from "@/apis/community/Neighbor";

export default function CommunityWritePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");
    const dataToSubmit = {
      ...formData,
      userId: userId,
    };

    try {
      console.log(dataToSubmit);
      const response = await postNeightbor(dataToSubmit, location.state.type);
      console.log(response);
      navigate(location.state.type === "experience" ? "/community/experience" : "/community/q&a");
    } catch (error) {
      console.log(error);
    }
  };

  const title =
    location.state?.type === "q&a"
      ? "Q&A"
      : location.state?.type === "experience"
      ? "이웃 경험 공유"
      : "기본 제목";
  const isFormValid = formData.title.trim() !== "" && formData.content.trim() !== "";

  return (
    <>
      <Topbar pageTitle={title} isSubPage={true} />

      <S.SectionContainer>
        <S.SectionText1>글 등록</S.SectionText1>
        <S.SectionText2>
          {" "}
          {location.state.type === "experience"
            ? "레시피와 관련된 모든 경험을 공유하세요!"
            : "궁금한 것을 물어보세요!"}
        </S.SectionText2>
      </S.SectionContainer>

      <S.BorderLine />

      <S.FormContainer>
        <form onSubmit={handleSubmit} style={{ height: "100%" }}>
          <S.FormTitle
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="제목"
          />
          <S.Line />
          <S.FormTextArea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            placeholder="내용을 입력하세요"
          />
          <br />
          <S.FormButton type="submit" $isActive={isFormValid}>
            글 등록
          </S.FormButton>
        </form>
      </S.FormContainer>
    </>
  );
}
