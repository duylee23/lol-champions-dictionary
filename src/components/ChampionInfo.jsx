import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ChampionInfo = () => {
  const [champion, setChampion] = useState({})
  const championId = useParams()
  
  useEffect(() => {
    const fetchApi = async (id) => {
      try{
        const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/13.9.1/data/en_US/champion/${id}.json`)
        const data = await res.json()
        setChampion(data.data[championId.id])
      }
      catch(error) {
        console.log(error)
      }
    }
    fetchApi(championId.id)
  }, [championId.id])
  
  console.log(champion)
  return (
    <div className='h-[200vh] w-full bg-red text-red-500 mt-[90px] flex flex-col justify-center items-center '>
      <div className=' w-[70%] h-full mt-[24px]'>
        <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId.id}_0.jpg`}
          className='relative w-full'
          ></img>
        <div className='absolute bottom-0 left-1/2 text-center transform -translate-x-1/2 text-[#fff] uppercase font-bold italic backdrop-blur-[2px] w-[60%] border'>
          <h1 className=''>{champion.title}</h1>
          <h2 className='text-[60px]'>{champion.name}</h2>
        </div>
          <div className='w-[70%] absolute left-1/2 transform -translate-x-1/2 flex justify-around items-center text-[#333] mt-[20px]'>
            <div className='flex flex-1 justify-around '>
              <div>
                Position: {champion?.tags?.join(', ')}
              </div>
              <div>
                Difficulty: {champion?.info?.difficulty} 
              </div>
            </div>
            <div className='flex-1'>
              {champion.lore}
            </div>
          </div>
      </div>

      <div className='w-[70%] flex flex-col text-black'>
        <h2 className='uppercase font-bold text-[80px] italic text-center'>Abilities</h2>
        <div>Ablities img</div>
        <div> description</div>
      </div>

      <div className='border border-blue-500 w-[70%]'>
        Champion skins
      </div>

    </div>
  )
}

export default ChampionInfo