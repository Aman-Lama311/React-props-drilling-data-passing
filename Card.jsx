import React from 'react'

const Card = (props) => {
  
  return (
    <div className='bg-gray-300 inline-block p-6 rounded-md mr-10'>
      <img className='w-28 h-28 rounded-full mb-2' src={props.profile} alt="" />
      <h1 className='text-2xl font-semibold mb-3'>{props.username}</h1>
      <h2 className='text-green-600'>{props.profession}</h2>
      <h2>{props.city}, {props.age}</h2>
      <button className='bg-green-500 text-white px-3 py-1 rounded-md mt-5'>Add Friend</button>
    </div>
  )
}

export default Card
