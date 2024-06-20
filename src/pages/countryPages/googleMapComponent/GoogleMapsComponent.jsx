import { useEffect, useState } from "react";



function GoogleMapsComponent({ lat, lng }) {
    const [location, setLocation] = useState();

    useEffect(() => {
        setLocation({
            lat: lat,
            lng: lng,
        });
    }, []);

    console.log(lat, lng);
    return <div style={{ width: "100%", height: "100%" }}></div>;
}

export default GoogleMapsComponent;
