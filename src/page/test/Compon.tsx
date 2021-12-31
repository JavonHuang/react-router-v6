import { useEffect } from "react"
import Compon2 from './Compon2'
const Compon = (props:any)=>{
  
  useEffect(()=>{
    console.log('Compon',props)
  },[props])
  return(
    <div>
      组件一
      <Compon2 {...props}/>
    </div>
  )
}

export default Compon