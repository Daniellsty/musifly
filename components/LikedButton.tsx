"use client";
import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/UseAuthModal";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface LikedButtonProps {
  songId: string;
}

const LikedButton = ({ songId }: LikedButtonProps) => {
  const router = useRouter();
  const {supabaseClient} = useSessionContext();
  const authModal = useAuthModal();
  const { user } = useUser();

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if(!user?.id){
        return;
    }

    const fetchData = async ()=>{
        const {data,error} = await supabaseClient
        .from('liked_songs')
        .select('*')
        .eq('user_id',user.id)
        .eq('song_id',songId)
        .single();

        if(!error && data){
            setIsLiked(true)
        };

    }
    fetchData()
    
  }, [songId,supabaseClient,user?.id]);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart


  const handleLike = async ()=>{
    if(!user){
        return authModal.onOpen();
    }

    if(isLiked){
        const {error} = await supabaseClient
        .from('liked_songs')
        .delete()
        .eq('user_id',user.id)
        .eq('song_id',songId)

        if(error){
            toast.error('اتصال اینترنت را بررسی کنید')
        }else{
            setIsLiked(false)
        }


    }else{
        const {error} = await supabaseClient
        .from('liked_songs')
        .insert({
            song_id:songId,
            user_id:user.id
        });

        if(error){
            toast.error('اتصال اینترنت را بررسی کنید')
        }else{
            setIsLiked(true);
            toast.success('لایک')
        }
    }

    router.refresh();
  }

  return (
    <button
    onClick={handleLike}
    title="button"
    className="hover:opacity-75 transition mx-2"
    >
      <Icon
      color={isLiked ? '#22c55e' : 'white' }
      size={25}
      />
    </button>
  );
};

export default LikedButton;
