import axios from "axios";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { getMovieRecommendations } from "./getMovies";
import { MovieID } from "../../typings";



export async function getUserPreferences(tokenValue: string) {
    try {
        const response = await fetch('http://localhost:4000/fetchPreferences', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ tokenValue: tokenValue }),
        });
    
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
    
        const data = await response.json();
        //console.log(data);
        return data.preferences.responseFromDb.preferences;
      } catch (error) {
        console.error('Error fetching user ID:', error);
        return null;
      }
    };

export async function getUserIdFromServer(tokenValue: string) {
    try {

        console.log("TOKEN VALUEEEEE")
        console.log(tokenValue)
        console.log("TOKEN VALUEEEEE")
        const response = await fetch('http://localhost:4000/getIdFromToken', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ tokenValue: tokenValue }),
        });
    
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
    
        const data = await response.json();
        console.log('data');
        console.log(data);
        console.log('data');
        return data;
      } catch (error) {
        console.error('Error fetching user ID:', error);
        return null;
      }
    };
  
    export async function getWishlistFromServer(tokenValue: string): Promise<any[]> {
      const checkWishList = { token: tokenValue };
    
      try {
        const response = await axios.post('http://localhost:4000/getWishList', checkWishList, {
          withCredentials: true,
        });
    
        if (response.status === 200) {
          if (response.data.wishList) {
            return response.data.wishList.responseFromDb;
          } else {
            console.log('\n---------------not found wl-------------\n');
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    
      return []; // Return an empty array if no data is found or an error occurs
    }

    
    export async function getRatingsFromServer(tokenValue: string): Promise<any[]> {
      const rating = { token: tokenValue };
    
      try {
        const response = await axios.post('http://localhost:4000/getAllRatings', rating, {
          withCredentials: true,
        });
    
        if (response.status === 200 ) {
          if (response.data.rating) {
            //console.log(response.data.rating.responseFromDb)
            return response.data.rating.responseFromDb;
          }
        } else {
          console.log('fail to set rating');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    
      return []; // Return null if no rating is found or an error occurs
    }


  //   export async function processMovieElements(elements: any[]):Promise<MovieID[]> {
  //     const movies:MovieID[] = []
  //     let movie:any
  //     for (const element of elements) {
  //         if(element.movieId != undefined) {
  //           //console.log(`Processing element with movieId: ${element.movieId}`);
  //           movie = getMovieRecommendations(element.movieId); // Call getMovieById for each movieId
  //           console.log(movie.id);
  //           movies.push(movie)
  //         }
         
  //       }
  //     // console.log("\n\n------------data fetch-------------\n\n")
  //     // console.log(movies)
  //     return movies
  // }



  export async function generateRecommendFromServer(tokenValue: string): Promise<any[]> {
    const recommends = { token: tokenValue };
  
    try {
      const response = await axios.post('http://localhost:4000/generateRecommendation', recommends, {
        withCredentials: true,
      });
  
      if (response.status === 200 ) {
        if (response.data.recommendation) {
          
          return response.data.recommendation;
        }
      } else {
        console.log('fail to set reccomends');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  
    return []; // Return null if no rating is found or an error occurs
  }


  export async function getRecommendFromServer(tokenValue: string): Promise<any[]> {
    const getRecommends = { token: tokenValue };
  
    try {
      const response = await axios.post('http://localhost:4000/getRecommendation', getRecommends, {
        withCredentials: true,
      });
      if (response.status === 200 ) {
        if (response.data) {
          //console.log(response.data.recommendation[0])
          return response.data.recommendation;
        }
      } else {
        console.log('fail to set reccomends');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  
    return []; // Return null if no rating is found or an error occurs
  }