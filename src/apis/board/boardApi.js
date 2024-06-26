import { instance } from "../utils/instance";

export const getBoardsAll = async (params) => {
    return await instance.get("/board/all", { params });
};

export const getBoardsAllBySearch = async (params) => {
    return await instance.get("/board/search", { params });
};
