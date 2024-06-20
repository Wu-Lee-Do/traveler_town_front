import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

function GoogleMapsComponent({ lat, lng }) {
    const [location, setLocation] = useState({});

    useEffect(() => {
        if (!isNaN(lat) && !isNaN(lng)) {
            setLocation({ lat, lng });
        }
    }, [lat, lng]);

    if (isNaN(location.lat) || isNaN(location.lng)) {
        return <div>Error: Invalid coordinates</div>;
    }
    console.log(lat, lng);
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <APIProvider
                apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                onLoad={() => console.log("Maps API has loaded.")}
            >
                <Map
                    defaultZoom={13}
                    defaultCenter={{
                        lat: parseFloat(location.lat),
                        lng: parseFloat(location.lng),
                    }}
                >
                    <Marker
                        position={{
                            lat: parseFloat(location.lat),
                            lng: parseFloat(location.lng),
                        }}
                    />
                </Map>
            </APIProvider>
        </div>
    );
}

export default GoogleMapsComponent;
