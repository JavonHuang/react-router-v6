import {useNavigate} from "react-router-dom";
import './Login.scss';
import { Button } from 'antd';
const Login =(props:any)=>{
  const navigate = useNavigate()
  const handleClick = ()=>{
    sessionStorage.setItem('login','true')
    navigate('/Portal/Home')
  }
  
  return (
    <div className="login">
      <div className="login-main">
        <Button type="primary" onClick={handleClick}>登录</Button>
      </div>
    </div>
  );
}

export default Login
