import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../enviroment/Enviroment";

const AuthGuard = ({ element }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const response = await axios.post(
          `${BaseUrl}/api/authguard`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );
        if (response.data.code === 200) {
          console.log("Authorized");
          setIsAuthorized(true);
        }
      } catch (error) {
        console.error("Authorization error:", error);
        setIsAuthorized(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthorization();
  }, [token]);


  useEffect(() => {
    console.log("isAuthorized:", isAuthorized);
  }, [isAuthorized]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? element : <Navigate to="/login" />;
};

export default AuthGuard;
