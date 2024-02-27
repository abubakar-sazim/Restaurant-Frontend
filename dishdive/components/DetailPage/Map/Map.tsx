import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import axios from "axios";
require("dotenv").config();

interface MapComponentProps {
  location: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ location }) => {
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  useEffect(() => {
    axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          address: location,
          key: apiKey,
        },
      })
      .then((response) => {
        const { lat, lng } = response.data.results[0].geometry.location;
        setMapCenter({ lat, lng });
      })
      .catch((error) => console.error("Error fetching geocoding data:", error));
  }, [location]);

  return (
    <GoogleMap
      center={mapCenter}
      zoom={13}
      mapContainerStyle={{ width: "100%", height: "400px" }}
    >
      <Marker position={mapCenter} />
    </GoogleMap>
  );
};

const MapContainer: React.FC<MapComponentProps> = ({ location }) => {
  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    if (window.google) {
      setApiLoaded(true);
    }
  }, []);

  return (
    <>
      {apiLoaded ? (
        <MapComponent location={location} />
      ) : (
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
        >
          <MapComponent location={location} />
        </LoadScript>
      )}
    </>
  );
};

export default MapContainer;
