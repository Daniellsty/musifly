"use client";

import toast from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import uniqid from "uniqid";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
import Input from "./Input";
import Button from "./Button";

const UploadModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const uploadModal = useUploadModal();
  const supabaseClient = useSupabaseClient();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const { user } = useUser();

  const router = useRouter();

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    console.log(values);
    
    try {
      setIsLoading(true);
      const imageFile = values.image?.[0];
      const songFile = values.song?.[0];

      if (!imageFile || !songFile || !user) {
        toast.error("فایل به درستی وارد نشد");
        return;
      }

      const uniqueID = uniqid();

      /// upload image
      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`image-${values.title}-${uniqueID}`, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });

      if (imageError) {
        setIsLoading(false);
        return toast.error("کاور شما آپلود نشد");
      }

      console.log(imageData);
      

      console.log("song image posted to db =>");

      /// upload song

      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(`song-${values.title}-${uniqueID}`, songFile, {
          cacheControl: "3600",
          upsert: false,
        });

      console.log("song posted to db =>");

      console.log(songData);
      console.log(songError);

      if (songError) {
        setIsLoading(false);
        return toast.error("  موزیک شما آپلود نشد");
      }

      const { error: supabaseError } = await supabaseClient
        .from("songs")
        .insert({
          title: values.title,
          author: values.author,
          image_path: imageData.path,
          song_path: songData.path,
          user_id: user.id,
        });

      if (supabaseError) {
        setIsLoading(false);
        console.log(supabaseError);

        return toast.error(supabaseError.message);
      }

      router.refresh();
      setIsLoading(false);
      toast.success("موزیک اضافه شد");
      reset();
      uploadModal.onClose();
    } catch (error) {
      console.log(error);

      toast.error(". سرعت اینترنتتان خیلی پایین است");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="بارگذاری آهنگ"
      description=".خود را وارد کنید mp3 فایل"
      isOpen={uploadModal.isOpen}
      onChange={onChange}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Song title"
        />
        <Input
          id="author"
          disabled={isLoading}
          {...register("author", { required: true })}
          placeholder="Song author"
        />

        <div>
          <div className="pb-1">فایل موزیک را وارد کنید</div>
          <Input
            id="song"
            type="file"
            disabled={isLoading}
            {...register("song", { required: true })}
            accept=".mp3"
          />
        </div>

        <div>
          <div className="pb-1">کاور موزیک را وارد کنید</div>
          <Input
            id="image"
            type="file"
            disabled={isLoading}
            accept="image/*"
            {...register("image", { required: true })}
          />
        </div>

        <Button type="submit" disabled={isLoading}>
          ثبت
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
