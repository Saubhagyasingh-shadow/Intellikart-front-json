import React from 'react'
import mobile1 from '../assets/mobile1.avif'
import { Link } from 'react-router-dom';
function Card({data}) {
  return (
    <>
    <div className='flex justify-center items-center flex-col p-5 border rounded-xl shadow-xl relative w-full h-[35rem]'>

            <div className='w-[10rem] h-[10rem] overflow-hidden'>
            <img src={data.thumbnail} alt="mobile" className="w-[10rem] h-[10rem]"/>
            </div>



            <div className='flex flex-col justify-start items-start'>


                <h4 className='text-sm font-semibold'>{data.title}</h4>

                <div className='text-[0.85rem]'><span className='font-semibold'>Color:</span>Gray</div>
                <div className='text-[0.85rem]'><span className='font-semibold'>Discount:</span>{data.discountPercentage}%</div>
                <div className='text-[0.85rem]'><span className='font-semibold'>Storage:</span>256 GB</div>
                <div className='text-[0.85rem]'><span className='font-semibold'>Rating:</span>{data.rating}</div>
                <div className='text-[0.85rem]'><span className='font-semibold'>&#x20B9;</span>{data.price}</div>

                <p className='text-[0.7rem] text-left p-3 border border-gray-400/70 rounded-lg my-2 h-[6rem] sm:h-[9rem] overflow-hidden'>{data.description}</p> {/* Reduced the height to h-[6rem] and h-[9rem] for small screens */}
<Link to ={`/imageslider/${data.id}` } className='w-full my-1 bg-black text-white hover:bg-transparent hover:text-black duration-200 text-sm'>
                <button className='w-full my-1 bg-black text-white hover:bg-transparent hover:text-black duration-200 text-sm'>BUY</button>
</Link>

<Link to={`/imageslider/${data.id}`} className='w-full my-1 hover:bg-black hover:text-white duration-200 text-sm'>
                <button className='w-full my-1 hover:bg-black hover:text-white duration-200 text-sm'> 
        View MORE IN DETAIL
     </button></Link>


            </div>

        </div>
        </>
  )
}

export default Card