"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import axios from 'axios';
import React, { useState, useRef, SetStateAction, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { ActorsList } from "../../../typings"
import Select, { Options, OptionsOrGroups } from 'react-select'

type Props = { linkTo: any; actorsList: ActorsList; year?: number, genre1?: string, genre2?: string, genre3?: string, person1?: string, person2?: string, company?: string, country?: string, runTime?: any };

export function SignIn2({ linkTo, actorsList, year, genre1, genre2, genre3, person1, person2, company, country, runTime }: Props) {

  let options: any = []
  actorsList.map((item: { name: string }) =>
    options.push({ value: `${item.name}`, label: `${item.name}` })
  );


  useEffect(() => {
    const input = document.getElementById('firstName');

  }, []);


  const [error, setError] = useState<string | null>("");

  const inputRefLatestYear = useRef<HTMLInputElement>(null);
  const inputRefRunTime = useRef<HTMLInputElement>(null);


  const [selectedeGenre1, setSelectedGenre1] = useState('');
  const [selectedeGenre2, setSelectedGenre2] = useState('');
  const [selectedeGenre3, setSelectedGenre3] = useState('');
  const [selectOrigin, setselectOriginRef] = useState('');
  const [selectCompany, setselectCompanyRef] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');
  const [selectedValue2, setSelectedValue2] = useState('');

  const handleChangeGenre1 = (event: { target: { value: SetStateAction<string> } }) => {
    setSelectedGenre1(event.target.value);
  }

  const handleChangeGenre2 = (event: { target: { value: SetStateAction<string> } }) => {
    setSelectedGenre2(event.target.value);
  }

  const handleChangeGenre3 = (event: { target: { value: SetStateAction<string> } }) => {
    setSelectedGenre3(event.target.value);
  }

  const handleChangeOrigin = (event: { target: { value: SetStateAction<any> } }) => {
    setselectOriginRef(event.target.value);
  }

  const handleChangecompany = (event: { target: { value: SetStateAction<any> } }) => {
    setselectCompanyRef(event.target.value);
  }

  const handleChange1 = (selectedValue1: SetStateAction<any>) => {
    setSelectedValue1(selectedValue1);
  };
  const handleChange2 = (selectedValue2: SetStateAction<any>) => {
    setSelectedValue2(selectedValue2);
  };

  const apiCall = () => {
    const inputGener1 = selectedeGenre1;
    const inputGener2 = selectedeGenre2;
    const inputGener3 = selectedeGenre3;

    const inputActor1 = selectedValue1;
    const inputActor2 = selectedValue2;
    const inputLatestYear = inputRefLatestYear.current ? inputRefLatestYear.current.value : 0.0;
    const inputRunTime = inputRefRunTime.current?.value;
    const inputOrigin = selectOrigin ? selectOrigin : "US" //.current?.value;
    const inputStudio = selectCompany ? selectCompany : null//.current?.value;


    if (inputGener1) {
      const preferences = {
        Genre1: inputGener1, Genre2: inputGener2, Genre3: inputGener3, Actor1: inputActor1, Actor2: inputActor2,
        LatestYear: inputLatestYear, RunTime: inputRunTime, Origin: inputOrigin, Studio: inputStudio
      };
      let token = Cookies.get("token");
      let preferencesAndToken = { token: token, preferences: preferences };
      axios.post('http://localhost:4000/setPreferences', preferencesAndToken)
        .then(response => {
          if (response.status === 200) {
            // Handle success if needed
          } else {
            setError("Bad request. Please check your credentials.");
          }
        })
        .catch(error => {
          setError("An error occurred. Please try again later.");
          console.error('Error:', error);
        });
    }

    else {
      setError("Please enter a username.");
    }
  };

  return (
    <>
      <div className="px-4 py-2 ">
        <div className="mx-auto max-w-3xl space-y-4">

          <div className="py-10 ">
            <h1 className="text-2xl text-white font-semibold">Personal Preferences</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="favorite-genres" className="text-white" >Favorite Genres</Label>
                <div className=" grid grid-rows-1 grid-cols-3 gap-12 pb-6 ">
                  <div className="">
                    <Label htmlFor="spouse-gender" className="text-white ">Genre 1 : {genre1}</Label>
                    <div>
                      <select className="rounded-lg text-sm py-2 px-14 " value={selectedeGenre1} onChange={handleChangeGenre1}>
                        <option className="text-slate-600" value="">Select genre1</option>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Animation">Animation</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Crime">Crime</option>
                        <option value="Documentary">Documentary</option>
                        <option value="Drama">Drama</option>
                        <option value="Family">Family</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Music">Music</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Horror">Horror</option>
                        <option value="History">History</option>
                        <option value="Romance">Romance</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Thriller">Thriller</option>
                        <option value="War">War</option>
                        <option value="Western">Western</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="spouse-gender" className="text-white">Genre 2:    {genre2}</Label>
                    <select className="rounded-lg text-sm py-2 px-14 " value={selectedeGenre2} onChange={handleChangeGenre2}>
                      <option className="text-slate-600" value="">Select genre2</option>
                      <option value="Action">Action</option>
                      <option value="Adventure">Adventure</option>
                      <option value="Animation">Animation</option>
                      <option value="Comedy">Comedy</option>
                      <option value="Crime">Crime</option>
                      <option value="Documentary">Documentary</option>
                      <option value="Drama">Drama</option>
                      <option value="Family">Family</option>
                      <option value="Fantasy">Fantasy</option>
                      <option value="Music">Music</option>
                      <option value="Mystery">Mystery</option>
                      <option value="Horror">Horror</option>
                      <option value="History">History</option>
                      <option value="Romance">Romance</option>
                      <option value="Science Fiction">Science Fiction</option>
                      <option value="Thriller">Thriller</option>
                      <option value="War">War</option>
                      <option value="Western">Western</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="spouse-gender" className="text-white">Genre 3: : {genre3}</Label>
                    <select className="rounded-lg text-sm py-2 px-14 " value={selectedeGenre3} onChange={handleChangeGenre3}>
                      <option className="text-slate-600" value="">Select genre3</option>
                      <option value="Action">Action</option>
                      <option value="Adventure">Adventure</option>
                      <option value="Animation">Animation</option>
                      <option value="Comedy">Comedy</option>
                      <option value="Crime">Crime</option>
                      <option value="Documentary">Documentary</option>
                      <option value="Drama">Drama</option>
                      <option value="Family">Family</option>
                      <option value="Fantasy">Fantasy</option>
                      <option value="Music">Music</option>
                      <option value="Mystery">Mystery</option>
                      <option value="Horror">Horror</option>
                      <option value="History">History</option>
                      <option value="Romance">Romance</option>
                      <option value="Science Fiction">Science Fiction</option>
                      <option value="Thriller">Thriller</option>
                      <option value="War">War</option>
                      <option value="Western">Western</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className=" grid grid-rows-1 grid-cols-2 gap-5">
              <div>
                <Label htmlFor="actor 1" className="text-white">Actor 1: {person1}</Label>
                <Select
                  value={selectedValue1}
                  onChange={handleChange1}
                  options={options}
                  placeholder="Select a Actor"
                  className="rounded-lg text-sm py-2 "
                />
              </div>

              <div>
                <Label htmlFor="actor 2" className="text-white">Actor 2: {person2}</Label>
                <Select
                  value={selectedValue2}
                  onChange={handleChange2}
                  options={options}
                  placeholder="Select a Actor"
                  className="rounded-2xl text-sm py-2 "
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="latest-year" className="text-white">Latest Year: {year}</Label>
              <Input type="number" ref={inputRefLatestYear} id="latest-year" placeholder="Enter latest year" />
            </div>
            <div className="space-y-2 flex flex-col pt-5">
              <Label htmlFor="origin" className="text-white">Origin: {country}</Label>
              {/* <Input ref={inputRefOrigin} id="origin" placeholder="Enter origin" /> */}
              <select className="rounded-lg text-sm py-2 px-10" value={selectOrigin} onChange={handleChangeOrigin}>
                <option className="text-slate-600" value="US">Select Origin</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="DE">Germany</option>
                <option value="ES">Spain</option>
                <option value="FR">France</option>
                <option value="GB">United Kingdom</option>
                <option value="IL">Israel</option>
                <option value="IN">India</option>
                <option value="IT">Italy</option>
                <option value="JP">Japan</option>
                <option value="NP">North Korea</option>
                <option value="SE">Sweden</option>
                <option value="TR">Turkey</option>
              </select>
            </div>
            <div className="space-y-2 flex flex-col pt-5">
              <Label htmlFor="favorite-company" className="text-white">Favorite Film Studio:  {company}</Label>
              {/* <Input ref={inputRefStudio} id="favorite-company" placeholder="Enter favorite company" /> */}
              <select className="rounded-lg text-sm py-2 px-10 pt-2" value={selectCompany} onChange={handleChangecompany}>
                <option className="text-slate-600" value="">Select Company</option>
                <option value="97">Castle Rock Entertainment</option>
                <option value="4">Paramount Pictures</option>
                <option value="17">Warner Bros.</option>
                <option value="33">Universal Pictures</option>
                <option value="12">New Line Cinema</option>
                <option value="14">Miramax</option>
                <option value="7508">Produzioni Europee Associate (PEA)</option>
                <option value="1">Lucasfilm</option>
                <option value="882">Toho</option>
                <option value="7">Dreamworks Pictures</option>
                <option value="10342">Studio Ghibli</option>
                <option value="7036">CJ Entertainment</option>
                <option value="2">Walt Disney Pictures</option>
                <option value="1382">PolyGram Filmed Entertainment</option>
                <option value="9195">Touchstone Pictures</option>
                <option value="192">Shochiku</option>
                <option value="3">Pixar Animation Studios</option>
                <option value="420">Marvel Studios</option>
                <option value="25">Twentieth Century Fox</option>
                <option value="5">Columbia Pictures</option>
                <option value="838">Paramount Vantage</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-runtime" className="text-white">Maximum Run Time</Label>
              <Input type="number" ref={inputRefRunTime} id="max-runtime" placeholder="Enter maximum run time" />
            </div>
          </div>
        </div>
        <a href={linkTo}>
          <button className="w-full p-3 bg-slate-700  text-2xl rounded-xl text-white hover:bg-gray-800 transition" onClick={apiCall}>Submit</button>
        </a>
      </div>
    </>
  )
}
function setInputValue(value: any) {
  throw new Error("Function not implemented.")
}