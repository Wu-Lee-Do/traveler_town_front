import { instance } from "../utils/instance";

export const getEmbassyRequest = async (data) => {
    return await instance.get(`/embassy/single?countryCode=${data}`);
};
