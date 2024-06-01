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