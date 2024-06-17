export const googleMapsSearchRequest = async (data) => {
    return await fetch(
        "https://places.googleapis.com/v1/places:searchText?fields=places.displayName,places.formattedAddress,places.googleMapsUri,places.websiteUri,places.regularOpeningHours,places.editorialSummary,places.reviews,places.photos",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": process.env.REACT_APP_GOOGLE_API_KEY,
                Accept: "application/json",
            },
            body: JSON.stringify({
                textQuery: `${data} tourist attraction`,
                languageCode: "ko",
                includedType: "tourist_attraction",
                pageSize: 5,
            }),
        }
    );
};

export const googleImgSearchRequest = async (data) => {
    return await fetch(
        `https://places.googleapis.com/v1/${data}/media?maxHeightPx=1600&skipHttpRedirect=true`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": process.env.REACT_APP_GOOGLE_API_KEY,
                Accept: "application/json",
            },
        }
    );
};
