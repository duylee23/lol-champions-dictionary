import React, { useState } from 'react'
import Slider from "react-slick";

const ChampionSkins = (props) => {
  const [selectedSkin, setSelectedSkin] = useState(0)
  const {champion} = props
  const sliderRef = React.useRef(null);
  var settings = {
    infinite: true,
    vertical:true,
    verticalSwiping: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSelectedSkin(next)
  };

  const handleItemClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className='h-[800px] text-white' 
    style={{ background: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion?.name}_${champion?.skins?.[selectedSkin]?.num}.jpg) center/cover no-repeat` }}
    >
      <div className='flex flex-col pl-10 w-[35%] h-full border'>
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