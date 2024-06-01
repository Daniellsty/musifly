"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {

    const openModal =()=>{
        return true
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
            ! لیست آهنگ ها
      </div>
    </div>
  );
};

export default Library;
