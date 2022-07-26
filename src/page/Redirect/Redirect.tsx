import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Redirect=(props:any)=> {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/Portal/Home");
  });
  return <></>;
}

export default Redirect