import { FaRegTrashAlt } from "react-icons/fa";
import "./Favourite.css";
import { appContext } from "../App";
import { useContext } from "react";

const Favourite = () => {
  const { favt, setFavt } = useContext(appContext);
  const deleteitem = (gif) => {
    setFavt(() => {
      console.log("cliked");
      console.log(gif, "id");
      return favt.filter((id) => {
        return gif !== id;
      });
    });
  };
  return (
    <>
      <h1>Express yourself with the perfect GIF, every time</h1>

      {favt.map((gif, index) => {
        return (
          <div key={index} gif={index}>
            <img src={gif.images.downsized?.url} alt={gif.title} />
            <FaRegTrashAlt onClick={() => deleteitem(gif)} />
          </div>
        );
      })}
    </>
  );
};

export default Favourite;
