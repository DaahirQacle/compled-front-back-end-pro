import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {RiPencilLine} from 'react-icons/ri'
import { useRecoilState } from 'recoil';
import { currentData, refreshState, statemanager } from '../atom';
export const Project = ({item}) => {
    const{_id ,itemName , description , price , company} = item
    const[show , setShow] = useRecoilState(statemanager)
    const[data , setData] = useRecoilState(currentData)
    const[refresh , setRefresh] = useRecoilState(refreshState)
   
    const updateHandle = (_id , itemName , description , price , company)=>{
        setShow(!show)
          setData({_id , itemName , description , price , company})
        
    }
    const deleteHandle= async(_id)=>{
           try{
            const {data} = await axios.delete(`http://localhost:400/api/delete/${_id}`)
            toast.success('Deleted..')
            setRefresh(!refresh)
           }catch(e){console.log(e)}
    }
    
  return (
  
        <div className="col-sm-4 my-3">
            <div className="card">
                <div className="card-header">
                    <h3>{itemName}</h3>

                </div>
                <div className="card-body">
                    <p className="text-success">{description}</p>
                    <p  className="text-info">{price}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
              <div>
              <p>{company}</p>
              </div>
                <div className="fs-4  cursor">
                <RiPencilLine onClick = {() => updateHandle(_id ,itemName , description , price , company)}
                 className=" mx-4"
                />
                <RiDeleteBin6Line 
                onClick={()=>deleteHandle(_id)}
                /> 
                </div>
                
                </div>
            </div>
        </div>
  )
}
