import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setSelectedPosition, setSearchTerm, chooseDifficulty } from '../redux/championsSlice'

const SearchBar = () => {
    const dispatch = useDispatch()
    const positions = ['ALL', 'ASSASSIN','FIGHTER','MAGE','MARKSMAN','SUPPORT','TANK']
    const [chosenPosition, setChosenPosition] = useState('ALL')
    const [showDropdown, setShowDropdown] = useState('false')
    const [difficulty, setDifficulty] = useState(null)
    const dropdownRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          // Clicked outside the dropdown, close it
          setShowDropdown(false);
        }
      };
      // Attach the event listener to the document
       document.addEventListener('mousedown', handleClickOutside);
  
      // Clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [dropdownRef]);

    const handleSearchPosition = (position) => {
        setChosenPosition(position)
        dispatch(setSelectedPosition(position))
    }

    const handleSearchName = (event) => {
        dispatch(setSearchTerm(event.target.value))
    }

    const handleClickDifficulties = () => {
        setShowDropdown(!showDropdown)
    }

    const handleChooseDifficulty = (selectedDifficulty) => {
        setDifficulty(selectedDifficulty)
        dispatch(chooseDifficulty(selectedDifficulty))
        setShowDropdown(false)
    }

  return (
    <div className='p-10'>
        <div className='border-[#08d7f7] border flex justify-between h-[50px]'>
            <div className='w-[10%] items-center justify-center flex hover:cursor-pointer
                            group border-r-[1px]
                            '>
                <div className='flex items-center gap-3 '>
                    <div className='group-hover:pr-2 duration-500 ease-in-out w-[30px] flex justify-end'>
                        <i className="fa-solid fa-magnifying-glass text-lg text-[#d3a850]"></i>
                    </div>
                    <input type='text' spellCheck='false' className=' font-semibold text-sm w-[80px] py-2' placeholder='SEARCH' onChange={(event) => handleSearchName(event)}/>
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
            <div  ref={dropdownRef}  className='flex items-center justify-center w-[10%] border-l-[1px] relative' onClick={handleClickDifficulties}>
                <div className='flex items-center justify-center gap-2 w-full h-full cursor-pointer font-semibold'>
                    {difficulty === null ? (<span>All difficulties</span>) : (
                        <>
                        <span>{difficulty}</span>
                        <i className="fa-regular fa-circle-xmark hover:text-[#08d7f7] duration-200" onClick={() => handleChooseDifficulty(null)}></i>
                        </>
                    )}
                    
                    <i className="fa-solid fa-angles-down text-[#d3a850]"></i>
                </div>
                {showDropdown === true && 
                (
                    <div className='absolute border border-t-0 bg-[#fff] h-[100px] top-[40px] p-[1px] w-full flex flex-col items-center justify-center'>
                        <div className='hover:bg-[#f5f5f5] duration-300 ease-in-out flex items-center gap-3 justify-center w-full  h-ful p-2' onClick={() => handleChooseDifficulty('Easy')}>
                            <i className="fa-solid fa-diamond text-[#08d7f7]"></i>
                            <i className="fa-solid fa-diamond text-[#e1f7fc]"></i>
                            <i className="fa-solid fa-diamond text-[#e1f7fc]"></i>
                        </div>
                        <div className='hover:bg-[#f5f5f5] transition duration-300 ease flex items-center gap-3 justify-center w-full  h-ful p-2'  onClick={() => handleChooseDifficulty('Medium')}>
                            <i className="fa-solid fa-diamond text-[#08d7f7]"></i>
                            <i className="fa-solid fa-diamond text-[#08d7f7]"></i>
                            <i className="fa-solid fa-diamond text-[#e1f7fc]"></i>
                        </div>
                        <div className='hover:bg-[#f5f5f5] transition duration-300 ease flex items-center gap-3 justify-center w-full  h-ful p-2'  onClick={() => handleChooseDifficulty('Hard')}>
                            <i className="fa-solid fa-diamond text-[#08d7f7]"></i>
                            <i className="fa-solid fa-diamond text-[#08d7f7]"></i>
                            <i className="fa-solid fa-diamond text-[#08d7f7]"></i>
                        </div>
                    </div>
                )}
              
                 
            </div>
        </div>
    </div>
  )
}
export default SearchBar