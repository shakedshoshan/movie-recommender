import axios from "axios";
import { API_BASE_URL } from "./../../config";


export async function getUserPreferences(tokenValue: string) {
  const data = { tokenValue: tokenValue };
  try {
    // const response = await axios.post('http://localhost:4000/fetchPreferences', data, {
    const response = await axios.post(`${API_BASE_URL}/fetchPreferences`, data, {    
      withCredentials: true,
    });

    if (response.status === 200) {
      if (response.data.preferences.responseFromDb.preferences) {
        return response.data.preferences.responseFromDb.preferences;
      } else {
        console.log('\n---------------not found wl-------------\n');
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }

  return []; 
};

    export async function getWishlistFromServer(tokenValue: string): Promise<any[]> {
      const checkWishList = { token: tokenValue };
      try {
        // const response = await axios.post('http://localhost:4000/getWishList', checkWishList, {
          const response = await axios.post(`${API_BASE_URL}/getWishList`, checkWishList, {
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
  
    return []; 
  }