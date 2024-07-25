import  { useEffect, useRef } from 'react'

interface SongInfoProps {
    src:string,
    isPlaying :boolean,
    volume:number,
    seekTime:number,
    onTimeUpdate:(event:any)=> void,
    onLoadedData:(event:any)=> void,
    onEnded:(event:any)=> void,
}

const SongInfo = ({src,isPlaying,volume,seekTime,onTimeUpdate,onLoadedData,onEnded}:SongInfoProps) => {
    const ref = useRef<any>(null );
    if (ref.current) {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }

    useEffect(() => {
      
      ref.current.volume = volume;
    }, [volume]);


    useEffect(() => {
      ref.current.currentTime = seekTime;
    }, [seekTime]);

  return (
    <div>
         <audio
         src={src}
         ref={ref}
         onTimeUpdate={onTimeUpdate}
         onLoadedData={onLoadedData}
         onEnded={onEnded}
      

      />
    </div>
  )
}

export default SongInfo