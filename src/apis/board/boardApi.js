import { instance } from "../utils/instance";

export const getBoardsAll = async (params) => {
    return await instance.get("/board/all", { params });
};

export const getBoardsAllBySearch = async (params) => {
    return await instance.get("/board/search", { params });
};

export const getBoardByBoardId = async (boardId) => {
    return await instance.get(`/board/${boardId}`);
};

export const addNewBoard = async (data) => {
    return await instance.post("/board/new", data);
};

export const updateBoard = async (data) => {
    return await instance.put("/board/update", data);
};
