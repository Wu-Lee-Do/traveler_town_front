import { instance } from "../utils/instance";

export const editSexRequest = async (data) => {
    return await instance.put("/account/sex", data);
};

export const editAgeRequest = async (data) => {
    return await instance.put("/account/age", data);
};

export const editImgRequest = async (data) => {
    return await instance.put("/account/img", data);
};

export const sendMailRequest = async () => {
    return await instance.post("/mail/send");
};
