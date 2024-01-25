import React, { useEffect, useState } from 'react'
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
  const championsSelector =  useSelector((state) => state.champions.championList)
  const selectedPosition = useSelector((state) => state.champions.selectedPosition)
  const searchTerm = useSelector((state) => state.champions.searchTerm)
  const difficulty = useSelector((state) => state.champions.difficulty)
  const [champions,setChampions] = useState([])
  
  //render all champions
  useEffect(() => {
    dispatch(fetchChampions());
  }, [dispatch]);

  // Render champions by position and search term
  useEffect(() => {
    // Ensure champions are fetched before setting them
    if (championsSelector.length > 0) {
      let filteredChampions = championsSelector;

      // Filter by position
      if (selectedPosition !== 'ALL' && selectedPosition !== '') {
        filteredChampions = filteredChampions.filter((champion) =>
          champion.tags.some((tag) => tag.toLowerCase() === selectedPosition.toLowerCase())
        );
      }

      // Filter by name
      filteredChampions = filteredChampions.filter((champion) =>
        champion.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      //filter by difficulty
      switch (difficulty) {
        case 'Easy':
          filteredChampions = filteredChampions.filter((champion) => 
            champion.info.difficulty >= 0 && champion.info.difficulty <= 3
          );
          break;
        case 'Medium':
          filteredChampions = filteredChampions.filter((champion) => 
            champion.info.difficulty >= 4 && champion.info.difficulty <= 6
          );
          break;
        case 'Hard':
          filteredChampions = filteredChampions.filter((champion) => 
            champion.info.difficulty >= 7 && champion.info.difficulty <= 9
          );
          break;
        default:
          // Handle the default case if necessary
      }



      // Set the filtered champions
      setChampions(filteredChampions);
    }
  }, [championsSelector, selectedPosition, searchTerm, difficulty]);

  




  return (
    <div className='w-full'>
      <div className='flex flex-col justify-center items-center mt-[90px] '>
        <h2 className='text-[50px] uppercase'>Choose your</h2>
        <h2 className='text-[80px] uppercase text-[#08d7f7] italic'>Champion</h2>
        <h2 className='italic text-[#d3a850]'>With more than 140 champions, you’ll find the perfect match for your playstyle. Master one, or master them all.</h2>
      </div>
      <SearchBar/>
      <div className='mt-[40px] p-10'>        
        <ul className='flex gap-2 flex-wrap w-full justify-between '>
          {champions?.map((champ) => (        
              <ChampionItem key= {champ.key} data={champ}/>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Champions