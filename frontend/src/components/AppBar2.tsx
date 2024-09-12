import { Link } from "react-router-dom"

const avatar= "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
//@ts-ignore
function AppBar2({handleOnclick}) {
  return (
    <div className=" flex justify-between items-center mx-[10vw] mt-[2vh] mb-[5vh]">
      <Link to="/blogs"><div className=" text-xl font-semibold ">MindScribe</div></Link>
      
      <div className=" flex gap-5">
            <button className="btn btn-outline btn-success" onClick={handleOnclick}>Publish</button>
            <img src={avatar} alt="" className="avatar rounded-full w-10 h-10"/>
      </div>
    </div>
  )
}

export default AppBar2
