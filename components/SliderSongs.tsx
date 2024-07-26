import { Song } from "@/types";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./SliderSongs.css";
import Image from "next/image";
import useLoadImage from "@/hooks/UseLoadImage";

interface SliderSongProps{
  allSongs:Song[];
}

const SliderSongs = ({ allSongs }:SliderSongProps) => {

 
  return (
   
      <div className="my-6  max-w-[400px] h-[120px] cursor-pointer -z-0">
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        centeredSlides={true}
        loop={true}
        className="mySwiper"
        autoplay={true}
        modules={[Autoplay]}
      >
        {
          allSongs.map((song)=>{
            const imagePath = useLoadImage(song);
          
            return (
              <SwiperSlide
              className="rounded-full -z-999"
              >
                <Image
                className="  rounded-full -z-999"
                fill
                alt="img song"
                src={imagePath ?? '../public/images/images (1).png' }
                />
              </SwiperSlide>
             
            )
          })
        }
      </Swiper>
      </div>
  );
};

export default SliderSongs;
