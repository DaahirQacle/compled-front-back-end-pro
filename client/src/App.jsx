import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { statemanager } from './atom';
import Popup from './Components/Popup';
import { Projects } from './Components/projects';

function App() {
  const[show , setShow] = useRecoilState(statemanager)
  return (
    <div className="container my-3 text-center">
    <h1>Projects</h1>
   <div className="d-flex justify-content-end mx-3 ">
   <button className="btn btn-success " onClick={()=>setShow(!show)}>Add New </button>
   </div>

      <Projects/>
        <Popup />

 
    </div>
  )
}

export default App
