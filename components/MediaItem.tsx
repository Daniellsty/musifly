'use client';

import useLoadImage from "@/hooks/UseLoadImage";
import { Song } from "@/types";
import Image from "next/image";

interface MediaItemProps {
    isPlaying?:boolean;
    data:Song;
    onClick?:(id:string) => void;
}

const MediaItem = ({isPlaying,data,onClick}:MediaItemProps) => {

  const imageUrl = useLoadImage(data);
  
  const handleClick =()=>{
    
    
    if(onClick){
        return onClick(data.id)
    }
  }

  return (
    <div
    onClick={handleClick}
    className="flex
    items-center
    gap-x-3
    cursor-pointer
    w-full
    p-2
    rounded-md

    "
    >

        <div
        className={`relative
        rounded-full
        min-h-[48px]
        min-w-[48px]
        overflow-hidden
        ${isPlaying && 'motion-safe:animate-spin' }
        `}
        >
            <Image
            fill
            src={imageUrl || '../public/images/images (1).png' }
            alt="media item"
            className="object-cover"
            />
        </div>
        <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">
        {data.title}
        </p>
        <p className="text-neutral-400 text-sm truncate">
            {data.author}
        </p>
        </div>
    </div>
  )
}

export default MediaItem