import React, { useEffect, useState } from 'react'
import bg from '../assets/img/bg.jpg'
import ChampionItem from './ChampionItem'
import SearchBar from './SearchBar'
import { useDispatch, useSelector } from 'react-redux';
import { fetchChampions } from '../redux/championsSlice';
const Champions = () => {

 
  // useEffect(() =>{
  //   const fetchApi = async() => {
  //     try{
  //       const res = await fetch('https://ddragon.leagueoflegends.com/cdn/13.9.1/data/en_US/champion.json')
  //       if(!res.ok) {
  //         throw new Error('Failed to fetch data')
  //       }
  //       const data = await res.json()
  //       const championArray = Object.values(data.data)
  //       setChampionList(championArray)
  //     } catch (error) {
  //       console.error('Error when fetching data: ', error)
  //     }
  //   }
  //   fetchApi()
  // }, [])

  //using Redux (better)
  const dispatch = useDispatch()
  const champions = useSelector((state) => state.champions.championList)
  const selectedChampions = useSelector((state) => state.champions.selectedPosition)

  useEffect(() => {
    dispatch(fetchChampions())
  }, [dispatch])
  

  return (
    <div className='w-full'>
      <div className='flex flex-col justify-center items-center mt-[90px] '>
        <h2 className='text-[50px] uppercase'>Choose your</h2>
        <h2 className='text-[70px] uppercase'>Champion</h2>
        <h2 className='italic'>With more than 140 champions, you’ll find the perfect match for your playstyle. Master one, or master them all.</h2>
      </div>
      <SearchBar/>
      <div className='mt-[40px] p-10'>        
        <ul className='flex gap-2 flex-wrap w-full justify-between '>
          {champions.map((champ) => (
            <ChampionItem key= {champ.key} data={champ}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Champions