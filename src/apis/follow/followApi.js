import { instance } from "../utils/instance";

export const followRequest = async ({ followerId, followingId }) => {
    return await instance.post(
        `/follow/add?followerId=${followerId}&followingId=${followingId}`
    );
};

export const getFollowersRequest = async (data) => {
    return await instance.get(`/follow/followers?userId=${data}`);
};

export const getFollowingsReqest = async (data) => {
    return await instance.get(`/follow/followings?userId=${data}`);
};

export const removeFollowRequest = async ({ followerId, followingId }) => {
    return await instance.delete(
        `/follow/remove?followerId=${followerId}&followingId=${followingId}`
    );
};
