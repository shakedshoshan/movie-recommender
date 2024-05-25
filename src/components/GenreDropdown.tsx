import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Genres } from "../../typings";

async function GenreDropdown() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as Genres;

  

  return (
    <DropdownMenu  >
      <DropdownMenuTrigger className="text-[#f0f0f2] items-center flex justify-center  hover:bg-black  hover:bg-opacity-70  rounded py-2 px-2">Genre<ChevronDown /></DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#2c315b] border-[#181b37] text-[#d3d3e0]">
    <DropdownMenuLabel>Select genre</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {data.genres.map((genre) => (
          <DropdownMenuItem className="cursor-pointer" key={genre.id}>
            <Link href={`/Main/Genre/${genre.id}?genre=${genre.name}`}>
              {genre.name}
            </Link>
          </DropdownMenuItem>
        ))}
    
  </DropdownMenuContent>
</DropdownMenu>
  );
}

export default GenreDropdown;