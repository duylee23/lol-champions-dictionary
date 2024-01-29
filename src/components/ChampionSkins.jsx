import { findByLabelText } from '@testing-library/react';
import React, { useState } from 'react'
import Slider from "react-slick";
import './slick-slider.css'
const ChampionSkins = (props) => {

  const [selectedSkin, setSelectedSkin] = useState(0)
  const {champion} = props
  const sliderRef = React.useRef(null);
  var settings = {
    infinite: true,
    vertical:true,
    verticalSwiping: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current,next) => setSelectedSkin(next),    
  };

  const handleItemClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
      
    }
  };

  return (
    <div className='h-[800px] text-white' 
    style={{ background: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion?.id}_${champion?.skins?.[selectedSkin]?.num}.jpg) center/cover no-repeat` }}
    >
      <div className='flex flex-col px-10 w-[40%] h-full bg-[#0c131f] bg-opacity-50 overflow-hidden'>
        <span className='uppercase italic font-bold text-[50px]'>Available<br/>Skins</span>
        <Slider ref={sliderRef}  {...settings} className='h-full flex gap-5 slider-container'>     
        { champion?.skins?.map( (skin, index) => (
          <div
          key={index}
          onClick={() => handleItemClick(index)}
          className={`h-[120px] slider-item opacity-50 ${
             index === selectedSkin ? 'active-slide' : ''
            
          }`}
          >
            <div className='flex items-center h-full gap-4 border-b-[1px]' >
              <img className='w-[80px] object-cover h-[80px]' src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion?.id}_${skin?.num}.jpg`}/>
              <span className=''>{skin.name}</span>
            </div>
          </div>
        ))
        }
          </Slider>
      </div>
    </div>
  )
}

export default ChampionSkins