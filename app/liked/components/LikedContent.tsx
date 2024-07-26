"use client";

import LikedButton from "@/components/LikedButton";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface LikedContentProps {
  songs: Song[];
}

const LikedContent = ({ songs }: LikedContentProps) => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const onPlay = useOnPlay(songs);

  
  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <div
        className="flex
        flex-col
        gap-y-2
        w-full
        px-6
        text-neutral-400

        ">
        <p>آهنگی لایک نشده </p>
      </div>
    );
  }

  return (
    <div
      className="flex
    flex-col
    gap-y-2
    w-full
    p-6

    ">
      {songs.map((song) => {
        return (
          <div
            key={song.id}
            className="flex 
                    items-center
                    justify-between
                    gap-x-4
                    w-full
                    rounded-lg
                    cursor-pointer
                    hover:bg-white/15
                    ">
            <div className="flex-14">
              <MediaItem onClick={(id:string) => onPlay(id)} data={song} />
            </div>
            <LikedButton
            songId={song.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default LikedContent;
