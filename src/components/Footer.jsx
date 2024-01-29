import React from 'react'
import {RiotGame} from '../svg'
const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 text-white bg-[#000] bottom-0 w-full p-8 z-20'>
      <div className='flex gap-5'>
        <a target='_blank' href='https://www.facebook.com/duymeaNingless.23' className='px-[10px] py-[5px] rounded-[20px] bg-[#343434] hover:text-[#d3a850] text-[1.2rem] cursor-pointer '><i className="fa-brands fa-facebook "></i></a>
        <a target='_blank' href='https://www.instagram.com/duy_le23/' className='px-[10px] py-[5px] rounded-[20px] bg-[#343434] hover:text-[#d3a850] text-[1.2rem] cursor-pointer '><i className="fa-brands fa-instagram "></i></a>
        <a target='_blank' href='https://github.com/duylee23' className='px-[10px] py-[5px] rounded-[20px] bg-[#343434] hover:text-[#d3a850] text-[1.2rem] cursor-pointer '><i className="fa-brands fa-github "></i></a>
        <a target='_blank' href='https://www.threads.net/@duy_le23' className='px-[10px] py-[5px] rounded-[20px] bg-[#343434] hover:text-[#d3a850] text-[1.2rem] cursor-pointer '><i className="fa-brands fa-threads "></i></a>
      </div>

      <div>
        <RiotGame/>
      </div>
      <p className='text-center max-w-[400px]'>
      ™ & © 2023 Riot Games, Inc. League of Legends and all related logos, characters, names and distinctive likenesses thereof are exclusive property of Riot Games, Inc. All Rights Reserved.
      </p>
      <div className= 'flex gap-4'>
        <span>PRIVACY NOTICE</span>
        <span>TERMS OF SERVICE</span>
        <span>COOKI POLICY</span>
        <span>COMPANY INFORMATION</span>
        <span>COOKIE PREFERRENCE</span>
      </div>
      <p>Made possible by Le Duy Ninh</p>
    </div>
  )
}

export default Footer