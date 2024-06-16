export const unsplashApiRequest = async (data) => {
    return await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${data}&client_id=7SqvMLsjfCm93VLMZCcOHcrFJiQ2yN8FWRkeS-m1jmE`,
        {
            method: "GET",
        }
    );
};
