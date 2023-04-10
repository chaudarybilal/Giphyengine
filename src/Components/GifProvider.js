import { createContext, useState } from "react";

export const GifContext = createContext({
  setFavt: () => console.log("provider is  missing"),
  favt: [],
});

export const GifProvider = ({ children }) => {
  const [favt, setFavt] = useState([]);

  return (
    <GifContext.Provider
      value={{
        favt,
        setFavt,
      }}
    >
      {children}
    </GifContext.Provider>
  );
};
