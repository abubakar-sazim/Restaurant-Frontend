import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const MapComponent = ({ location }) => {
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (location && location.lat && location.lng) {
      setMapCenter({ lat: location.lat, lng: location.lng });
    }
  }, [location]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDVVElh61AtQymBBzyx8S-U42gvIGBrYIU">
      <GoogleMap
        center={mapCenter}
        zoom={10}
        mapContainerStyle={{ width: '100%', height: '400px' }}
      >
        <Marker position={mapCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
