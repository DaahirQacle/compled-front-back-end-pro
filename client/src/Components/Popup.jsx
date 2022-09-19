import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentData, statemanager,refreshState } from '../atom';
import toast from 'react-hot-toast';
const initialData ={
  itemName:'',
  description:'',
  price:0,
  company:''
}
function Popup() {
    const[show , setShow] = useRecoilState(statemanager)
    const[data , setData] = useRecoilState(currentData)
    const[refresh , setRefresh] = useRecoilState(refreshState)
    const{_id ,itemName , description , price , company} = useRecoilValue(currentData)
   
    const handleChange= (e)=>{
      setData({...data , [e.target.name]:e.target.value})
    }
    const handleSubmit = async(e)=>{
      e.preventDefault()
    
      try{
        if(_id){
          const {save} = await axios.post(" http://localhost:400/api/update" , data)
          toast.success('updated Successfuly..' ,{duration:2000})
          setData(initialData)
          setShow(!show)
          setRefresh(!refresh)
        }
       else{
        const {save} = await axios.post(" http://localhost:400/api/post" , data)
        toast.success('Registeration Successfuly..' ,{duration:5000})
    
        setShow(!show)
        setRefresh(!refresh)

       }
     

      }catch(e){console.log(e.message)}

    }

  const handleClose = () =>{
    setShow(!show)
    setData(initialData)
  } 
    


  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div  className="my-3">
            <input type="text" placeholder="Enter item Name" className="form-control"
            name="itemName"
            value={itemName}
            onChange={handleChange}
            />
          </div>
          <div  className="my-3">
            <textarea  placeholder="Enter Description" className="form-control"
              name="description"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div  className="my-3">
            <input type="number"  placeholder="Enter item Price" className="form-control" 
              name="price"
              value={price}
              onChange={handleChange}
            />
          </div>
          <div className="my-3">
            <input type="text"  placeholder="Enter Company Name" className="form-control"
              name="company"
              value={company}
              onChange={handleChange}
             />
          </div>
          <div className="d-flex justify-content-end">
          <Button variant={`${_id ? 'primary' : 'success'} `} onClick={handleChange} type="submit">
            {`${_id ? 'Update Changes' :'Save Project'} `}
          </Button>
          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;