// src/context/SessionProvider.js
import { createContext, useState } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        return null; // Autenticación exitosa, sin error
      } else {
        throw new Error("Nombre o contraseña incorrectos");
      }
    } catch (error) {
      return error.message; // Retorna el mensaje de error
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null); // Limpiar el estado de usuario
  };

  return (
    <SessionContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </SessionContext.Provider>
  );
};
