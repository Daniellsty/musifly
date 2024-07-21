import { Song } from "@/types";
import usePlayer from "./usePlayer"

const useOnPlay = (songs:Song[]) => {

    console.log('get');
    
    const player = usePlayer();



    const onPlay =(id:string)=>{
        player.setId(id)
        player.setIds(songs.map((song)=> song.id  ));

    }


  return onPlay;
}

export default useOnPlay