import { createContext, useState,useEffect } from "react";

export const GifContext = createContext({
  setFavt: () => console.log("provider is  missing"),
  favt: [],
});

export const GifProvider = ({ children }) => {
 
  const getLocalItem = () => {
    let list = localStorage.getItem("lists");
    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };
  const [favt, setFavt] = useState(getLocalItem());
  
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(favt));
  }, [favt]);

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
