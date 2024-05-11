import Image from "next/image";
import Login from "../components/Login";
import inputField from "@/components/InputField";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Image
                              alt={"Background Image"}
                              src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/Identity%20Pod/Landing%20Consent%20page/IL/Landing_Page_MH_Desktop_IL.png" 
                              sizes="100vw"
                              layout="fill"
                              style={{ zIndex: -1 }}
                          />
      <div className="flex flex-col space-y-6 items-center pt-[60px] scale-90"> 
        <div className="items-center justify-center ">
                          <Image
                              alt="logo"
                              src="https://cdn.iconfinder.com/stored_data/1481916/128/png?token=1705845134-0nw%2FCBd8RSLuj8UwsFWj7ZO0ICcITHwcvyPl5HzR1CE%3D" 
                              width={130}
                              height={130}
                          />
        </div>
          <h1 className="font-momo font-bold  text-7xl text-white pb-10 ">Welcome to Cinemate</h1>

          
        
          {/* log in box*/}
        <div className="scale-110">
          
          <Login />

        </div>
      </div>
      
    </main>
  );
}
