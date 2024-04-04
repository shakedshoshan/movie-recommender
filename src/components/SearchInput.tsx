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
    input: z.string().min(2).max(50),
  });

  function SearchInput() {
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
  
      router.push(`Main/search/${values.input}`);
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
          <Image
                              alt="search"
                              src="https://cdn.iconfinder.com/stored_data/1485459/128/png?token=1706002983-JNE0fpx5UZydNqMk2Q6MTqFqIVDm2BgelhHMkKelD7U%3D" 
                              width={20}
                              height={20}
                          />
          </Button>
        </form>
      </Form>
      </div>
    );
  }
  
  export default SearchInput;