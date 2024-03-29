import {useNavigate} from "react-router-dom";
const LeftSide = ()=>{
  const navigate = useNavigate()
  const handlePage = (url:any)=>{
    navigate(url+'?id=878787',{
      state:{
        name:'测试传值',
      }
    })
  }

  return(
    <div className="left-side">
      <ul>
        <li onClick={()=>handlePage('/Portal/Home')}>Home</li>
        <li onClick={()=>handlePage('/Portal/Test')}>Test</li>
        <li onClick={()=>handlePage('/Portal/uiuiuiu')}>不存在的路由</li>
      </ul>
    </div>
  )
}

export default LeftSide