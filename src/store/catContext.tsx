import React, { createContext, useState } from "react";

interface BreedContextType {
  selectedBreed: string | null;
  setSelectedBreed: React.Dispatch<React.SetStateAction<string | null>>;
}

export const BreedContext = createContext<BreedContextType>({
  selectedBreed: null,
  setSelectedBreed: () => {},
});
interface BreedProviderProps {
  children: React.ReactNode;
}
export const BreedProvider: React.FC<BreedProviderProps> = ({ children }) => {
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

  return (
    <BreedContext.Provider value={{ selectedBreed, setSelectedBreed }}>
      {children}
    </BreedContext.Provider>
  );
};
