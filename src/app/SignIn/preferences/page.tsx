import { SignIn2 } from "@/components/component/sign-in2";
import { getOrigins } from "@/lib/getMovies";


export default async function SignIn() {
    const ol = await getOrigins();
    //console.log(ol[1].english_name)
    return (
        <div className=" flex flex-col items-center  text-3xl">      
            <SignIn2 originList={ol} iso_3166_1={""} english_name={""}/> 
        </div>
        

    )
}
