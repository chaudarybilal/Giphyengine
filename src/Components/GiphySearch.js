import { FaCheckSquare } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import "./GiphySearch.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { GifContext } from "./GifProvider";
import { Row, Col, Card } from "react-bootstrap";

const GiphySeacrh = () => {
  const { favt, setFavt } = useContext(GifContext);
  console.log(favt, setFavt);
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
    setFavt([...favt, obj]);
  };
  const removeDataFromStorage = () => {
    try {
      localStorage.removeItem("lists");
      setFavt([]);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <>
      <div>
        <div className="container">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="success" onClick={onClickhandler}>
              Search
            </Button>
            <Button variant="danger" onClick={() => removeDataFromStorage()}>
              Remove
            </Button>
          </Form>
        </div>

        <div className="container">
          <Row
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {gifs.map((gif, index) => (
              <Col key={index} id={index} sm={5} md={5} lg={3}>
                <Card style={{ width: "15rem" }}>
                  <Card.Img
                    // width="100px"
                    // height="100px"
                    src={gif.images.preview_gif.url}
                  />
                  <Card.Body>
                    <Card.Title>{gif.title}</Card.Title>

                    <FaCheckSquare
                      onClick={() => addToFavt(gif)}
                      className="add-to-fav-icon"
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default GiphySeacrh;
