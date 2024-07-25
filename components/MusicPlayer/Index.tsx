"use client";

import { Song } from "@/types";
import MediaItem from "../MediaItem";
import LikedButton from "../LikedButton";

import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";

import SliderRange from "../SliderRange";
import { useEffect, useState } from "react";
import usePlayer from "@/hooks/usePlayer";

import Seekbar from "./Seekbar";
import SongInfo from "./SongInfo";

interface IndexProps {
  song: Song;
  songUrl: string;
}

const Index = ({ song, songUrl }: IndexProps) => {
  const player = usePlayer();

  const [isPlaying, setIsPlaying] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  const [volume, setVolume] = useState(1);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const VolumeIcon = volume ? HiSpeakerWave : HiSpeakerXMark;

  const onPlayNext = () => {
    setIsPlaying(false);
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextSong = player.ids[currentIndex + 1];

    if (!nextSong) {
      return player.setId(player.ids[0]);
    }

    player.setId(nextSong);
  };

  const onPlayPrev = () => {
    setIsPlaying(false);
    if (player.ids.length === 0) {
      return;
    }

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const prevSong = player.ids[currentIndex - 1];

    if (!prevSong) {
      return player.setId(player.ids[player.ids.length - 1]);
    }

    player.setId(prevSong);
  };

  useEffect(() => {
    if (songUrl) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [songUrl]);

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem isPlaying={isPlaying} data={song} />
          <LikedButton songId={song.id} />
        </div>
      </div>
      <div
        className="flex 
        md:hidden
        col-auto
        w-full
        justify-end
        items-center
        "
      >
        <div
          onClick={() => setIsPlaying((prev) => !prev)}
          className="
            h-10
            w-10
            flex
            items-center
            justify-center
            rounded-full
            bg-white
            p-1
            cursor-pointer
            "
        >
          <Icon size={30} className="text-black" />
        </div>
      </div>
      <div
        className="
      hidden 
      h-full
      md:flex
      flex-col
      items-center
      "
      >
        <div
          className="
        h-full
        flex
        justify-center
        items-center
        w-full
        max-w-[722px]
        gap-x-6

        "
        >
          <AiFillStepBackward
            onClick={onPlayPrev}
            size={30}
            className="text-neutral-400
          cursor-pointer
          hover:text-white
          transition
          "
          />
          <div
            onClick={() => setIsPlaying((prev) => !prev)}
            className="flex
          items-center
          justify-center
          h-10
          w-10
          rounded-full
          bg-white
          p-1
          cursor-pointer
          "
          >
            <Icon size={30} className="text-black" />
          </div>

          <AiFillStepForward
            onClick={onPlayNext}
            size={30}
            className="
          text-neutral-400
          hover:text-white
          transition
          cursor-pointer
          "
          />
        </div>
        <Seekbar
          value={appTime}
          max={duration}
          min="0"
          onInput={(value) => setSeekTime(value)}
        />
        <SongInfo
          src={songUrl}
          isPlaying={isPlaying}
          volume={volume}
          seekTime={seekTime}
          onEnded={onPlayNext}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>

      <div className="hidden md:flex w-full justify-end pr-7">
        <div className="flex items-center  gap-x-2 w-[120px]">
          <div>
            <VolumeIcon
              onClick={toggleMute}
              size={25}
              className="cursor-pointer"
            />
          </div>

          <div>
            <SliderRange
              value={volume}
              onChange={(value) => setVolume(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
