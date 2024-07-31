import { BASE_URL } from './Environment';
import axios from 'axios'


export const Method = {
  "GET": 'GET',
  "POST": 'POST',
  "PUT": 'PUT',
  "DELETE": 'DELETE',
  "PATCH": 'PATCH',
}
export const Status = {
  "SUCCESS": 200,
  "CREATE": 201,
  "ERROR": 400,
  "AUTHENTICATION_FAIL": 401,
  "NOT_FOUND": 404,
  "DELETE": 204,
}
export const callApi = async (url, method, data) => {
    const headers = { 'Accept': 'application/json' }
    try {
      const response = await axios({ method, url: BASE_URL + url, data, headers })
      return response?.data
    } catch (error) {
      if (error?.response?.data?.message === "jwt expired" || error?.response?.data?.message === "Token has expired.") {
        try {
          const refreshedResponse = await axios({ method, url: BASE_URL + url, data, headers })
          return refreshedResponse?.data;
        } catch (refreshError) {
          throw refreshError;
        }
      } else {
        console.log("eerorr => ", error?.response?.data)
        // throw error;
        return error?.response?.data
      }
    }
};

