export const googleTouristAttractionSearchRequest = async (data) => {
    if (data.length === 0) {
        return;
    } else {
        return await fetch(
            "https://places.googleapis.com/v1/places:searchText?fields=places.displayName,places.formattedAddress,places.googleMapsUri,places.websiteUri,places.regularOpeningHours,places.editorialSummary,places.reviews,places.photos,places.rating,places.id",
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
                    pageSize: 10,
                }),
            }
        );
    }
};

export const googlePlacesDetailRequest = async (data) => {
    if (data.length === 0) {
        return;
    } else {
        return await fetch(
            `https://places.googleapis.com/v1/places/${data}?fields=displayName,formattedAddress,rating,regularOpeningHours,editorialSummary,reviews,photos&languageCode=ko`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": process.env.REACT_APP_GOOGLE_API_KEY,
                    Accept: "application/json",
                },
            }
        );
    }
};

export const googleRestaurantSearchRequest = async (data) => {
    if (data.length === 0) {
        return;
    } else {
        return await fetch(
            "https://places.googleapis.com/v1/places:searchText?fields=places.displayName,places.formattedAddress,places.googleMapsUri,places.websiteUri,places.regularOpeningHours,places.editorialSummary,places.reviews,places.photos,places.rating",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": process.env.REACT_APP_GOOGLE_API_KEY,
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    textQuery: `restaurant in ${data}`,
                    languageCode: "ko",
                    includedType: "restaurant",
                    pageSize: 10,
                }),
            }
        );
    }
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
