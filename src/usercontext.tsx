import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  userEmail: string;
  address: string;
  phone: string;
}

interface FlashMessage {
  type: "success" | "error";
  message: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  flashMessage: FlashMessage | null;
  handleLogin: (email: string, password: string) => Promise<boolean>;
  handleLogout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [flashMessage, setFlashMessage] = useState<FlashMessage | null>(null);
  const [user, setUser] = useState<User | null>(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      return null;
    }
  });

  const handleLogin = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await axios.post("", { email, password });
      const { id, firstName, lastName, userEmail, address, phone, token } = response.data.user;
      localStorage.setItem("user", JSON.stringify({ id, firstName, lastName, email, address, phone }));
      localStorage.setItem("token", token);

      setUser({ id, firstName, lastName, userEmail, phone, address });
      setFlashMessage({ type: "success", message: "Login Successful. Welcome Back!" });
      window.location.href = "/dashboard";
      return true;
    } catch (error) {
      console.error("Login Error:", error);
      setFlashMessage({ type: "error", message: error.response?.data?.message || "Login failed. Please try again later." });
      return false;
    }
  };

  const handleLogout = (): void => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/login";
  };

  useEffect(() => {
    if (flashMessage) {
      const timer = setTimeout(() => setFlashMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [flashMessage]);

  return (
    <UserContext.Provider value={{ user, setUser, flashMessage, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
