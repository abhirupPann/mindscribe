import Auth from "../components/Auth"
import Quote from "../components/Quote"

function SignIn() {
  return (
    <div className="flex">
      <Auth type="signin"/>
      <Quote />
    </div>
  )
}

export default SignIn
