import { Song } from "@/types";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
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
    <div>
      <div className="my-6 overflow-hidden max-w-[400px] h-[120px]  ">
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        
       // speed={100}
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
              className="w-full rounded-full"
              >
                <Image
                className="object-cover w-full rounded-full "
                fill
                alt="img song"
                src={imagePath || '../public/images/images (1).png' }
                />
              </SwiperSlide>
             
            )
          })
        }
      </Swiper>
      </div>
    </div>
  );
};

export default SliderSongs;
