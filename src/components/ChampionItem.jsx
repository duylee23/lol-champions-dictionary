import React from 'react'
import { Link } from 'react-router-dom'

const ChampionItem = (props) => {
    const {data} = props
  return (
    
    <div className='border-4 rounded border-[#061c25] w-[15%] mt-12 relative h-[500px] overflow-hidden group hover:border-[#13889c] duration-500 ease-in-out '>
      <Link to={`champion-info/${data.id}`}>
        <img className=' scale-105 transition-transform duration-500 ease-in-out hover:scale-100 object-cover absolute w-full h-full' src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.id}_0.jpg`}/>
        <div className='absolute text-white w-full uppercase italic font-semibold bottom-0 py-3 text-center bg-btn-bg group-hover:bg-[#13889c] transition-background duration-500 '>
              <span className=''>{data.name}</span>
        </div>
      </Link>
    </div>
  )
}

export default ChampionItem