import { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import "./Favourite.css";
import { GifContext } from "./GifProvider";
import { Row, Col, Card } from "react-bootstrap";

const Favourite = () => {
  const { favt, setFavt } = useContext(GifContext);
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
      <h1>favourite</h1>

      <Row>
        {favt.map((gif, index) => (
          <Col key={index} id={index} sm={4} md={4} lg={3}>
            <Card style={{ width: "15rem" }}>
              <Card.Img
                width="100px"
                height="100px"
                variant="top"
                src={gif.images.preview_gif.url}
              />
              <Card.Body>
                <Card.Title>{gif.title}</Card.Title>
                <Card.Text>{gif.overview}</Card.Text>
                <FaRegTrashAlt
                  className="delete"
                  onClick={() => deleteitem(gif)}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Favourite;
