import { api } from "./Environment";
import { callApi, Method } from "./NetworkManger";

export const getTermsandConditions = async () => {
    return response = await callApi(api?.termsandCondition, Method.GET);
}
export const searchApi = async (keyword) => {
    let url = `${api?.autoCompleteSearch}?text=${keyword}&language=en&currency=SAR`
    console.log("URL => ", url)
    return await callApi(url, Method.GET);
}

export const topDestinationSearchApi = async (body) => {
    let url = `${api?.mountedData}`;
    console.log('topDestinationSearchApi => ', url);
    return await callApi(url, Method.POST, body);
  };





