"use client"
import Link from "next/link";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import InputField from "./InputField";
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState, useRef, SetStateAction, FormEvent } from 'react';




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

   const loginText = "Login";
   const inputRefUserName = useRef<HTMLInputElement>(null);
   const inputRefPassword = useRef<HTMLInputElement>(null);
   const [error, setError] = useState<string | null>(null);
   const [success, setSuccess] = useState<boolean>(false); // New state to track success

   const apiCall = () => {
    console.log("apiCollOnEnter")
    const inputUserName = inputRefUserName.current?.value;
    const inputPassword = inputRefPassword.current?.value;

    
    if (inputUserName && inputPassword) {
      // const router = useRouter();
      console.log(inputUserName)
      console.log(inputPassword)
      console.log("toke23:")
      const cradentials = { userName: inputUserName, password: inputPassword };
      console.log(cradentials)
      axios.post('http://localhost:4000/logIn', cradentials)
        .then(response => {
          console.log("try to save token1");
          console.log(response.data)
          console.log("resposnse token")

        //   Cookies.set('token', token, { expires: 1,});
        const token = response.data.token;
        const expires = new Date(Date.now() + 3600000); // 1 hour from now
        document.cookie = `token=${token}; expires=${expires.toUTCString()}; path=/`;
        console.log(response.data.token);
        document.cookie = `token=${token}; expires = in 1h for ${Date.now}`;
        console.log("resposnse token")
        console.log(token)

          if (response.status === 200) {
            console.log(response);
            setSuccess(true); // Set success to true if status is 200
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
        <div className="border rounded-lg border-gray-300 p-4 m-2 bg-gray-100 bg-opacity-90 space-y-1 shadow-lg">
            <h1 className="text-2xl font-b pb-4">{loginText}</h1>
            <div className="flex flex-col justify-center items-center space-y-2">
                
                {/*<BasicTextFields label="Email"/>
                <PasswordBlock />
    */}

                <form onSubmit={handleSubmit} className="space-y-4 scale-105 w-60">
                <div className="space-y-2 ">
              <Label htmlFor="name" className="text-black">User Name</Label>
              <Input ref={inputRefUserName} id="firstName" placeholder="Enter username" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="spouse-name" className="text-black">Password</Label>
              <Input ref={inputRefPassword} id="spouse-name" placeholder="Enter password" />
            </div>
                {/* <InputField
                        type="text"
                        placeholder="enter"
                        name="email" label={"User Name:"} register={undefined} error={undefined}                        />

                <InputField
                        type="password"
                        placeholder="Enter password"
                        name="password" label={"Password:"} register={undefined} error={undefined}                        /> */}
                </form>
                <Link href="/Main">
                    {/* <button className="border rounded-lg p-3 m-2 bg-blue-500 bg-opacity-90 text-white hover:bg-blue-700 w-64 cursor-pointer">
                            <span>ENTER</span>
                    </button> */}
                    <button className="border rounded-lg p-3 m-2 bg-blue-500 bg-opacity-90 text-white hover:bg-blue-700 w-64 cursor-pointer" onClick={apiCall}><span>ENTER</span></button>
                    </Link>
                


                
                <div className="flex flex-row items-center space-x-1">
                    <small>Still do not have user?</small>
                    <Link href="/SignIn"><small className="font-semibold">Sign-Up</small></Link>
                </div>
               
            </div>
        </div>

    )
}
 

export default Login;