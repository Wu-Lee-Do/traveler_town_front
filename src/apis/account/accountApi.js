import { instance } from "../utils/instance";

export const editSexRequest = async (data) => {
    return await instance.put("/account/sex", data);
};

export const editAgeRequest = async (data) => {
    return await instance.put("/account/age", data);
};