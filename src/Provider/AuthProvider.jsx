import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.log(error));
  }, []);

  const authData = {
    events,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
