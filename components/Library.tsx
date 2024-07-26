"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/UseAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";
import useOnPlay from "@/hooks/useOnPlay";
import UserLibrary from "./UserLibrary";

interface LibraryProps {
  songs:Song[]
}

const Library = ({songs}:LibraryProps) => {

   const authModal = useAuthModal();
   const uploadModal = useUploadModal();
   const {user} = useUser();
   const onplay = useOnPlay(songs)

    const openModal =()=>{
     
    
      if(!user){
        return authModal.onOpen()
      }

      return uploadModal.onOpen()
}

  return (
    <div className="min-h-full">
      <div
        className="flex items-center justify-between
        px-5
        pt-4
        min-h-full
        ">
        <AiOutlinePlus
        onClick={openModal}
        className="text-neutral-400
        cursor-pointer
        hover:text-white
        transition
        "
        />
        <div className="inline-flex items-center gap-x-2">
            <p className="text-neutral-400 font-medium text-md">کتابخانه شما</p>
          <TbPlaylist
          size={20}
          className="text-neutral-400" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 
      mt-4
      px-3
      ">
        {
          !songs.length ?
          (
          <div>
            !هنوز آهنگی وارد نکردید
          </div>
        )
        :
        (
          <div>
          {
            songs.map((song)=>{
              return(
               <UserLibrary
               key={song.id}
               onClick={()=> onplay(song.id)}
               data={song}
               />
              )
            })
          }

          </div>
        )

        }
      </div>
    </div>
  );
};

export default Library;
