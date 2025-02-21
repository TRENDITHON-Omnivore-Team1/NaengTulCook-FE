import Topbar from "@/components/common/topbar/Topbar";
import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react'
import { getPostDetail } from "@/apis/community/PostDetail";

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
    </>
  );
}
