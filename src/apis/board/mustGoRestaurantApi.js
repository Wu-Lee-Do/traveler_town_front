import { instance } from "../utils/instance"

export const getMustGoRestaurantAll = async () => {
    return await instance.get("/restaurant/boards");
}