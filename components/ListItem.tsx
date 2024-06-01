'use client';

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import {FaPlay} from 'react-icons/fa';

interface ListItemProps {
    image:StaticImageData;
    name:string;
    href:string;
}

const ListItem = ({image,name,href}:ListItemProps) => {

    const router = useRouter();

    const onclick=()=>{
        router.push(href);
    }

  return (
   <button
   title="button"
   type="button"
   className="relative group flex items-center rounded-md overflow-hidden bg-neutral-100/20 transition pr-4"
   >
    <div className="relative min-h-[64px] min-w-[64px]">

    <Image
    fill
    className="object-cover  "
    src={image}
    alt="image"
    
    />
    </div>
    <p className="font-bold truncate py-5 text-center w-full">
        {name}
    </p>
    <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-cyan-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
    <FaPlay
    className="text-black"
    />
    </div>

   </button>
  )
}

export default ListItem;