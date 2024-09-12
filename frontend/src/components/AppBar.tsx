import { Link } from "react-router-dom"
import { IconWriting } from '@tabler/icons-react';
const avatar= "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
function AppBar() {
  return (
    <div className=" flex justify-between items-center mx-[2vw] mt-[2vh] mb-[5vh]">
      <Link to="/blogs"><div className=" text-xl font-semibold ">MindScribe</div></Link>
      <input type="text" className=" w-[30vw] rounded-full border shadow-md px-[2vw] py-[1vh]"/>
      <Link to="/publish"><div className=" flex gap-3 ml-[15vw] text-xl items-center bg-gray-100 px-5 py-2 rounded-full"><IconWriting/>Write</div></Link>
      <div className="avatar rounded-full w-10 h-5 mb-3">
            <img src={avatar} alt="" />
      </div>
    </div>
  )
}

export default AppBar
