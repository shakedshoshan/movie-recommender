import { Genres, Movie } from "../../typings";
import { getPersonIdByName } from "./getMovies";
import axios from 'axios';
import Cookies from 'js-cookie';


export async function getColdStartMovies2(token: string) {
    console.log("INGetColdStartMoview2")
    console.log("token")
    console.log(token)
    console.log("token")

    axios.post('http://localhost:4000/fetchPreferences', token)
    .then(response => {
      if (response.status === 200) {
        return response.data.preferences;
      } else {
  
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });


}