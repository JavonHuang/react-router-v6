import './portal.scss'
import LeftSide from './LeftSide'
import TopHeader from './TopHeader'
import { Outlet } from 'react-router-dom'
const Portal =()=>{
  return (
    <div className="portal">
      <div className="portal-left">
        <LeftSide/>
      </div>
      <div className="portal-right">
        <TopHeader></TopHeader>
        <Outlet/>
      </div>
    </div>
  );
}

export default Portal
