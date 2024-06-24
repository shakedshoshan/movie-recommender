"use client"

import getImagePath from "@/lib/getImagePath";
import { Movie, MovieCast, SearchResults, movieImages } from "../../typings";
import MovieTitle from "./MovieTitle";
import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal } from "react";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
import MoviesCarousel from "./MoviesCarousel";


type Props = {data: Movie, relatedMovies: SearchResults, cast: MovieCast,trailerKey: any,images:movieImages};
export default function MoviePageClient({data, relatedMovies, cast, trailerKey, images}: Props){

    return(
    <div key={data.id} className="mt-32 xl:mt-42">

        <MovieTitle movie = {data}/>

        <div className="max-w-6xl w-screen mx-auto text-white space-y-6 flex flex-col  mt-20 xl:mt-20">
        <p className="font-bold text-3xl">Images: </p>

        <div className="flex space-x-4 overflow-scroll scrollbar-hide pt-16 pb-16 pl-24 scale-125">
            {images.backdrops.slice(5, 15).map((image) => (
            <Image className="hover:scale-150 hover:border-solid hover:border-stone-200 hover:border-2 transition w-auto h-auto"
            src={getImagePath(image.file_path, true)}
            alt="image"
            width={300}
            height={250}
            key={getImagePath(image.file_path, true)}
                />
            ))}
        </div>


        <div>
            <h1 className="font-bold text-3xl">Details:</h1>
            <p className="py-2 text-xl">Rating:   {data.vote_average} ({data.vote_count} votes)</p>
            <p className="py-2 text-xl">Release date:   {data.release_date}</p>
            <p className="py-2 text-xl">Run time:   {data.runtime} minuts</p>

            <div className="flex flex-row space-x-4">
            <p className="py-2 text-xl">Geners: </p>
            {data.genres.map((genre: {name:string}) => (
            <ul key={genre.name}  className="py-2 text-xl">{genre.name} | </ul>
            ))}
            </div>

            <p className="py-2 text-xl">Original language: {data.original_language}</p>

            <div className="flex flex-row space-x-4">
            <p className="py-2 text-xl">Production Companies:  </p>
            {data.production_companies.map((production_companies: {name:string, origin_country:string}) => (
            
                <ul key={production_companies.name} className="py-2 text-xl">{production_companies.name}({production_companies.origin_country})  |  </ul>
            
            ))}
            </div>
            <p className="py-2 text-xl">Budget:   {data.budget}$</p>
            <p className="py-2 text-xl">Revenue:   {data.revenue}$</p>


        </div>

        <p className="font-bold text-3xl pb-2">Cast: </p>
        <div className="flex space-x-6 overflow-scroll scrollbar-hide scale-110 pt-1 pl-1 pr-1">

            {cast.cast.slice(0, 10).map((p) => (
            <div key={p.id}  className="space-y-2">
                <Image className="hover:border-solid hover:border-stone-200 hover:border-2 hover:scale-105 rounded-full "
                src={p.profile_path ? `http://image.tmdb.org/t/p/original/${p.profile_path}`
: "https://links.papareact.com/o8z"}
                alt=""
                width={250}
                height={300}
                key={p.name}
                />

                <div className="flex flex-col items-center justify-center">
                <small className="font-bold pb-2 items-center justify-center">{p.character}</small>
                <small className="items-center justify-center">{p.name}</small>  
                </div>
            </div>
            ))}

        </div>


        <h1 className="font-bold text-3xl pt-12 pb-8">Trailer:</h1>

        <VideoPlayer keys= {trailerKey} w = '1200' h='700'/>

        <div className="scale-125 pt-56">
        <MoviesCarousel movies={relatedMovies.results} title="You may also like"/>
        </div>
        </div>
    </div>
    )

}
