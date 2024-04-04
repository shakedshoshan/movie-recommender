import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getTopRatedMovies } from "@/lib/getMovies";
import { title } from "process";

async function Main() {
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <html>
    <div className="flex flex-col space-y-2">
      <CarouselBannerWrapper />
    <div className="flex flex-col  space-y-2 xl:-mt-48">
      <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
      <MoviesCarousel movies={popularMovies} title="Popular" />
    
    </div>
    </div>
    </html>
  );
}

export default Main;





