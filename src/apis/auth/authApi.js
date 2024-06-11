import { instance } from "../utils/instance";

export const getPricipalRequest = async () => {
    return await instance.get("/account/principal");
};

export const signinRequest = async (data) => {
    const response = await instance.post("/auth/signin", data);
    return response;
};

export const signupRequest = async (data) => {
    try {
        const response = instance.post("/auth/signup", data);
        return response;
    } catch (error) {
        console.log(error);
        return error.response;
    }
};
