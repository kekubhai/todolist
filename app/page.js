
"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask]=useState([])
  const submitHandler =(e)=>{
    e.preventDefault()
    console.log(title)
    console.log(desc)
    setmainTask([...mainTask, {title},{desc}]);
    setdesc("")
      settitle("")
      console.log(mainTask)
    
  };
  const deleteHandler=(i)=>{
let copyTask=[...mainTask]

copyTask.splice(i,1)
setmainTask(copyTask)
}
let renderTask=<h2>No Task avilable</h2>;

  renderTask= mainTask?.map((t,i)=>{
    return (
      <li key={i} className='flex items-center justify-between'>
   <div className=' flex items-center justify-between w-2/3 '>
      <h5 className=' text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-lg font-semibold' >{t.desc}</h6>
      <div>
       
      </div>
    </div>
    <button onClick={(i)=>{
      deleteHandler(i)
    }}
    className='bg-red-400 text-white mt-3 px-4 py-2 rounded font-bold'>Delete</button>
      </li>
 
    );
  })



  return (
  <>
  <h1 className='bg-black text-white p-5 text-xl text-center'>Anirban's Todolist </h1>
<div 
className='flex'>

  <form
     onSubmit={submitHandler}>
    <input className=' border-black border-2 m-8 px-4 py-2' type="text" 
    placeholder='Enter Title' value={title} 
    onChange={(e)=>{
      settitle(e.target.value)
    }}/>
  </form>
  <form
  onSubmit={submitHandler}>
    <input className=' border-black border-2 m-8 px-4 py-2' type="text"
     placeholder='Enter Description'  value={desc}
    onChange={(e)=>{
      setdesc(e.target.value)
    }}/>
  </form>
  <button onClick={submitHandler} className='text-white bg-black border-white m-5 px-4 py-2 rounded text-bold'>Submit</button>
 
</div>
<div className='p-5 align-items text-black bg-yellow-500' >
    <ul> 
      {renderTask}
    </ul>
  </div>

  </>
  )
}

export default page
