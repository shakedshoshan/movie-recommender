import Image from "next/image";
import { Movie } from "../../typings";
import getImagePath from "@/lib/getImagePath";
import MoviesCarousel from "./MoviesCarousel";
import Rating from "./Rating";
import WishListButton from "./WishListButton";


export default function MoviePage({ movie }: { movie: Movie }){
   
   
    return (


        <div className="overflow-hidden lg:-mt-44 relative ">
            
            <div className="flex">
                <div className="flex-full min-w-0 relative">
                 <div className="opacity-55 scale-110 absolute pt-10">   
                <Image
                src={getImagePath(movie.backdrop_path, true)}
                alt=""
                width={1920}
                height={500}
                    />
                </div>

                <div className="flex flex-row "> 
                <div className="px-20  hidden lg:inline  left-0 bg-transparent z-20  w-full p-52  text-white ">
                    <h2 className="text-5xl font-bold max-w-xl z-20 pb-2">
                    {movie.title}
                    </h2>
                    <p className="max-w-xl text-xl pb-10 pt-6">{movie.overview}</p>

                    <div className="flex items-center z-30 space-x-20 left-24 absolute scale-110">
                    <Rating id={movie.id} />
                    <WishListButton  id={movie.id}/>
                </div>
                    
                 </div>
                 
                 <div className="py-52 px-16 bg-transparent z-20 w-auto h-auto">
                 <Image
                          src={getImagePath(movie.poster_path, false)}
                          alt=""
                          width={450}
                          height={300}
                        />
                    </div>
                </div>
                
                </div>

                
                
            </div>
        </div>

)
}