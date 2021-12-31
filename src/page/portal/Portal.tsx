import './portal.scss'
import LeftSide from './LeftSide'
import TopHeader from './TopHeader'
import RouterBeforeEach from './../../routes/RouterBeforeEach'

const Portal =()=>{
  return (
    <div className="portal">
      <div className="portal-left">
        <LeftSide/>
      </div>
      <div className="portal-right">
        <TopHeader></TopHeader>
        <RouterBeforeEach/>
      </div>
    </div>
  );
}

export default Portal
