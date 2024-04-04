"use client"
import Link from "next/link";
import BasicTextFields from "./BasicTextFields";
import PasswordBlock from "./PasswordBlock";
import { Input } from "@/components/ui/input"
import InputField from "./InputField";

//import { register } from "module";
import error from "next/error";
import { FormEvent } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const Login = () => {
   /* const session = useSession({
        required:true,
        onUnauthenticated(){
            redirect('/SignIn');
        },
    })*/

  // const {handleSubmit, register, formState{errors}} = loginValidation();

   const submitForm = (values:object) =>{
    console.log("form values", values)
   } 

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        throw new Error("Function not implemented.");
    }

   

    return (
        <div className="border rounded-lg border-gray-300 p-4 m-2 bg-gray-100 bg-opacity-90 space-y-1 shadow-lg">
            <h1 className="text-2xl font-b pb-4">Log In</h1>
            <div className="flex flex-col justify-center items-center space-y-2">
                
                {/*<BasicTextFields label="Email"/>
                <PasswordBlock />
    */}

                <form onSubmit={handleSubmit} className="space-y-4 scale-105 w-60">
                <InputField
                        type="text"
                        placeholder="enter"
                        name="email" label={"Email:"} register={undefined} error={undefined}                        />

                <InputField
                        type="password"
                        placeholder="Enter password"
                        name="password" label={"Password:"} register={undefined} error={undefined}                        />
                </form>
                <Link href="/Main">
                    <button className="border rounded-lg p-3 m-2 bg-blue-500 bg-opacity-90 text-white hover:bg-blue-700 w-64 cursor-pointer">
                            <span>ENTER</span>
                    </button>
                    </Link>
                


                
                <div className="flex flex-row items-center space-x-1">
                    <small>Still do not have user?</small>
                    <Link href="/SignIn"><small className="font-semibold">Sign-in</small></Link>
                </div>
               
            </div>
        </div>

    )
}
 

export default Login;