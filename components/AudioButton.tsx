import { Audio } from "react-loader-spinner";

const AudioButton = () => {
  return (
    <button
      title="play"
      className="transition
   opacity-0
   rounded-full
   flex
   items-center
   bg-cyan-500
   p-4
   drop-shadow-md
   translate
   translate-y-1/4
   group-hover:opacity-100
   group-hover:translate-y-0
   hover:scale-110

   ">
      <Audio
        height="18"
        width="18"
        color="#000"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </button>
  );
};

export default AudioButton;
