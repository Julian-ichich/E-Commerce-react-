
import { useEffect } from "react" 
const LocalStorageMain=()=>{
    useEffect(()=>{
        localStorage.setItem('account', JSON.stringify([]))
        localStorage.setItem('Sign-Out', JSON.stringify(false))
      },[])
}

export {LocalStorageMain}