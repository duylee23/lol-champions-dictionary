import React, { useEffect, useState } from 'react'

const ChampionAbilitiy = (props) => {
  const {champion} = props
  const [abilityId, setAbilityId] = useState('0Q')
  const [championKey, setChampionKey] = useState('')

  useEffect(() => {
    const formattedChampionKey = String(champion?.key).padStart(3, '0');
    setChampionKey(formattedChampionKey)
  }, [champion])

  const abilities = ['Q', 'W', 'E', 'R']
  const handleShowDes = (index) => {
    setAbilityId(index + abilities[index])
  }


  return (
    <div className='mt-[40px] w-full flex text-white'>
      <div className='flex justify-center gap-8 h-[300px] relative w-[50%] flex-1 '>
        {champion?.spells?.map((spell, index) => (       
            <div className='' onClick={ () => handleShowDes(index)} key={index}>
              <img className={`${ abilityId.charAt(abilityId.length - 1) === abilities[index] && 'border border-[#d3a850]'}  rounded cursor-pointer`} src={`https://ddragon.leagueoflegends.com/cdn/13.9.1/img/spell/${spell.id}.png`}></img>
              <div className={`absolute ${ abilityId.charAt(abilityId.length - 1) !== abilities[index] ? 'hidden' : 'block'} w-[70%] left-1/2 transform -translate-x-1/2 mt-[40px]`}>
                <h2 className='font-bold text-[#d3a850]'>{spell.name}</h2>
                <span>
                  {spell.description}
                </span>
              </div>
            </div>
          )
          )}
      </div>
      <div className='flex-1'>
          <video className='border rounded border-[#d3a850]' autoPlay src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${championKey}/ability_0${championKey}_${abilityId?.charAt(abilityId.length - 1)}1.mp4`} />
      </div>
    </div>
  )
}

export default ChampionAbilitiy