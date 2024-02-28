import {
  FaCheck,
  FaTimes,
  FaVolumeUp,
  FaVolumeDown,
  FaVolumeMute,
} from "react-icons/fa";

export const getNoiseLevelIcon = (level: string) => {
  switch (level) {
    case "loud":
      return <FaVolumeUp />;
    case "average":
      return <FaVolumeDown />;
    case "verage":
      return <FaVolumeDown />;
    case "quiet":
      return <FaVolumeMute />;
    default:
      return null;
  }
};

export const getBooleanIcon = (value: boolean) => {
  return value ? <FaCheck /> : <FaTimes />;
};

export const getWifiBooleanIcon = (value: string) => {
  return value === "free" ? <FaCheck /> : <FaTimes />;
};
