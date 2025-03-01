import { Navigate, Route,  Routes } from "react-router-dom"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Blog from "./pages/Blog"
import Blogs from "./pages/Blogs"
import Publish from "./pages/Publish"

function App() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Routes>
        <Route path="/"  element={<Navigate to="/signup"/>}/>
        <Route element={<SignIn/>} path="/signin"/>
        <Route element={<SignUp/>} path="/signup"/>
        <Route element={<Blog/>} path="/blogs/:id"/>
        <Route element={<Blogs/>} path="/blogs"/>
        <Route element={<Publish/> }  path="/publish"/>
      </Routes>
    </div>
  )
}

export default App
