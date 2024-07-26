'use client';

import useLoadImage from "@/hooks/UseLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface UserLibraryProps {
    isPlaying?:boolean;
    data:Song;
    onClick?:(id:string) => void;
}

const UserLibrary = ({isPlaying,data,onClick}:UserLibraryProps) => {

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
    justify-between
    gap-x-3
    cursor-pointer
    p-2
  hover:bg-white/15
    w-full 
    rounded-lg
    "
    >
        <div className="flex items-center gap-x-3  py-1 px-3">

        <div
        className='relative
        rounded-full
        min-h-[48px]
        min-w-[48px]
      ' >
            <Image
            fill
            src={imageUrl || '../public/images/images (1).png' }
            alt="media item"
            className="object-cover"
            />
        </div>
        <div className="flex flex-col gap-y-1 ">
        <p className="text-white truncate">
        {data.title}
        </p>
        <p className="text-neutral-400 text-sm truncate">
            {data.author}
        </p>
        </div>
        </div>
        <div className="bg-white/25 p-3 rounded-full">
        <FaPlay
    className="text-opacity-25 "
    />
        </div>
    </div>
  )
}

export default UserLibrary;