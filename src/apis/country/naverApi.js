export const naverApiRequest = async (data) => {
    return await fetch(
        `https://openapi.naver.com/v1/search/image?query=${data}&sort=sim`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Naver-Client-Id": process.env.REACT_APP_NAVER_API_ID,
                "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_API_SECRET,
            },
        }
    );
};
