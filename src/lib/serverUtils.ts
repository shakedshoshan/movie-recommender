import axios from "axios";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";



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
  