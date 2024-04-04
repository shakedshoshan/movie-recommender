import Image from "next/image";

import Link from "next/link";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";


function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/Main" className="mr-10">
        <Image
          alt="logo"
          src="https://cdn.iconfinder.com/stored_data/1481916/128/png?token=1705845134-0nw%2FCBd8RSLuj8UwsFWj7ZO0ICcITHwcvyPl5HzR1CE%3D" 
          width={60}
          height={50}
        />
      </Link>


      <div className="flex items-center  space-x-8">
        <Link href="/Main/WishList" >
          <p className="text-white hover:bg-black rounded py-2 px-2 ">WishList</p>
        </Link>
        <GenreDropdown />
        <SearchInput />

      </div>
    </header>
  );
}

export default Header;