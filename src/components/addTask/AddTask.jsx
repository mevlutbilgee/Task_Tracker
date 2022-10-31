import React,{useState} from 'react'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import axios from "axios"

const AddTask = ({getTask}) => {
  const [task,setTask]=useState("")
  const [date,setDate]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newTask={task,date}
    console.log("task geldi mi:",newTask)
    addNewTask(newTask)
    setTask("")
    setDate("")
  }
 const addNewTask=async(newTask)=>{
  const url = "https://635f638a3e8f65f283b1f178.mockapi.io/api/task";
  try {
    await axios.post(url,newTask)
  }catch (error) { 
  }
  getTask();
 }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text"
         placeholder="Enter task" 
         onChange={(e)=>setTask(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" 
        onChange={(e)=>setDate(e.target.value)}/>
      </Form.Group>
    <div className="text-center">
      <Button variant="success w-50 " type="submit">
        Save
      </Button>
      </div>
    </Form>
    </div>
  )
}

export default AddTask;