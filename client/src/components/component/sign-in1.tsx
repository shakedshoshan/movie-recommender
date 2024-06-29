"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import Link from "next/link"
import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';


export function SignIn1() {
  useEffect(() => {
    console.log(document.getElementById('printButton'));
    const input = document.getElementById('firstName');

  }, []);


  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false); // New state to track success

  const inputRefUserName = useRef<HTMLInputElement>(null);
  const inputRefPassword = useRef<HTMLInputElement>(null);


  const apiCall = () => {
    const inputUserName = inputRefUserName.current?.value;
    const inputPassword = inputRefPassword.current?.value;

    if (inputUserName && inputPassword) {
      const cradentials = { userName: inputUserName, password: inputPassword };
      axios.post('http://localhost:4000/signUp', cradentials, {
        withCredentials: true
      })
        .then(response => {
          if (response.status === 200) {
            const token = response.data.token;
            const expires = new Date(Date.now() + 3600000); // 1 hour from now
            document.cookie = `token=${token}; expires=${expires.toUTCString()}; path=/`;
            document.cookie = `token=${token}; expires = in 1h for ${Date.now}`;
            setSuccess(true);
          } else {
            setError("Bad request. Please check your credentials.");
          }
        })
        .catch(error => {
          setError("An error occurred. Please try again later.");
          console.error('Error:', error);
        });
    } else {
      setError("Email or password are missing!");
    }
  };

  return (
    <div className="px-4 py-12 md:py   ">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-gray-200" />
              <div className="w-3 h-3 rounded-full bg-gray-500" />
              <div className="w-3 h-3 rounded-full bg-gray-500" />
            </div>
            <p className="text-sm text-gray-200 ">Stage 1 of 3</p>
          </div>
          <h1 className="text-5xl font-bold  text-white">Sign In to CineMate</h1>
          <p className="text-gray-200 ">
            Enter the personal information and movie's preferences you have
          </p>
        </div>
        <div className="space-y-8">
          <h1 className="text-2xl text-white font-semibold">Personal data</h1>
          <div className="space-y-4 ">
            <div className="space-y-2 ">
              <Label htmlFor="name" className="text-white">User Name</Label>
              <Input ref={inputRefUserName} id="firstName" placeholder="Enter username" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="spouse-name" className="text-white">Password</Label>
              <Input type="password" ref={inputRefPassword} id="spouse-name" placeholder="Enter password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <div className="flex items-center">
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="spouse-age" className="text-white">Date of birth</Label>
                <Input id="age" placeholder="Enter your age" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="spouse-gender" className="text-white">Gender</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div>

              <Link href="/SignIn/preferences">
                <button className="w-full p-3 bg-slate-700  text-2xl rounded-xl text-white hover:bg-gray-800 transition " onClick={apiCall}>Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function setInputValue(value: any) {
  throw new Error("Function not implemented.")
}

