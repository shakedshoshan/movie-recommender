
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import axios from 'axios';
import React, { useState, useRef, SetStateAction, useEffect, Children } from 'react';
import Cookies from 'js-cookie';
import { cookies } from "next/headers";
import { getUserPreferences } from "@/lib/serverUtils";
import { getActorIDByName, getOrigins, getexample } from "@/lib/getMovies";
import { SignIn2 } from "@/components/component/sign-in2";
import { Origins } from "../../../../typings";




async function Preferences() {

  // const [data, setData] = useState<number>(0);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const fetchedData = await getActorIDByName("Jeremy Piven");
  //       setData(fetchedData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   })();
  // }, []);

  
  const result:number = await getActorIDByName("Jeremy Piven");
  

  //  const result = await getexample()
  //console.log(result)

  const cookieStore = cookies()
  const token = cookieStore.get('token')
  let tokenValue = '';
  if(token){
    tokenValue = token.value;
  }
  const userPreferences = await getUserPreferences(tokenValue);
  //console.log(userPreferences)

    return (
        <div className=" flex flex-col items-center  text-3xl pt-20">
            <div className="space-y-2 max-w-3xl">
            <h1 className="text-4xl font-bold text-white">Sign In to CineMate</h1>
            <p className="text-gray-300 ">
              Enter the personal information and movie's preferences you have
            </p>
            
          </div>      
            <SignIn2 linkTo='/Main' year={userPreferences.LatestYear} genre1={userPreferences.Genre1} genre2={userPreferences.Genre2} genre3={userPreferences.Genre3} person1={userPreferences.Actor1} person2={userPreferences.Actor2} company={userPreferences.Studio} country={userPreferences.Origin} runTime={userPreferences.runTime}/> 
        </div>
    )

}
export default Preferences;