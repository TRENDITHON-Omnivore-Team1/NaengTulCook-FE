import Topbar from "@/components/common/topbar/Topbar";
import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react'
import { getPostDetail } from "@/apis/community/PostDetail";
import * as S from "@/components/community/CommunityPostDetail.style"
import star_gray from '@/assets/community/star_gray.svg'
import star_red from '@/assets/community/star_red.svg'
import comment from '@/assets/community/comment.svg'
import React from "react";

export default function CommunityPostDetail() {
  const[data, setData] = useState({});
  const {type,id} = useParams()

  useEffect(() => {
    const fetchData = async()=>{
      try{
        const response = await getPostDetail(type,id)
        setData(response)
        // console.log(response)
      }catch(err){
        console.log(err)
      }
    }
    
    fetchData();
  }, []);

  return (
    <>
      <Topbar pageTitle={"게시글"} />
      <S.ContentContainer>
          <S.Title>{data.title}</S.Title>
          <S.NickName>{data.userId}</S.NickName>
          <S.Time>{data.createdAt}</S.Time>
          <S.Content>{data.content}</S.Content>
          <S.SmallLine/>
          <S.FlexContainer>
            <img  src={data.liked ? star_red : star_gray} style={{width:'16px',height:'16px',marginBottom:'4px'}}/>
            <S.Text style={{marginLeft:'8px',marginRight:'17px'}}>스크랩</S.Text>
            <img src={comment}/>
            <S.Text style={{marginLeft:'9px'}}>댓글</S.Text>
          </S.FlexContainer>
      </S.ContentContainer>

      <S.BigLine/>

      <S.CommentWrapper>
        <S.Title>댓글</S.Title>
        {data?.comments?.map((comment)=>{
          return(
            <React.Fragment key={comment.id}>
              <S.CommentContainer>
                <S.CommentNickName>{comment.userId}</S.CommentNickName>
                <S.CommentContent>{comment.content}</S.CommentContent>
              </S.CommentContainer>
              <S.SmallLine/>
            </React.Fragment>
          )
        })}
      </S.CommentWrapper>

      <S.InputWrapper>
        <S.InputContainer>
          <S.TextArea placeholder="답변을 남겨보세요."/>
          <S.Button>댓글 등록</S.Button>
        </S.InputContainer>
      </S.InputWrapper>
    </>
  );
}
