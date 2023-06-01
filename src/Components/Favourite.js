import { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { GifContext } from "./GifProvider";
import { Row, Col, Card } from "react-bootstrap";
import { Box } from "@material-ui/core";

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
    
    <Box component="div" style={{minHeight: "80vh"}} >
      <h1 style={{display:"flex", justifyContent:"center" }}>Favorite Giphy Images</h1>
      <Row style={{ width:"80%" ,marginLeft:"40px"}}>
      {/* map favourite gif  */}
        {favt.map((gif, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <Card className="main-card">
              <Card.Img  className="card-img"
               
                src={gif.images.preview_gif.url}
              />
              <Card.Body>
                <Card.Title className="card-title">{gif.title}</Card.Title>
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
      </Box>
    </>
  );
};


export default Favourite;
