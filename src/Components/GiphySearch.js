import { FaCheckSquare } from "react-icons/fa";
import { useState, useEffect, createContext } from "react";
import "./GiphySearch.css";

const MyContext = createContext();
const GiphySearch = () => {
  const getLocalItem = () => {
    let list = localStorage.getItem("lists");
    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };
  const [search, setSearch] = useState("");

  const [gifs, setGifs] = useState(getLocalItem());

  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(100);

  const lmt = 10;
  const apikey = "G67CqXGOL4aPuxBdHv4P1d7PGXc4RTNy";
  var search_url =
    "https://api.giphy.com/v1/gifs/search?q=" +
    search +
    "&key=" +
    apikey +
    "&limit=" +
    lmt +
    "&offset=" +
    offset;

  const onClickhandler = () => {
    console.log("search_url", search_url);

    if (search.length > 0) {
      setLoading(true);

      fetch(search_url)
        .then((response) => {
          setLoading(false);
          return response.json();
        })

        .then((res) => {
          console.log("res", res);

          setGifs([...gifs, ...res.data]);
        })
        .catch((e) => {
          console.log("error", e);
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    onClickhandler();
  }, [offset]);
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(gifs));
  }, [gifs]);
  console.log("gifsdata", gifs);

  const addToFavt = (obj) => {
    setGifs([...gifs, obj]);
  };
  const removeDataFromStorage = () => {
    try {
      localStorage.removeItem("lists");
      gifs([]);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <>
      <MyContext.Provider value={{ gifs, setGifs }}>
        <div>
          <input
            type="text"
            placeholder="Search hare"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />

          <button onClick={onClickhandler}>Click Me</button>

          <button onClick={() => removeDataFromStorage()}>Delete</button>

          <div className="container">
            {gifs.map((gif, index) => {
              return (
                <div key={index} id={index} className="gif-item">
                  <img
                    width="100px"
                    height="100px"
                    src={gif.images.fixed_height.url}
                    alt={gif.title}
                  />
                  <FaCheckSquare
                    onClick={() => addToFavt(gif)}
                    className="add-to-fav-icon"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </MyContext.Provider>
    </>
  );
};

export default GiphySearch;
export { MyContext };
