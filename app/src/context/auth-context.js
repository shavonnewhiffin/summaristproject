"use client";

import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { getPremiumStatus } from "../../components/chooseplan/GetPremiumStatus";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          const premium = await getPremiumStatus();
          setIsPremium(premium);
        } catch (error) {
          console.error("Error checking premium status:", error);
          setIsPremium(false);
        }
      } else {
        setIsPremium(false);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isAuthModalOpen, setIsAuthModalOpen, isPremium, setIsPremium }}>
      {children}
    </AuthContext.Provider>
  );
}