import { instance } from "../utils/instance";

export const getCountryAllRequest = async () => {
    return await instance.get("/country/all");
};

export const searchCountryRequest = async (data) => {
    return await instance.get(`/country/single?search=${data}`);
};
