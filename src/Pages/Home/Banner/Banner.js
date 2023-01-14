import React from 'react';
import './Banner.css'
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import BannerItem from './Banner Item/BannerItem';

const Banner = () => {

const bannerData = [
    {
        image:img1,
        prev:4,
        id:1,
        next:2,
    },
    {
        image:img2,
        prev:3,
        id:2,
        next:3,
    },
    {
        image:img3,
        prev:2,
        id:3,
        next:4,
    },
    {
        image:img4,
        prev:1,
        id:4,
        next:1,
    }
]

    return (
        <div className="carousel w-full">
    
    {

       bannerData.map(slide => <BannerItem key={slide.id}
       slide={slide}>

       </BannerItem>) 
    }
    
    
    
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} alt='' className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle mr-5">❯</a>
    </div>
  </div> 
  
   
  
</div>
    );
};

export default Banner;