import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setSelectedPosition, setSearchTerm } from '../redux/championsSlice'

const SearchBar = () => {

    const dispatch = useDispatch()
    const positions = ['ALL', 'ASSASSIN','FIGHTER','MAGE','MARKSMAN','SUPPORT','TANK']
    const [chosenPosition, setChosenPosition] = useState('ALL')
    const handleSearchPosition = (position) => {
        setChosenPosition(position)
        dispatch(setSelectedPosition(position))
    }

    const handleSearchName = (event) => {
        dispatch(setSearchTerm(event.target.value))
    }

  return (
    <div className='p-10'>
        <div className='border flex justify-between h-[50px]'>
            <div className='w-[10%] items-center justify-center flex hover:cursor-pointer
                            group border-r-[1px]
                            '>
                <div className='flex items-center gap-3 '>
                    <div className='group-hover:pr-2 duration-500 ease-in-out w-[30px] flex justify-end'>
                        <i className="fa-solid fa-magnifying-glass text-lg text-[#d3a850]"></i>
                    </div>
                    <input type='text' className=' font-semibold text-sm w-[80px] py-2' placeholder='SEARCH' onChange={(event) => handleSearchName(event)}/>
                </div>
            </div>
            
            <div className='w-[80%] flex justify-center items-center'>
                <div className='flex justify-center w-[50%] text-xs font-semibold '>
                    {positions.map((position, index) => (
                        <span key={index} className={`p-4 cursor-pointer relative group  
                                                    ${chosenPosition === position ? 'opacity-100' : 'opacity-35'} hover:opacity-100 duration-500 ease select-none `}
                            onClick={() => handleSearchPosition(position)}
                        >{position} 
                            <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-[#d3a850] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100                                             
                                               ${chosenPosition === position ? 'opacity-100' : 'group-hover:w-[30%]'}`}></span>
                        </span>
                    ))}
                </div>
            </div>
            <div className='flex items-center justify-center w-[10%] border-l-[1px] relative'>
                <div className='flex items-center justify-center gap-2 w-full h-full cursor-pointer font-semibold'>
                    <span>All difficulties</span>
                    <i class="fa-solid fa-angles-down text-[#d3a850]"></i>
                </div>
                <div className='absolute border bottom-[-25px] h-[30px] bg-red-500 w-full'>
                    dokho
                </div>
                 
            </div>
        </div>
    </div>
  )
}
export default SearchBar