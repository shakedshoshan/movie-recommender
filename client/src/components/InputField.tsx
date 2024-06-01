"use client"

import error from "next/error";
import { inputFieldT } from "../../typings"
import { Input } from "./ui/input";

const inputField = ({type, name, placeholder, label} : inputFieldT) => {

    return(
        <div className="drop-shadow">
            <label className="">{label}</label>
            <Input type={type} name={name} placeholder={placeholder} id={`field_${name}`} />


            {/*
                error && <span className="">{error?.messege}</span>
    */}
        </div>
    );
};

export default inputField;

/*
"use client"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";

const formSchema = z.object({ // func to define how much letters in search
    input: z.string().min(2).max(8),
  });

  function inputField() {
    const router = useRouter();
  
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        input: "",
      },
    });
  
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
  
      router.push(`/MainPage`);
    }
  
    return (
        <div >
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-x-2 flex flex-row">
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem className="text-[#bcbcbc]">
                <FormControl className="bg-[#2c315b] border-[#1d213f]">
                  <Input placeholder="Search..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-black h-10">
          ENTER
          </Button>
        </form>
      </Form>
      </div>
    );
  }
  
  export default inputField;
*/