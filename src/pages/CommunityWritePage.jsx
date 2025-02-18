import { useLocation } from "react-router-dom";
import {useState} from 'react'
import Topbar  from '@/components/common/topbar/Topbar';
import * as S from "@/components/community/CommunityWrite.style"


export default function CommunityWritePage() {
  const location = useLocation();
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

  return (
    <>
      <Topbar pageTitle={location.state.type}/>
      
      <S.SectionContainer>
        <S.SectionText1>글 등록</S.SectionText1>
        <S.SectionText2>레시피와 관련된 모든 경험을 공유하세요!</S.SectionText2>
      </S.SectionContainer>

      <S.BorderLine/>
      
      <S.FormContainer>
        <form>
          <S.FormTitle type="text" name="title" value={formData.title} onChange={handleChange} required placeholder="제목"/>  
          <S.Line/>
          <S.FormTextArea name="content" value={formData.content} onChange={handleChange} required placeholder="내용을 입력하세요"/>
          {/* <S.FormButton>글 등록</S.FormButton> */}
        </form>
      </S.FormContainer>
    </>
  );
}
