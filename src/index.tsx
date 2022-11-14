import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import {Router} from './routes/index'
import { AliveScope } from 'react-activation'
ReactDOM.render(
  <BrowserRouter>
    <AliveScope> 
      <Router/>
    </AliveScope>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
