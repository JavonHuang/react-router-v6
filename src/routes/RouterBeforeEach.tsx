import {useNavigate,useLocation } from "react-router-dom";
import { Outlet } from 'react-router-dom'
import {checkRouterAuth} from './index'
import {useEffect,useState} from 'react'
const RouterBeforeEach = ()=>{
  const navigate = useNavigate()
  const location = useLocation()
  const [auth,setAuth] = useState(false)
  useEffect(()=>{
    let obj = checkRouterAuth(location.pathname)
    let blLogin =sessionStorage.getItem('login')
    if(obj && obj.auth && blLogin=='false'){
      setAuth(false)
      navigate('/', {replace: true})
    }else{
      setAuth(true)
    }
  })
  return auth?<Outlet/>:null
} 

export default RouterBeforeEach