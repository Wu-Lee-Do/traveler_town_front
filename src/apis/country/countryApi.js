import { instance } from "../utils/instance";

export const getCountryAllRequest = async () => {
    return await instance.get("/country/all");
};

export const searchCountryRequest = async (data) => {
    return await instance.get(`/country/single?search=${data}`);
};

export const addCountryBookmarkRequest = async (data) => {
    return await instance.post("/country/bookmark", data);
};

export const getCountryBookmarkRequest = async () => {
    return await instance.get("/country/getbookmark");
};

export const removeCountryBookmarkRequest = async (data) => {
    return await instance.delete(
        `/country/removebookmark?countryBookmarkId=${data}`
    );
};

export const getCountryNameKorAndCountryCodeAllRequest = async () => {
    return await instance.get("/country/getcountry");  
};
