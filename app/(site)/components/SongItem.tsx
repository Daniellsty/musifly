"use client";

import AudioButton from "@/components/AudioButton";
import PlayButton from "@/components/PlayButton";
import useLoadImage from "@/hooks/UseLoadImage";
import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types";
import Image from "next/image";
import { useEffect } from "react";

interface SongItem {
  data: Song;
  onClick: (id: string) => void;
}

const SongItem = ({ data, onClick }: SongItem) => {
  const imagePath = useLoadImage(data);
  const playerId = usePlayer();

  useEffect(() => {}, []);

  return (
    <div
      onClick={() => onClick(data.id)}
      className="
    relative
    flex 
    flex-col
    justify-center
    items-center
    rounded-md
    overflow-hidden
    gap-x-4
    cursor-pointer
    
    hover:bg-white/15
    transition
    group
    p-3
    "
    >
      <div
        className="
      relative
      aspect-square
      w-full
      h-full
      rounded-md
      overflow-hidden

      "
      >
        <Image
          className="object-cover
       
       "
          fill
          alt="Image"
          src={imagePath || "../../../public/images/images (1).png"}
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1 ">
        <p className="text-white font-semibold truncate w-full">{data.title}</p>
        <p
          className="text-neutral-400
        text-sm
        pb-4
        w-full
        truncate
        "
        >
          by {data.author}
        </p>
      </div>
      <div
        className="absolute bottom-[60%]
      right-[35%]"
      >
        {playerId.activeId === data.id ? <AudioButton /> : <PlayButton />}
      </div>
    </div>
  );
};

export default SongItem;
