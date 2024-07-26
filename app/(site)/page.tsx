import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import imageTitle from "../../public/images/images (1).png";
import getSongs from "@/actions/getSongs";
import PageContent from "./components/PageContent";

const page = async () => {
  const songs = await getSongs();
 
  return (
    <div
      className="
    rounded-lg
    w-full
    h-full
    
    
    "
    >
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">
            خوش آمدید musifly به
          </h1>
          <div
            className="grid grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            2xl:grid-cols-4gap-3
            mt-4
            "
          >
            <ListItem name="مورد علاقه ها" href="liked" image={imageTitle} />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
        </div>
        <div>لیست آهنگ ها</div>
      </div>
      <div className="p-6">
        <PageContent songs={songs} />
      </div>
    </div>
  );
};

export default page;
