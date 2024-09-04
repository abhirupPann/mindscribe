import { useEffect } from "react"

function Blog() {
  
useEffect(()=>{
  const fetchData = async()=>{
     const res = await fetch("https://randomuser.me/api/")
     const json = await res.json();
     console.log(json)
   }
   fetchData();
 },[])
  return (
    <div>
      
    </div>
  )
}

export default Blog
