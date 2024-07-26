"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";


import Button from "./Button";
import useAuthModal from "@/hooks/UseAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
const Header = ({ children, className }: HeaderProps) => {
  const router = useRouter();
  const authModal = useAuthModal();

  const supabaseClient = useSupabaseClient();
  const {user} = useUser();

  


  const HandleLogout = async () => {
    const {error} = await supabaseClient.auth.signOut();
    router.refresh();

    if(error){
      console.log(error);
      
    }
  };
  return (
    <div
      className={twMerge(
        `
    h-fit
    p-6
    
    `,
        className
      )}>
      <div className="w-full mb-4 flex items-center justify-end">
       
        {
          user ? (
              <div
             
              className="flex gap-x-4 items-center">
                <Button
                className="bg-white px-6 py-2"
                 onClick={HandleLogout}
                >
                  خروج
                </Button>
                <Button
              
                className="bg-white"
                >
                  <FaUserAlt/>
                </Button>

              </div>
          )
          :
        <div className="flex justify-between items-center gap-x-4
        ">
         <>
         <div>
            <Button
            onClick={authModal.onOpen}
            className="
            bg-transparent
            text-neutral-300
            font-medium
            "
            >
                ثبت نام
            </Button>
            </div>
            <div>

            <Button
            onClick={authModal.onOpen}
            className="
            bg-transparent
            text-black
            font-medium
            bg-white
            px-6
            py-2
            " >
                ورود
            </Button>
            </div>
         
         </>
        </div>
        }
      </div>
      {children}
    </div>
  );
};

export default Header;
