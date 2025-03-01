import { useState } from "react";
import AppBar2 from "../components/AppBar2"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

function Publish() {

  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();
  //@ts-ignore
  const [published, setPublished] = useState<boolean>(true);

  const navigate = useNavigate();
  const handleOnClick = async()=>{
        const res = await axios.post(`${BACKEND_URL}/api/v1/blog` ,
        {
          title,
          content,
          published
        },
        {headers:{
                Authorization: `Bearer ${localStorage.getItem("userInfo")}`
        }},
        )
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        if(res) navigate(`/blogs/${res.data.id}`);
        
        console.log(res.data.id)
  }
  return (
    <div>
      <AppBar2 handleOnclick={handleOnClick}/>
      <div className=" mx-[10vw]">
      <input type="textarea" placeholder="Title" className="input border-none text-5xl w-full outline-none focus:outline-none font-bold mt-[10vh] max-h-[30%] shadow-sm py-[5vh] dark:bg-gray-800"  onChange={(e)=>{setTitle(e.target.value)}}/>
      <textarea placeholder="Content" className="input border-none text-2xl w-full outline-none focus:outline-none mt-[10vh] h-[100vh] dark:bg-gray-800" onChange={(e)=>{setContent(e.target.value)}}/>
      </div>   
    </div>
  )
}

export default Publish
