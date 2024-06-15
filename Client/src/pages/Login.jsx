import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className='bg-black h-screen pt-[50px] '>
    <form className='flex flex-col gap-4  p-4  w-[40%] mx-auto rounded-md'>
      <h1 className='text-white text-2xl text-center'>Login</h1>
      
     

      <input type="email" id="p" className='border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 placeholder:font-thin text-white' placeholder='email'/>
      <input type="password" id="p" className='border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 placeholder:font-thin text-white' placeholder='password'/>

      <p className="text-white text-sm font-thin">Don't have an account? <Link to='/' className="text-blue-400">Register</Link></p>
     
     

      <button className='text-white py-3 rounded-md bg-blue-500 w-[30%] mx-auto'>Submit</button>
    </form>
    </div>
  )
}

export default Login
