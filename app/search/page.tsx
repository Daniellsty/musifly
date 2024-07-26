import getSongsBySearch from "@/actions/getSongsBySearch";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./components/SearchContent";


interface SearchProps {
  searchParams: {
    title: string;
  };
}

export const revalidate = 0;


const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsBySearch(searchParams.title);
  return (
      <div
        className="
      rounded-lg
      h-full
      w-full
      overflow-hidden
      overflow-y-auto
   
      ">
    <Header>
    <h1 className="text-white text-3xl font-semibold">جستجو</h1>
      <header className="frombg-neutral-900  ">
        <div className="my-4 flex flex-col  gap-y-6">
          
          <SearchInput />
        </div>
      </header>
    </Header>
    <SearchContent
    songs={songs}
    />
    </div>

  );
};

export default Search;
