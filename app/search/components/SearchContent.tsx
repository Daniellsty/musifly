"use client";

import LikedButton from "@/components/LikedButton";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types"

interface SearchContentProps {
    songs:Song[];
}
const SearchContent = ({songs}:SearchContentProps) => {

  const onPlay = useOnPlay(songs)  
  

  if(songs.length === 0){  
  return (
    <div
    className="flex flex-col gap-y-2 w-full px-6 text-neutral-400"
    >
        آهنگی پیدا نشد
    </div>
  )
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6 ">
        {
            songs.map((song)=>{
                return(
                    <div
                    key={song.id}
                    className="flex items-center gap-x-4 w-full hover:bg-white/15 rounded-lg"
                    >
                        <div className="flex-1">
                            <MediaItem
                            data={song}
                            onClick={(id:string)=> onPlay(id)}
                            />
                        </div>
                        <LikedButton
                        songId={song.id}
                        />
                    </div>
                )
            })
        }
    </div>
  )
}

export default SearchContent