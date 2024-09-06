import { useContext, useState } from "react"
import { NavLink } from "react-router-dom" 
import { ShoppingCartContext } from "../../Context"


function SignUp() {
const {saveItem} = useContext(ShoppingCartContext)
const [usuario, setUsuario] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

 
const agregarUsuario= ()=>{
  if(usuario, email, password){
    const usuarioObjeto={
      name: usuario,
      email: email,
      password: password
    }
  
    saveItem(usuarioObjeto)
    setUsuario('')
    setEmail('')
    setPassword('')
  }else{
    alert('ingrese datos')
  }
  
}
   
return(

    <div className="body bg-black absolute top-0 left-0">
    <div className="bg-black    overflow-hidden  ">
      <div id="myDIV" >
        <div className="w-[100vw] h-[100vh] px-3 sm:px-5 flex items-center justify-center absolute flex-col">
          <div className="w-full sm:w-1/2 lg:2/3 px-6 bg-blue-500  bg-clip-padding backdrop-filter backdrop-blur-sm text-white z-50 py-4  rounded-lg">
            <div className="w-full flex justify-center text-[#00FF00] text-xl mb:2 md:mb-5">
              Sign Up
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-xs font-medium text-white">Your name</label>
              <input value={usuario} onChange={(e)=>setUsuario(e.target.value.trim())} type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-xs font-medium text-white">Your email</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value.trim())} type="email"  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@neurolink.com" required />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-xs font-medium text-white">Your password</label>
              <input value={password} onChange={(e)=>setPassword(e.target.value.trim())} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="flex flex-row justify-between">
              <div className="text-white text-sm md:text-md ">Forgot Password</div>
              <div className="text-[#00FF00] text-sm md:text-md">Signup</div>
            </div>
            <NavLink to='/sign-in'>      
            <div onClick={()=> agregarUsuario()} className="mt-4 md:mt-10 w-full flex justify-center text-sm md:text-xl bg-green-300 py-2 rounded-md text-black">
              Sign Up
            </div>
      
          </NavLink>  

          </div>

         <NavLink to='/sign-in' className="mt-4 md:mt-10 w-60 flex justify-center text-sm md:text-xl bg-red-300 py-2 rounded-md">      
          Back
        </NavLink>  
          
          
        </div>
        
      </div>
      
    </div>
    
  </div>
  )

  
}

export default SignUp




























