"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import Link from "next/link"

import { zodResolver } from "@hookform/resolvers/zod"

import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import AgeBox from "../AgeBox"
import React, { useState } from 'react';



export function SignIn1() {
  console.log(document.getElementById('printButton'));
  const input = document.getElementById('firstName');

 
  

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
              <Label htmlFor="name" className="text-white">First Name</Label>
              <Input id="firstName" placeholder="Enter name"/>
              
            </div>
            <div className="space-y-2">
              <Label htmlFor="spouse-name" className="text-white">Family Name</Label>
              <Input id="spouse-name" placeholder="Enter name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <div className="flex items-center">
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="spouse-age" className="text-white">Age</Label>
                <Input id="age" placeholder="Enter your age" type="age" />
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
          
            <Link href="\SignIn\preferences">
            <Button id="submit" className="w-full p-6 bg-slate-700  text-2xl">Submit</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
function setInputValue(value: any) {
  throw new Error("Function not implemented.")
}

