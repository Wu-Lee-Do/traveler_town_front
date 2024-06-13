import axios from "axios";

export const searchCountryRequest = async (data) => {
    return await axios
        .create({
            baseURL: `https://restcountries.com/v3.1/name/${data}`,
        })
        .get();
};
