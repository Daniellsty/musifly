'use client';

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import {Auth} from '@supabase/auth-ui-react'
import { useRouter } from "next/navigation";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import Modal from "./Modal";
import useAuthModal from "@/hooks/UseAuthModal";
import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";

const AuthModal = () => {

    const supabaseUrl =process.env.NEXT_PUBLIC_SUPABASE_URL as string
    const supabaseKey =process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

    const supabaseClient = createClient(supabaseUrl,supabaseKey)

    const router = useRouter();
    const {session} = useSessionContext();
    const {isOpen,onClose} =  useAuthModal();

    const onChange =(open:boolean)=>{

        if(!open){
            onClose();
        }
    }

    useEffect(() => {
        
       if(session){
        router.refresh();
        onClose();
       }
    }, [session,router,onClose]);

  return (
    <Modal
    title="welcome back"
    description="Login to your account"
    isOpen={isOpen}
    onChange={onChange}
    >
        <Auth
        theme="dark"
        magicLink
        providers={['github']}
        supabaseClient={supabaseClient}
        appearance={{
            theme:ThemeSupa,
            variables:{
                default:{
                    colors:{
                        brand:"#404040",
                        brandAccent:"#22c55e"
                    }
                }
            }
        }}
        />
    </Modal>
  )
}

export default AuthModal