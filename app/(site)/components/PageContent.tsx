"use client";

import { Song } from "@/types";
import SongItem from "./SongItem";
import useOnPlay from "@/hooks/useOnPlay";

interface PageContentProps {
  songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);

  return (
    <div>
      <div
        className="grid grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-6
          gap-4
          mt-4
          "
      >
        {songs.map((song) => {
          return (
            <SongItem
              key={song.id}
              onClick={(id: string) => onPlay(id)}
              data={song}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PageContent;
