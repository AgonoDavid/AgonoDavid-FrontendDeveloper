import React from "react";
import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const API_URL = "https://api.spacexdata.com/v3/capsules";

const SpaceContext = createContext([]);

export function SpaceProvider({ children }) {
  const [rocketDetails, setRocketDetails] = useState([]);

  const fetchRocketDetails = async () => {
    try {
      const result = await axios.get(API_URL);
      setRocketDetails(result.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchRocketDetails();
  }, []);

  return (
    <SpaceContext.Provider value={rocketDetails}>
      {children}
    </SpaceContext.Provider>
  );
}
