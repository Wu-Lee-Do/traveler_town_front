import { instance } from "../utils/instance";

export const getCommentsAll = async (params) => {
    return await instance.get("/comment/all", { params });
};

export const getCommentByBoardCommentId = async (baordCommentId) => {
    return await instance.get(`/comment/${baordCommentId}`);
};

export const addNewComment = async (data) => {
    return await instance.post("/comment/new", data);
};

export const removeComment = async (params) => {
    return await instance.delete("/comment/remove", { params });
};

export const updateComment = async (data) => {
    return await instance.put("/comment/update", data);
};
