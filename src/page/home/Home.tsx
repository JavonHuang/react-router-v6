import { Button } from 'antd';
import {useState} from "react"

const Home = ()=>{
  const [num,setNum]=useState(0);
  const handleClick = ()=>{
    setNum(num=>num+1);
  }
  return <div>
    {/* <KeepAlive cacheKey="UNIQUE_ID" > */}
       <Button type="primary" onClick={handleClick}>加1</Button>
      主页{num}
    {/* </KeepAlive> */}
  </div>
}

export default Home