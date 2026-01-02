import React from 'react'

const Card = ({details}) => {
  return (
    <div className='flex-shrink-0 w-[320px]'>
        <div className='border-2 rounded-2xl p-3 bg-orange-50'>

            {/* image  */}
            <div className='h-[180px] w-full overflow-hidden rounded-2xl'>
                <img src={details.image} alt="" className='w-full h-full object-cover rounded-2xl'/>
            </div>

            {/* Content */}
            <div className='pt-5 h-[180px]'>
                <h2 className='font-bold text-4xl tracking-tighter mb-3'> {details.title} </h2>
                <p> {details.content} </p>
            </div>
        </div>
    </div>
  )
}

export default Card