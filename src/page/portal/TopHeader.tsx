import { Button } from 'antd';
import {useNavigate} from "react-router-dom";
const TopHeader = ()=>{
  const navigate = useNavigate()
  const handleClick = ()=>{
    sessionStorage.setItem('login','false')
    navigate('/')
  }
  return(
    <div className="top-header">
      <Button type="primary" onClick={handleClick}>退出</Button>
    </div>
  )
}

export default TopHeader