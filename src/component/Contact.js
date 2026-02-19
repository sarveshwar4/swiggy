import React from 'react'

const Contact = () => {
  return (
    <div>
         <h1>Contact Details</h1>
         <form>
              <input type = "text" placeholder='nameOfUser' className='p-2 m-2 border border-black rounded'/>
              <input type = "text" placeholder='email' className='p-2 m-2 border border-black rounded'/>
              <button className='p-2 m-2 border border-black bg-gray-200 rounded-md text-black'>Submit</button>
         </form>
    </div>
  )
}

export default Contact