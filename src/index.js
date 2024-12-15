import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Table from './table/table';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpadatingPhase from './life cycle/updated phare';
import Fake from "./cards/fake"
import Gallery from "./gallery/gallerymain"
import Funcomp from "./gallery/funccomp"
import Parentcomp from './parent/parent';
import States from "./States"
import Cartfake from './cards/Cartfake';
import Portfolio from './profilo/profilo';
// import Bootstrap from './boostrap';
import Toggle from './toggle switch/toggle'; 
import sampleform from './form/sample';
import Sampleform from './form/sample';
import NumberChecker from './form/task ';
import Todo from './todo/todo';
import LifeCycle from './life cycle/mounting';
import FuncLifeCyle from './lifecycle-fun-com/funcom';
import AxosCard from './life cycle/updatedphase-axos-fake';
import Cardsfun from './life cycle/upadatetask';
import Calculator from './calculator/calculator';
import SampleForm from './form/funcomp';
import FormComp from './lifecycle-fun-com/funform/funform';
import MainRouter from './Routers/mainrouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <App />  */}
    <Table/>

    <Gallery/>
      <Parentcomp/>
     <States/>
    <Funcomp/>
    <Cartfake/>
     <Fake/>    
     <Portfolio/>
     {/* <Bootstrap/> */}
     <Toggle/>
     <Sampleform/>
     <NumberChecker/>
     <Todo/>
     <LifeCycle/>
     <UpadatingPhase/>
     <AxosCard/>
     <Cardsfun/>
     <FuncLifeCyle/>
      <Calculator/>
    <SampleForm/>
    <FormComp/> 
    <MainRouter/>


        
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
