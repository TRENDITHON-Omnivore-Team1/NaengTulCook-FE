import Topbar from "@/components/common/topbar/Topbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPostDetail, postComment } from "@/apis/community/PostDetail";
import * as S from "@/components/community/CommunityPostDetail.style";
import star_gray from "@/assets/community/star_gray.svg";
import star_red from "@/assets/community/star_red.svg";
import comment_img from "@/assets/community/comment.svg";
import React from "react";
import axios from "axios";

export default function CommunityPostDetail() {
  const [data, setData] = useState({});
  const [comment, setComment] = useState("");
  const { type, id } = useParams();

  // 데이터 불러오는 함수
  const fetchData = async () => {
    try {
      const response = await getPostDetail(type, id);
      setData(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLike = async () => {
    try {
      let type_;
      type_ = type === "experience" ? "neighbor-experience" : "qna";

      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/${type_}/posts/${id}/like?userId=${localStorage.getItem("userId")}`
      );
      
      fetchData();
    } catch (err) {
      console.error("좋아요 실패:", err);
      alert("좋아요 처리에 실패했습니다.");
    }
  };

  const handleCommentSubmit = async () => {
    if (!comment.trim()) {
      alert("댓글을 입력해주세요.");
      return;
    }

    try {
      let type_;
      type_ = type === "experience" ? "neighbor-experience" : "qna";

      // console.log(id)
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/${type_}/posts/${id}/comments`,
        comment,
        {
          headers: {
            "Content-Type": "application/json", // 문자열을 JSON으로 전송하려면 명시적으로 지정
          },
          params: { userId: localStorage.getItem("userId") },
        }
      );
      setComment("");
      fetchData(); // 댓글 등록 후 데이터를 다시 불러오기
    } catch (err) {
      console.error("댓글 등록 실패:", err);
      alert("댓글 등록에 실패했습니다.");
    }
  };

  return (
    <>
      <Topbar pageTitle={"게시글"} isSubPage={true} />
      <S.ContentContainer>
        <S.Title>{data.title}</S.Title>
        <S.NickName>{data.nickname ? data.nickname : "익명"}</S.NickName>
        <S.Time>{data.createdAt}</S.Time>
        <S.Content>{data.content}</S.Content>
        <S.SmallLine />
        <S.FlexContainer>
          <img
            src={data.liked ? star_red : star_gray}
            style={{ width: "16px", height: "16px", marginBottom: "4px", cursor: "pointer" }}
            onClick={handleLike}
          />
          <S.Text style={{ marginLeft: "8px", marginRight: "17px" }}>스크랩</S.Text>
          <img src={comment_img} />
          <S.Text style={{ marginLeft: "9px" }}>댓글</S.Text>
        </S.FlexContainer>
      </S.ContentContainer>

      <S.BigLine />

      <S.CommentWrapper>
        <S.Title>댓글</S.Title>
        {data?.comments?.map((comment) => {
          return (
            <React.Fragment key={comment.id}>
              <S.CommentContainer>
                <S.CommentNickName>
                  {comment.nickname ? comment.nickname : "익명"}
                </S.CommentNickName>
                <S.CommentContent>{comment.content}</S.CommentContent>
              </S.CommentContainer>
              <S.SmallLine />
            </React.Fragment>
          );
        })}
      </S.CommentWrapper>

      <S.InputWrapper>
        <S.InputContainer>
          <S.TextArea
            placeholder="답변을 남겨보세요."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <S.Button $isEmpty={comment.trim() === ""} onClick={handleCommentSubmit}>
            댓글 등록
          </S.Button>
        </S.InputContainer>
      </S.InputWrapper>
    </>
  );
}
