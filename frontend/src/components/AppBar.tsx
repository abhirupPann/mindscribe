import { Link } from "react-router-dom"
import { IconWriting } from '@tabler/icons-react';
const avatar= "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
function AppBar({searchbar}: {searchbar: boolean}) {
  return (
    <div className=" flex justify-between items-center mx-[2vw] mt-[2vh] mb-[5vh] bg-white dark:bg-gray-800">
      <Link to="/blogs"><div className=" text-xl font-bold dark:text-gray-200 ">MindScribe</div></Link>
      {searchbar? <SearchBar/>: null}
      <div className="flex items-center gap-10">
      <div ><Link to="/publish" className=" flex gap-3 text-xl items-center bg-gray-100 dark:bg-gray-700 dark:text-gray-100 px-5 py-2 rounded-full"><IconWriting/>Write</Link></div>
      <div className="avatar rounded-full w-10 h-5">
            <img src={avatar} alt="" />
      </div>
      </div>

    </div>
  )
}


const SearchBar = ()=>{
     return (
      <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-gray-800">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
     )
}
export default AppBar
