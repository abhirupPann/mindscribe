import { Route,  Routes } from "react-router-dom"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Blog from "./pages/Blog"

function App() {
  return (
    <div>
      <Routes>
        <Route element={<SignIn/>} path="/signin"/>
        <Route element={<SignUp/>} path="/signup"/>
        <Route element={<Blog/>} path="/blog"/>
      </Routes>
    </div>
  )
}

export default App
