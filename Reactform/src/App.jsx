import React from 'react'
import { useForm } from "react-hook-form"
import './App.css'

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data){
    console.log("Submitting the form",data);
  }
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <label>First Name:</label>
        <input {...register('firstName',{required:true,minlength:3})}/>
      </div>
      <br />
       <div>
        <label>Middle Name:</label>
        <input{...register('MiddleName')}/>
      </div>
      <br />
       <div>
        <label>Last Name:</label>
        <input{...register('lastName')}/>
      </div>
      <br />
      <input type='submit'/>
    </form>
  )
}

export default App