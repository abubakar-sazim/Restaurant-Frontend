import { SlLocationPin } from "react-icons/sl";
import MapContainer from "../Map/Map";
import React from "react";

interface locationPageProps {
  fullAddress: string;
}

const LocationSection: React.FC<locationPageProps> = ({ fullAddress }) => {
  return (
    <>
      <div className="p-2 flex items-center">
        <div className="relative flex items-center">
          <div className=" h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center">
            <SlLocationPin className="text-white" />
          </div>
          <h1 className="ml-2 text-center font-bold text-lg">Location</h1>
        </div>
      </div>
      <div className="p-2 flex items-center justify-center">
        <MapContainer location={fullAddress} />
      </div>
    </>
  );
};

export default LocationSection;
