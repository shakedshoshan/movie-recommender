import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

async function WishList({
  params: { id },
  searchParams: { genre },
}: {
  params: { id: string };
  searchParams: {
    genre: string;
  };
}) {
  const movies = await getDiscoverMovies(id);

  return (
    <div className="max-w-7xl mx-auto text-white">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Your WishList:</h1>

        <MoviesCarousel title={`Results:`} movies={movies} isVertical />
        
      </div>
    </div>
  );
}

export default WishList;