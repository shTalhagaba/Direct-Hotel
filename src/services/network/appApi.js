import { api } from "./Environment";
import { callApi, Method } from "./NetworkManger";
import { store } from '../redux/store';

export const getUserVehicle = async () => {
    const auth = await store.getState().auth;
    let url = `${api?.getVehcile}${auth?.userData?._id}`
    console.log("Url => ", url)
    return response = await callApi(url, Method.GET);
}
export const patchUpdateVehicle = async (vechicleType, number, vehicleImage) => {
    const app = await store.getState().app;
    let vehicleBody = {
        vehicleType: vechicleType,
        vehicleNumber: number,
        images: vehicleImage
    }
    let url = `${api?.updateVehcile}${app?.vehicleDetails?._id}`
    console.log("Url => ", url)
    console.log("vehicleBody => ", vehicleBody)
    return response = await callApi(url, Method.PATCH, vehicleBody);
}
export const getTermsandConditions = async () => {
    return response = await callApi(api?.termsandCondition, Method.GET);
}
export const getPrivacyPolicy = async () => {
    return response = await callApi(api?.privacy, Method.GET);
}
export const patchAcceptOrder = async (id) => {
    let url = `${api?.acceptOrder}${id}`
    console.log("Url => ", url)
    return response = await callApi(url, Method.PATCH);
}
export const patchRejectOrder = async (id) => {
    let url = `${api?.rejectOrder}${id}`
    console.log("Url => ", url)
    return response = await callApi(url, Method.PATCH);
}
export const getBookingProductOrder = async () => {
    const auth = await store.getState().auth;
    let url = `${api?.getProductOrder}?driver=${auth?.userData?._id}`
    console.log("URL => ", url)
    return await callApi(url, Method.GET);
}
export const getNotifications = async (pageNumber) => {
    let url = `${api?.getNotification}${pageNumber}&limit=10`
    console.log("URL => ", url)
    return await callApi(url, Method.GET);
}
export const getReviews = async (pageNumber) => {
    const auth = await store.getState().auth;
    let url = `${api?.getReview}${pageNumber}&limit=10&driver=${auth?.userData?._id}`
    console.log("URL => ", url)
    return await callApi(url, Method.GET);
}
export const getMyWallet = async () => {
    let url = `${api?.getWallet}`
    console.log("URL => ", url)
    return await callApi(url, Method.GET);
}
export const getMyTransaction = async () => {
    const auth = await store.getState().auth;
    let url = `${api?.getTransaction}${auth?.userData?._id}`
    console.log("URL => ", url)
    return await callApi(url, Method.GET);
}
export const postContact = async (name, email, message) => {
    let contactBody = {
        name: name,
        email: email,
        message: message
    }
    let url = `${api?.contactUs}`
    console.log("URL => ", url)
    return await callApi(url, Method.POST, contactBody);
}





