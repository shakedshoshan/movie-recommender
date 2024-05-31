
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import axios from 'axios';
import React, { useState, useRef, SetStateAction, useEffect, Children } from 'react';
import Cookies from 'js-cookie';
import { cookies } from "next/headers";
import { getUserPreferences } from "@/lib/serverUtils";
import { SignIn2 } from "@/components/component/sign-in2";
import { ActorsList } from "../../../../typings";
import { promises as fs } from 'fs';




export default async function Preferences() {

  const file = await fs.readFile(process.cwd() + '/public/actors.json', 'utf8');
  const data = JSON.parse(file) as ActorsList;

  //console.log(data)
  

  const cookieStore = cookies()
  const token = cookieStore.get('token')
  let tokenValue = '';
  if(token){
    tokenValue = token.value;
  }
  const userPreferences = await getUserPreferences(tokenValue);
  //const props = [ {year: userPreferences.LatestYear},{ genre1:userPreferences.Genre1}, {genre2:userPreferences.Genre2}]
  //console.log(userPreferences)

    return (
        <div className=" flex flex-col items-center  text-3xl pt-20">
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-4xl font-bold text-white">Sign In to CineMate</h1>
              <p className="text-gray-300 ">
                Enter the personal information and movie's preferences you have
              </p>
            
          </div>      
            <SignIn2 linkTo='/Main' actorsList={data} year={userPreferences.LatestYear} genre1={userPreferences.Genre1} genre2={userPreferences.Genre2} genre3={userPreferences.Genre3} person1={userPreferences.Actor1.value} person2={userPreferences.Actor2.value} company={userPreferences.Studio} country={userPreferences.Origin} runTime={userPreferences.runTime}/> 
        </div>
    )

}


