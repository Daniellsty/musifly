"use client";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Box from "./Box";
import SideBarItems from "./SideBarItems";
import Library from "./Library";
import { Song } from "@/types";
import SliderSongs from './SliderSongs';


interface SideBarProps {
  children: React.ReactNode;
  songs :Song[];
  allSongs:Song[];
};

const SideBar: React.FC<SideBarProps> = ({ children ,songs,allSongs}) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "خانه",
        active: pathname !== "/search",
        href: "/",
      },

      {
        icon: BiSearch,
        label: "جستجو",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full w-full ">
     <main
     className="w-full h-full p-2 mb-2"
     >{children}</main>
      <div className="flex justify-end h-full">
        <div className="md:flex flex-col  hidden min-w-[300px] h-full gap-y-2 pt-2 pr-2">
         
          <Box>
            <div className="flex flex-col gap-y-4 px-5 py-4">
              {routes.map((items) => (
                <SideBarItems key={items.label} {...items} />
              ))}
            </div>
          </Box>

         <SliderSongs
         allSongs={allSongs}
         />
        
          <Box>
          <Library
          songs={songs}
          />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
