export const googleMapsSearchRequest = async (data) => {
    return await fetch(
        "https://places.googleapis.com/v1/places:searchText?fields=places.displayName,places.formattedAddress,places.googleMapsUri,places.websiteUri,places.regularOpeningHours,places.editorialSummary,places.reviews",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": process.env.REACT_APP_GOOGLE_API_KEY,
                Accept: "application/json",
            },
            body: JSON.stringify({
                textQuery: `${data} Tourist destination`,
                languageCode: "ko",
                includedType: "tourist_attraction",
                pageSize: 5,
            }),
        }
    );
};
