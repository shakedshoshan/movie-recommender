import SignIn3 from "@/components/component/sign-in3";
import { Button } from "@/components/ui/button";
import { getColdStartMovies } from "@/lib/getColdStartMovies";
import { getRatingsFromServer, getUserPreferences } from "@/lib/serverUtils";
import Cookies from 'js-cookie';
import { cookies } from "next/headers";
import Link from "next/link";
import { useEffect } from "react";


export default async function SignIn() {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    let tokenValue = '';
    if(token){
      tokenValue = token.value;
    }
    const userPreferences = await getUserPreferences(tokenValue);
    //console.log(userPreferences)
    
    
    const coldStartMovies = await getColdStartMovies(false, userPreferences.LatestYear, userPreferences.Genre1,userPreferences.Genre2,userPreferences.Genre3,userPreferences.Actor1.value,userPreferences.Actor2.value,userPreferences.Studio, userPreferences.Origin);


    return (
        <div className=" flex flex-col items-center  text-3xl">
            
            <SignIn3  coldStartMovies={coldStartMovies} token={tokenValue}/>

        </div>
        

    )
}
