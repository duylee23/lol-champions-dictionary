import React from 'react'
import Slider from "react-slick";

const ChampionSkins = (props) => {

  const {champion} = props
  const sliderRef = React.useRef(null);
  var settings = {
    infinite: true,
    vertical:true,
    verticalSwiping: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };

  const handleItemClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className='h-[800px] text-white'>
      <div className='flex flex-col bg-blue-500 pl-10 w-[35%] h-full '>
        <span className='uppercase italic font-bold text-[50px]'>Available<br/>Skins</span>
        <Slider  ref={sliderRef}  {...settings} className='h-full'>     
        { champion?.skins?.map( (skin, index) => (
          <div onClick={() => handleItemClick(index)} className='flex w-full border h-[100px] items-center gap-4'>
            <img className='w-[80px] object-cover h-[80px]' src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion?.name}_${skin?.num}.jpg`}/>
            <span>{skin.name}</span>
          </div>
        ))
        }
          </Slider>
      </div>
    </div>
  )
}

export default ChampionSkins