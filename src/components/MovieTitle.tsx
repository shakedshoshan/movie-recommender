import Image from "next/image";
import { Movie } from "../../typings";
import getImagePath from "@/lib/getImagePath";
import MoviesCarousel from "./MoviesCarousel";


export default function MoviePage({ movie }: { movie: Movie }){
   
   
    return (


        <div className="overflow-hidden lg:-mt-32 relative">
            
            <div className="flex">
                <div className="flex-full min-w-0 relative">
                 <div className="opacity-20 scale-100 absolute  ">   
                <Image
                src={getImagePath(movie.backdrop_path, true)}
                alt=""
                width={1920}
                height={500}
                    />
                </div>

                <div className="flex flex-row "> 
                <div className="px-10 hidden lg:inline xl:pt-72 left-0 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-52 space-y-5 text-white ">
                    <h2 className="text-5xl font-bold max-w-xl z-50">
                    {movie.title}
                    </h2>
                    <p className="max-w-xl">{movie.overview}</p>
                 </div>
                 
                 <div className="py-48 px-16 bg-transparent z-20">
                 <Image
                          src={getImagePath(movie.poster_path, false)}
                          alt=""
                          width={400}
                          height={300}
                        />
                    </div>
                </div>
                </div>
                
            </div>
        </div>



    /*<div className="overflow-hidden cursor-pointer">
        <div className="">
                <div className="opacity-20">
                <Image
                key={data.id}
                src={getImagePath(data.backdrop_path, true)}
                alt="bg"
                width={1920}
                height={500}
                
                />
                </div>

                <div className="flex flex-row space-x-80 mt-10  lg:mt-4 w-full p-40 text-white">
                <div className="space-y-5 text-white ">
                    <h2 className="text-6xl font-bold max-w-xl z-50">
                    {data.title}
                    </h2>
                    <small className="text-gray-100">{data.tagline}</small>
                    <p className="max-w-xl text-1xl font-semibold">{data.overview}</p>

                </div>
                  <div className="">
                    <Image
                          key={data.poster_path}
                          src={getImagePath(data.poster_path, false)}
                          alt=""
                          width={300}
                          height={400}
                        />
                  </div>
                </div>
                
                </div>
           {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-[#1A1C29]" />
    </div>
     */


    
)
}