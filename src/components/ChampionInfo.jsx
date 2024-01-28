import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ChampionAbilitiy from './ChampionAbilitiy'
import ChampionSkins from './ChampionSkins'

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
  
  return (
    <div className='h-[300vh] w-full bg-red text-red-500 mt-[90px] flex flex-col justify-center items-center bg-[#0c131f] flex flex-col items-center justify-between'>
      <div className=' w-[70%] border mt-[24px]'>
        <div className='relative'>
          <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId.id}_0.jpg`}
            className=' w-full'
            />

          <div className='absolute bottom-0 left-1/2 text-center transform -translate-x-1/2 text-[#fff] uppercase font-bold italic backdrop-blur-[2px] w-full '>
            <h1 className=''>{champion.title}</h1>
            <h2 className='text-[60px]'>{champion.name}</h2>
          </div>
        </div>

          <div className='w-[70%] border p-4 absolute left-1/2 transform -translate-x-1/2 flex justify-around items-center text-[#fff] mt-[20px]'>
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

      <div className='w-[70%] flex flex-col h-[600px]'>
        <h2 className='uppercase font-bold text-[80px] italic text-center text-white mb-[40px]'>Abilities</h2>
        <ChampionAbilitiy champion = {champion} />
      </div>

      <div className='border border-blue-500 w-[70%] mb-[200px]'>
          <ChampionSkins champion = {champion} />
      </div>

    </div>
  )
}

export default ChampionInfo