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
                              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTI3LjQxNCAyNC41ODYtNS4wNzctNS4wNzdBOS45MzIgOS45MzIgMCAwIDAgMjQgMTRjMC01LjUxNC00LjQ4Ni0xMC0xMC0xMFM0IDguNDg2IDQgMTRzNC40ODYgMTAgMTAgMTBhOS45MzIgOS45MzIgMCAwIDAgNS41MDktMS42NjNsNS4wNzcgNS4wNzdhMiAyIDAgMSAwIDIuODI4LTIuODI4ek03IDE0YzAtMy44NiAzLjE0LTcgNy03czcgMy4xNCA3IDctMy4xNCA3LTcgNy03LTMuMTQtNy03eiIgZmlsbD0iI2ZmZmZmZiIgY2xhc3M9ImZpbGwtMDAwMDAwIj48L3BhdGg+PC9zdmc+" 
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