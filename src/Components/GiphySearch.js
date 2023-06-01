import { useState, useEffect, useContext } from "react";
import "./GiphySearch.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { GifContext } from "./GifProvider";
import { Row, Col, Card } from "react-bootstrap";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { CircularProgress } from "@material-ui/core";

const GiphySearch = () => {
  const { favt, setFavt } = useContext(GifContext);
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(100);

  const lmt = 10;
  const apikey = "G67CqXGOL4aPuxBdHv4P1d7PGXc4RTNy";
  const search_url =
    "https://api.giphy.com/v1/gifs/search?q=" +
    search +
    "&key=" +
    apikey +
    "&limit=" +
    lmt +
    "&offset=" +
    offset;

  const onClickHandler = () => {
    if (search.length > 0) {
      setLoading(true);

      fetch(search_url)
        .then((response) => {
          setLoading(false);
          return response.json();
        })
        .then((res) => {
          setGifs([...gifs, ...res.data]);
        })
        .catch((e) => {
          console.log("error", e);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    onClickHandler();
  }, [offset]);

  const addToFavt = (obj) => {
    if (!favt.some((item) => item.id === obj.id)) {
      setFavt([...favt, obj]);
    }
  };

  const removeFromFavt = (obj) => {
    const updatedFavt = favt.filter((item) => item.id !== obj.id);
    setFavt(updatedFavt);
  };

  const isGifSaved = (gif) => {
    return favt.some((item) => item.id === gif.id);
  };

  return (
    <div style={{ minHeight: "77.2vh" }}>
      <div>
        {loading ? (
          <div style={{ marginLeft: "650px", marginTop: "150px" }}>
            <CircularProgress />
          </div>
        ) : (
          <div>
            <div className="sec1">
              <div className="search-sec">
                <div>
                  <Form id="form">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      style={{
                        borderRadius: "8px",
                        border: "1px solid black",
                        padding: "7px",
                        textAlign: "center",
                      }}
                      aria-label="Search"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </Form>
                </div>
                <div className="sec2">
                  <Button
                    variant="success"
                    style={{
                      padding: "7px",
                      backgroundColor: "black",
                      width: "150px",
                    }}
                    onClick={onClickHandler}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
            <div>
              {/* {card} */}
              <Row className="rowc">
                {gifs.map((gif, index) => (
                  <Col key={index} id={index} sm={5} md={5} lg={2}>
                    <Card className="main-card">
                      <Card.Img
                        className="card-img"
                        src={gif.images.preview_gif.url}
                      />
                      <Card.Body>
                        <Card.Title className="card-title">
                          {gif.title}
                        </Card.Title>
                        {!isGifSaved(gif) ? (
                          <FavoriteBorderIcon
                            className="add-to-fav-icon "
                            onClick={() => addToFavt(gif)}
                          />
                        ) : (
                          <FavoriteIcon
                            className="add-to-fav-icon"
                            onClick={() => removeFromFavt(gif)}
                          />
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiphySearch;
