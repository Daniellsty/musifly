"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";
import Index from "./Index";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  if (!song) {
    return null;
  }

  return (
    <div>
      <div
        className="
    fixed
    bottom-0 
    w-full
    py-3
    h-[110px]
    px-4
    bg-white/5
    bg-opacity-80 
    backdrop-blur-sm 
    
    rounded-lg 
    cursor-pointer
    "
      >
        <Index key={songUrl} song={song} songUrl={songUrl} />
      </div>

    </div>
  );
};

export default Player;
