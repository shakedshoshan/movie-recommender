"use client"

import { inputFieldT } from "../../typings"
import { Input } from "./ui/input";

const inputField = ({ type, name, placeholder, label }: inputFieldT) => {

    return (
        <div className="drop-shadow">
            <label className="">{label}</label>
            <Input type={type} name={name} placeholder={placeholder} id={`field_${name}`} />
        </div>
    );
};

export default inputField;
