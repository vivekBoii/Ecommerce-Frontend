import axios from "axios";

export function AddToCartApi(value) {
    // const config={headers:{"Content-Type":"multipart/form-data"},withCredentials: true,};
    return axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/product/${value.id}`);
}