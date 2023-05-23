import { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { GifContext } from "./GifProvider";
import { Row, Col, Card } from "react-bootstrap";

const Favourite = () => {
  // data get from context
  const { favt, setFavt } = useContext(GifContext);



  // delete selected gif
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
    
    
      <h1  style={{display:"flex", justifyContent:"center"}}>Favourite</h1>
      <Row>
      {/* map favourite gif  */}
        {favt.map((gif, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <Card style={{ width: '15rem' }}>
              <Card.Img
                width="100%"
                height="auto"
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
