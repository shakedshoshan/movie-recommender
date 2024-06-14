"use server"
import { Genres } from "../../typings";
import { getPersonIdByName } from "./getMovies";
import Cookies from 'js-cookie';
import axios from 'axios';
import { API_BASE_URL } from "./../../config";


export async function getPreferences(){
  let token = Cookies.get("token");
  console.log(token);
  // axios.post('http://localhost:4000/fetchPreferences', token)
  axios.post(`${API_BASE_URL}/fetchPreferences`, token)
  .then(response => {
    console.log("get preferences");
    if (response.status === 200) {
      //console.log(response.data.preferences)
      return response.data.preferences;
    } else {
      setError("Bad request. Please check your credentials.");
    }
  })
  .catch(error => {
    setError("An error occurred. Please try again later.");
    console.error('Error:', error);
});
}

export async function getColdStartMovies(shuffle: boolean, year?: string, genre1?: string, genre2?: string, genre3?: string, person1?: any, person2?: any, company?: string, country?: string ):Promise<any[]> {
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
  genre1 = await name_to_genreID(genre1, data);
  genre2 = await  name_to_genreID(genre2, data);
  genre3 = await name_to_genreID(genre3, data);

  const personName1 = await getPersonIdByName(person1);
  const personName2 = await getPersonIdByName(person2);


  if(year == null)(
    year = "0.0"
  )
  //console.log(personName2)
  

  const url1 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&sort_by=vote_count.desc&with_companies=${company}&with_genres=${genre1}%2C%20${genre2}%2C%20${genre3}&with_origin_country=${country}`;
  const url2 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&sort_by=vote_count.desc&with_genres=${genre1}%2C%20${genre2}%2C%20${genre3}&with_origin_country=${country}`;
  const url3 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&sort_by=vote_count.desc&with_genres=${genre1}%2C%20${genre2}%2C%20${genre3}`;

  const url4 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&sort_by=vote_count.desc&with_companies=${company}&with_genres=${genre1}%2C%20${genre2}&with_origin_country=${country}`;
  const url5 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&sort_by=vote_count.desc&with_genres=${genre1}%2C%20${genre2}&with_origin_country=${country}`;
  const url6 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&sort_by=vote_count.desc&with_genres=${genre1}%2C%20${genre2}`;

  const url7 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&sort_by=vote_count.desc&with_companies=${company}&with_genres=${genre1}&with_origin_country=${country}`;
  const url8 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&sort_by=vote_count.desc&with_genres=${genre1}&with_origin_country=${country}`;
  const url9 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&sort_by=vote_count.desc&with_genres=${genre1}`;

  const url10 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&sort_by=vote_count.desc&with_companies=${company}&with_origin_country=${country}`;
  const url11 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&sort_by=vote_count.desc&with_origin_country=${country}`;

  const url12 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&with_genres=${genre1}%20OR%20${genre2}%20OR%20${genre3}&sort_by=vote_average.desc&vote_count.gte=500`;
  const url13 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&with_genres=${genre1}%20OR%20${genre2}%20OR%20${genre3}&sort_by=vote_count.desc`;

  const url14 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&with_genres=${genre1}%20OR%20${genre2}%20OR%20${genre3}&sort_by=vote_count.desc&with_cast=${personName1}%20OR%20${personName2}`;
  const url15 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&sort_by=vote_count.desc&with_cast=${personName1}`;
  const url16 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&sort_by=vote_count.desc&with_cast=${personName2}`;

  const url17 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&sort_by=vote_count.desc&with_genres=${genre1}%2C%20${genre2}%2C%20${genre3}`;
  const url18 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&sort_by=vote_count.desc&with_genres=${genre1}%2C%20${genre2}`;
  const url19 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&sort_by=vote_count.desc&with_genres=${genre1}`;

  const url20 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&with_genres=${genre1}%2C%20${genre2}%2C%20${genre3}&sort_by=vote_count.desc&with_cast=${personName1}%20OR%20${personName2}`;
  const url21 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&with_genres=${genre1}%2C%20${genre2}&sort_by=vote_count.desc&with_cast=${personName1}%20OR%20${personName2}`;
  const url22 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&with_genres=${genre1}&sort_by=vote_count.desc&with_cast=${personName1}%20OR%20${personName2}`;

  const url23 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&with_genres=${genre1}%2C%20${genre2}%2C%20${genre3}&sort_by=vote_count.desc&with_cast=${personName1}%2C%20${personName2}`;
  const url24 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&with_genres=${genre1}%2C%20${genre2}&sort_by=vote_count.desc&with_cast=${personName1}%2C%20${personName2}`;
  const url25 = `https://api.themoviedb.org/3/discover/movie?release_date.gte=${year}-01-01&with_genres=${genre1}&sort_by=vote_count.desc&with_cast=${personName1}%2C%20${personName2}`;

    const recommended_movie1 = await fetchData(url1,6);
    const recommended_movie2 = await fetchData(url2,6);
    const recommended_movie3 = await fetchData(url3,6);
    const recommended_movie4 = await fetchData(url4,9);
    const recommended_movie5 = await fetchData(url5,9);
    const recommended_movie6 = await fetchData(url6,9);
    const recommended_movie7 = await fetchData(url7,12);
    const recommended_movie8 = await fetchData(url8,12);
    const recommended_movie9 = await fetchData(url9,12);
    const recommended_movie10 = await fetchData(url10,12);
    const recommended_movie11 = await fetchData(url11,12);
    const recommended_movie12 = await fetchData(url12,17);
    const recommended_movie13 = await fetchData(url13,17);
    const recommended_movie14 = await fetchData(url14,17);
    const recommended_movie15 = await fetchData(url15,8);
    const recommended_movie16 = await fetchData(url16,8);
    const recommended_movie17 = await fetchData(url17,6);
    const recommended_movie18 = await fetchData(url18,5);
    const recommended_movie19 = await fetchData(url19,5);
    const recommended_movie20 = await fetchData(url20,5);
    const recommended_movie21 = await fetchData(url21,5);
    const recommended_movie22 = await fetchData(url22,5);
    const recommended_movie23 = await fetchData(url23,8);
    const recommended_movie24 = await fetchData(url24,8);
    const recommended_movie25 = await fetchData(url25,8);

    // Concatenate all recommended movie arrays
    const recommended_movie = [
        ...recommended_movie25,
        ...recommended_movie24,
        ...recommended_movie23,
        ...recommended_movie20,
        ...recommended_movie21,
        ...recommended_movie22,
        ...recommended_movie1,
        ...recommended_movie2,
        ...recommended_movie3,
        ...recommended_movie4,
        ...recommended_movie15,
        ...recommended_movie16,
        ...recommended_movie5,
        ...recommended_movie6,
        ...recommended_movie7,
        ...recommended_movie8,
        ...recommended_movie9,
        ...recommended_movie17,
        ...recommended_movie18,
        ...recommended_movie19,
        ...recommended_movie14,
        ...recommended_movie10,
        ...recommended_movie11,
        ...recommended_movie12,
        ...recommended_movie13
    ];
  
  // Remove duplicate entries based on the 'id' key
  const uniqueMoviesMap = new Map();
  const uniqueMovies: any[] = [];
  recommended_movie.forEach(movie => {
    if (!uniqueMoviesMap.has(movie.id)) {
      uniqueMoviesMap.set(movie.id, true);
      uniqueMovies.push(movie);
    }
  });
    // Shuffle the uniqueMovies array
    if(shuffle) uniqueMovies.sort(() => Math.random() - 0.5);
    return uniqueMovies;
  }


  export async function name_to_genreID(name: any, response: any) {
    //const response_json = JSON.parse(response);
    const genres = response.genres;
    for (let i = 0; i < genres.length; i++) {
      const genre = genres[i];
      if (genre.name === name) {
        return genre.id;
      }
    }
    return null;
  }

  async function fetchData(url: string, limit: number) {
    const response = await fetch(url, { headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      } });
    const data = await response.json();
    return data.results.slice(0, limit);
  }
  

function setError(arg0: string) {
  throw new Error("Function not implemented.");
}
  