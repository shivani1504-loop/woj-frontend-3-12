import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    admin: null,
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    const adminData = localStorage.getItem("admin");
    console.log(data);
    if (data) {
      const parseData = JSON.parse(data);
      setAuth((prevAuth) => ({
        ...prevAuth,
        user: parseData,
      }));
    }

    if (adminData) {
      setAuth((prevAuth) => ({
        ...prevAuth,
        admin: adminData,
      }));
    }
  }, []);

  console.log(auth);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hooks

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
