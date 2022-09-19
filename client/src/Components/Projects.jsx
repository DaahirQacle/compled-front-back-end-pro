import { useEffect , useState } from "react"
import axios from 'axios'
import { Project } from "./Project"
import { useRecoilState } from "recoil"
import {refreshState} from '../atom'
export const Projects = () => {
  const[pro , setPro] = useState([])
  const[refresh , setRefresh] = useRecoilState(refreshState)
    useEffect(()=>{
  const getData = async()=>{
       try{
         const {data} = await axios.get("http://localhost:400/api/selectionAll")
          setPro(data.message)
          
        } 
       catch(e){console.log(e.message)}
        }
       getData()

    },[refresh])

  return (
    <div className="container">
      <div className="row">
      {
        pro.map((item , index)=>(
          <Project item = {item} key={index}/>
        ))
      }
      </div>
    </div>
  )
}
