import {useEffect, useRef, useState} from "react"
import Input from "components/input"
import {AiFillFacebook} from "react-icons/ai"


function App() {

  const ref = useRef()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const enable = username && password


  return (
    <div className="h-full w-full flex flex-wrap overflow-auto items-center justify-center gap-x-8">
      <div>
        <img className="hidden md:block w-[400px] h-[581px] relative" src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png" />
        <div className="hidden md:block w-[228px] h-[500px] absolute top-[87px] ml-[126px]">
          <img className="w-full h-full" src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" />
        </div>
      </div>

      <div className="w-[350px] gap-y-3">

        <div className="bg-white border px-[40px] pt-8 pb-2">
          <a href="#" className="flex justify-center mb-8">
            <img className="h-[51px]" src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
          </a>
          <form className="grid gap-y-1.5">
            <Input type="text" value={username} onChange={e => setUsername(e.target.value)} label="Phone number, username or email" />
            <Input type="password" value={password} onChange={e => setPassword(e.target.value)} label="Password" />
          
            
            <button type="submit" disabled={!enable} className="h-[30px] bg-brand font-semibold text-white text-sm rounded-md disabled:opacity-50">Log In</button>
            <div className="flex items-center my-2.5 mb-3.5">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="px-4 text-gray-400 text-sm font-semibold">OR</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <a href="#" className="flex mb-2.5 justify-center items-center gap-x-2 text-sm font-semibold text-facebook">
              <AiFillFacebook size={20} />
              Log in with Facebook
            </a>
            <a href="#" className="text-xs flex items-center justify-center mb-2.5 text-facebook">
                Forgot password?
            </a>
          </form>
        </div>

        <div className="bg-white border p-4 text-sm text-center my-3">
          Don't have an account? <a href="#" className="font-semibold text-brand">Sign up</a>
        </div>

      </div>

    </div>
  );
}

export default App;
