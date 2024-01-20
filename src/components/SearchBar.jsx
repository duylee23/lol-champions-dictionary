import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const SearchBar = () => {

    // const championsData = useSelector((state) => state.champions.championList)
    // console.log(championsData.name)
    const positions = ['ALL', 'ASSASINS','FIGHTERS','MAGES','MARKMEN','SUPPORTS','TANKS']
    const [chosenPosition, setChosenPosition] = useState('ALL')
    const handleSearchPosition = (position) => {
        setChosenPosition(position)
    }
  return (
    <div className='p-10'>
        <div className='border flex justify-between h-[50px]'>
            <div className='border w-[10%] items-center justify-center flex hover:cursor-pointer
                            group
                            '>
                <div className='flex items-center gap-3 '>
                    <i className="fa-solid fa-magnifying-glass "></i>
                    <div className=' group-hover:p-2 duration-500 ease-in-out'>
                        <span>SEARCH</span>
                    </div>
                </div>
            </div>
            
            <div className='border w-[80%] flex justify-center items-center'>
                <div className='flex justify-center w-[50%] text-xs font-semibold '>
                    {positions.map((position, index) => (
                        <span key={index} className={`p-4 cursor-pointer relative group opacity-35 hover:opacity-100 duration-500 ease select-none ${chosenPosition === position ? 'opacity-100' : ''}`}
                            onClick={() => handleSearchPosition(position)}
                        >{position} 
                            <span className={` absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-[#d3a850] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100                                             
                                              ${chosenPosition === position ? 'opacity-100' : 'group-hover:w-[30%]'}`}></span>
                        </span>
                    ))}
                </div>
            </div>
            <div className='bg-blue-500 border w-[10%]'>difficulty</div>
        </div>
    </div>
  )
}

export default SearchBar