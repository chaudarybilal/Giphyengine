import { FaRegTrashAlt } from "react-icons/fa";
import "./Favourite.css";

const Favourite = ({ favtdata, setfavt }) => {
  const deleteitem = (gif) => {
    setfavt(() => {
      console.log("cliked");
      console.log(gif, "id");
      return favtdata.filter((id) => {
        return gif !== id;
      });
    });
  };
  return (
    <>
      <h1>favourite</h1>
      <div className="container">
        {favtdata.map((gif, index) => {
          return (
            <div key={index} gif={index}>
              <img
                width="100px"
                height="100px"
                src={gif.images.downsized?.url}
                alt={gif.title}
              />
              <FaRegTrashAlt
                className="delete"
                onClick={() => deleteitem(gif)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Favourite;
