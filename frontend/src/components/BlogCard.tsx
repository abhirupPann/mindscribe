import { Link } from "react-router-dom";

interface BlogCardVal {
    avatar: string ;
    author: string;
    title: string;
    content: string;
    date: string;
    img: string;
    id: string;
}
function BlogCard( values: BlogCardVal) {
  return (
    <Link to={`${values.id}`}>
    <div className="flex mx-[1vw] my-[2vh] border shadow-md px-[2vw] py-[5vh] rounded-md">
      <div className=" flex flex-col gap-6 w-[100%] md:w-[75%]">
        <div className="head flex gap-4 items-center">
            <div className="avatar rounded-full w-5 h-2">
            <img src={values.avatar} alt="" />
            </div>
            <p className=" pt-[2vh]">{values.author}</p>
            <div className=" w-1 h-1 mt-[2.5vh] rounded-full bg-gray-400"></div>
            <p className="text-gray-400 pt-[2vh] rounded-full">{values.date}</p>
        </div>
        <div className="title text-2xl text-black font-bold">
            {values.title}
        </div>
        <div className="content text-gray-700 font-semibold">
            {values.content.slice(0,100) + "..."}
        </div>
        <div className="readtime text-gray-400">
             {`${Math.ceil(values.content.length / 100)} min read`}
        </div>
      </div>
      <div className=" flex items-center">
        <img src={values.img} alt="" width={300} className=" hidden md:block"/>
      </div>
    </div>
    </Link>
  )
}

export default BlogCard
