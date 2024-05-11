
"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { SetStateAction, useState } from "react"


export default function SignIn() {
    const [selectedValue, setSelectedValue] = useState('');
    const handleChange = (event: { target: { value: SetStateAction<string> } }) => {
      setSelectedValue(event.target.value);
    }
    return (
        
      <div className="px-4 py-28 mx-auto max-w-3xl space-y-4 ">
        
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              
              
            </div>
            <h1 className="text-4xl font-bold text-white">Your Preferences</h1>
            <h1 className="text-2xl text-white ">Change your Personal Preferences to make our reccomend more accurate for you</h1>
            
          </div>
          <div className="py-10 ">
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div className="space-y-2">
              <div className=" grid grid-rows-1 grid-cols-3 gap-1 pl-10 ">
              <div className="scale-150">
              <select className="rounded-lg scale-50 p-4"  value={selectedValue} onChange={handleChange}>
                <option className="rounded-lg scale-50 p-4" value="dd">Select genre1</option>
                <option className="rounded-lg scale-50 p-4" value="Action">Action</option>
                <option className="rounded-lg scale-50 p-4" value="Adventure">Adventure</option>
                
              </select>
              <p>Selected Genre: {selectedValue}</p>
            </div>
            <div className="scale-150">
              <select className="rounded-lg scale-50 p-4"  value={selectedValue} onChange={handleChange}>
                <option className="rounded-lg scale-50 p-4" value="dd">Select genre1</option>
                <option className="rounded-lg scale-50 p-4" value="Action">Action</option>
                <option className="rounded-lg scale-50 p-4" value="Adventure">Adventure</option>
                
              </select>
              <p>Selected Genre: {selectedValue}</p>
            </div>
            </div>

                <Label htmlFor="favorite-genres" className="text-white" >Favorite Genres</Label>
                <div className=" grid grid-rows-1 grid-cols-3 gap-5">
                  <div className="">
                    <Label htmlFor="spouse-gender" className="text-white">genre 1</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select genre1" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Action">Action</SelectItem>
                        <SelectItem value="Adventure">Adventure</SelectItem>
                        <SelectItem value="Animation">Animation</SelectItem>
                        <SelectItem value="Comedy">Comedy</SelectItem>
                        <SelectItem value="Crime">Crime</SelectItem>
                        <SelectItem value="Documentary">Documentary</SelectItem>
                        <SelectItem value="Drama">Drama</SelectItem>
                        <SelectItem value="Family">Family</SelectItem>
                        <SelectItem value="Fantasy">Fantasy</SelectItem>
                        <SelectItem value="Music">Music</SelectItem>
                        <SelectItem value="Mystery">Mystery</SelectItem>
                        <SelectItem value="Horror">Horror</SelectItem>
                        <SelectItem value="History">History</SelectItem>
                        <SelectItem value="Romance">Romance</SelectItem>
                        <SelectItem value="Science Fiction">Science Fiction</SelectItem>
                        <SelectItem value="Thriller">Thriller</SelectItem>
                        <SelectItem value="War">War</SelectItem>
                        <SelectItem value="Western">Western</SelectItem>
                      </SelectContent>
                    </Select>
                </div>


                <div>
                <Label htmlFor="spouse-gender" className="text-white">genre 2</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select genre2" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Action">Action</SelectItem>
                    <SelectItem value="Adventure">Adventure</SelectItem>
                    <SelectItem value="Animation">Animation</SelectItem>
                    <SelectItem value="Comedy">Comedy</SelectItem>
                    <SelectItem value="Crime">Crime</SelectItem>
                    <SelectItem value="Documentary">Documentary</SelectItem>
                    <SelectItem value="Drama">Drama</SelectItem>
                    <SelectItem value="Family">Family</SelectItem>
                    <SelectItem value="Fantasy">Fantasy</SelectItem>
                    <SelectItem value="Music">Music</SelectItem>
                    <SelectItem value="Mystery">Mystery</SelectItem>
                    <SelectItem value="Horror">Horror</SelectItem>
                    <SelectItem value="History">History</SelectItem>
                    <SelectItem value="Romance">Romance</SelectItem>
                    <SelectItem value="Science Fiction">Science Fiction</SelectItem>
                    <SelectItem value="Thriller">Thriller</SelectItem>
                    <SelectItem value="War">War</SelectItem>
                    <SelectItem value="Western">Western</SelectItem>
                  </SelectContent>
                </Select>
                </div>


                <div>
                
                <Label htmlFor="spouse-gender" className="text-white">genre 3</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select genre3" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Action">Action</SelectItem>
                    <SelectItem value="Adventure">Adventure</SelectItem>
                    <SelectItem value="Animation">Animation</SelectItem>
                    <SelectItem value="Comedy">Comedy</SelectItem>
                    <SelectItem value="Crime">Crime</SelectItem>
                    <SelectItem value="Documentary">Documentary</SelectItem>
                    <SelectItem value="Drama">Drama</SelectItem>
                    <SelectItem value="Family">Family</SelectItem>
                    <SelectItem value="Fantasy">Fantasy</SelectItem>
                    <SelectItem value="Music">Music</SelectItem>
                    <SelectItem value="Mystery">Mystery</SelectItem>
                    <SelectItem value="Horror">Horror</SelectItem>
                    <SelectItem value="History">History</SelectItem>
                    <SelectItem value="Romance">Romance</SelectItem>
                    <SelectItem value="Science Fiction">Science Fiction</SelectItem>
                    <SelectItem value="Thriller">Thriller</SelectItem>
                    <SelectItem value="War">War</SelectItem>
                    <SelectItem value="Western">Western</SelectItem>
                  </SelectContent>
                </Select>
                </div>
              </div>
                </div>
              </div>

              <div className=" grid grid-rows-1 grid-cols-2 gap-5">
                <div>
                <Label htmlFor="actor 1" className="text-white">Actor 1</Label>
                <Input id="actor1" placeholder="Example: Jeremy Piven" />
                </div>
                <div>
                <Label htmlFor="actor 2" className="text-white">Actor 2</Label>
                <Input id="actor2" placeholder="Example: Jenna Ortega" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="latest-year"  className="text-white">Latest Year</Label>
                <Input id="latest-year" placeholder="Enter latest year" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="origin" className="text-white">Origin</Label>
                <Input id="origin" placeholder="Enter origin" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="favorite-company" className="text-white">Favorite Company</Label>
                <Input id="favorite-company" placeholder="Enter favorite company" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-runtime" className="text-white">Maximum Run Time</Label>
                <Input id="max-runtime" placeholder="Enter maximum run time" />
              </div>
            </div>
         
          <Link href = "\Main">
          <Button className="w-full p-6 bg-slate-700  text-2xl">Submit</Button>
          </Link>
        
      </div>
        

    )

    }