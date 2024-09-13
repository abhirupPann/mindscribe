import { useState,useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
export interface Data {
  authorId: string;
  content: string;
  id: string;
  published: boolean;
  title: string;
  author: {
    id : string;
    name: String;
  }
  }
  

export const useBlogs=()=>{
    const [data, setData] = useState<Data[]>();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const getData = async()=>{
              const res =  await axios.get(`${BACKEND_URL}/api/v1/user/bulk`);
              setData(res.data);
              setLoading(false);       
        }
        getData();
      }, [])

      return {data, loading};
}

export const useBlog=(id: string)=>{
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
      const getData = async()=>{
            const res =  await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,
              {headers:{
                Authorization: `Bearer ${localStorage.getItem("userInfo")}`
              }}
            );
            setData(res.data);
            setLoading(false);       
      }
      getData();
    }, [])

    return {data, loading};
}



    
  
