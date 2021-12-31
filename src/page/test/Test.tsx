import {useSearchParams,useLocation ,useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from 'antd';
import Compon from './Compon'
const Test = ()=>{
  const [name,setName] = useState('黄')
  // const [searchParams, setSearchParams] = useSearchParams()
  // console.log(searchParams.get('id'))
  // const params = useParams()
  // const location =useLocation()
  // console.log(params)
  // console.log(location)

  const handleClick = ()=>{
    setName('黄玉超')
  }

  return(
    <div>
      <div className="login-main">
        <Button type="primary" onClick={handleClick}>父根组件</Button>
      </div>
      <Compon name={name}/>
    </div>
  )
}

export  default Test