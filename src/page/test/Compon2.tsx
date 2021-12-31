import { useEffect,useState } from "react"

const Compon2 = (props:any)=>{
  const [name,setName] = useState('黄')

  console.log('Compon2',props)

  // useEffect(()=>{
  //   console.log('Compon2',props)
  //   setName(props.name)
  // },[props])
  return(
    <div>
      组件二
    </div>
  )
}

export default Compon2