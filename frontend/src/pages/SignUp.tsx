import Auth from "../components/Auth"
import Quote from "../components/Quote"

function SignUp() {
  return (
    <div className="flex">
      <Auth type="signup"/>
      <Quote />
    </div>
  )
}

export default SignUp
