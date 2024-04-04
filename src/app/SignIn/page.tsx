import Image from "next/image";
import BasicTextFields from "../../components/BasicTextFields";
import PasswordBlocks from "../../components/PasswordBlock";
import GenderBox from "../../components/GenderBox";
import AgeBox from "../../components/AgeBox";
import Link from "next/link";
import InputField from "@/components/InputField";
import { register } from "module";
import { SignIn1 } from "@/components/component/sign-in1";


export default function SignIn() {
    return (
        <div className=" flex flex-col items-center text-3xl">
            
            <SignIn1  />
            
          
        </div>
        

    )
}


/*

                <div className="flex flex-row">
                    <BasicTextFields label="First Name" />
                    <BasicTextFields label="Second Name"/>
                </div>
                <div className="flex flex-row">
                    <AgeBox />
                    <GenderBox />
                </div>
                <div className="flex flex-row">
                    <BasicTextFields label="E-Mail"/>
                    <PasswordBlocks />
                </div>

            </div>
            <div className="border-b border-gray-400 w-auto"></div>

             {/*Preferences data
             <div className="flex flex-col space-x-2 space-y-2 justify-normal border rounded-lg border-gray-300 p-4 m-2 bg-gray-100 bg-opacity-90">
                <h2>Preferences</h2>
                {/*personal data
                <div className="flex flex-row">
                    <BasicTextFields label="First Name" />
                    <BasicTextFields label="Second Name"/>
                </div>
                <div className="flex flex-row">
                    <AgeBox />
                    <GenderBox />
                </div>
                <div className="flex flex-row">
                    <BasicTextFields label="E-Mail"/>
                    <PasswordBlocks />
                </div>
               

*/