import { SignIn2 } from "@/components/component/sign-in2";
import { getOrigins } from "@/lib/getMovies";


export default async function SignIn() {
    
    return (
        <div className=" flex flex-col items-center  text-3xl pt-10">
            <div className="space-y-2 max-w-3xl">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-gray-500" />
                <div className="w-3 h-3 rounded-full bg-gray-300" />
                <div className="w-3 h-3 rounded-full bg-gray-500" />
              </div>
              <p className="text-sm text-gray-100">Stage 2 of 3</p>
            </div>
            <h1 className="text-4xl font-bold text-white">Sign In to CineMate</h1>
            <p className="text-gray-300 ">
              Enter the personal information and movie's preferences you have
            </p>
          </div>      
            <SignIn2 linkTo="\SignIn\preferences\moviesRating" /> 
        </div>
    )
}
