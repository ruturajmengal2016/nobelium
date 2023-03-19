import React from 'react'

function Child({Name,age,email}) {
  return (
    <div className="h-fit w-fit bg-violet-400 text-start text-[0.5rem] text-white shadow-lg rounded-lg p-2 md:grid md:grid-cols-3 grid grid-col-1">
      <div className='flex flex-col w-fit'>
        <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" alt="" className='h-4 w-4 rounded-full' />
        <span>{Name}</span> 
        <span>{age}</span> 
        <span>{email}</span> 
      </div>
    </div>
  )
}

export default Child