import { Data } from "../hooks/Index"
const avatar= "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
const date = "Dec 3, 2023"
function FullBlog(data: Data) {
  return (
    <div className=' flex flex-col gap-10 justify-between mx-[25vw] my-[5vh] px-[2vw] py-[5vh]'>
      <div className=" flex flex-col gap-10">
         <h1 className=" text-3xl font-bold">{data.title}</h1>

         <div className="head flex gap-4 items-center">
  
             <img src={avatar} alt="" width={50}/>
        
            <p className=" pt-[2vh]">{data.author.name}</p>
            <div className=" w-1 h-1 mt-[2.5vh] rounded-full bg-gray-400"></div>
            <p className="text-gray-400 pt-[2vh] rounded-full">{date}</p>
        </div>
      </div>
      <div>
        <p  className=" text-xl leading-loose">{data.content}</p>
      </div>
    </div>
  )
}

export default FullBlog
