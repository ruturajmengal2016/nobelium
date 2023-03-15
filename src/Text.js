import React from 'react'

function Text() {
  return (
    <div className='flex justify-center h-screen'>
        <textarea name="Text" id="" cols="30" rows="5" value="Here is having 100 charaters limit" maxLength={100} className="border-2 border-red-900 self-center"></textarea>
    </div>
  )
}

export default Text