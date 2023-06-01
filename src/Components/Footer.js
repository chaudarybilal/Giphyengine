import React from "react";
import { Instagram } from "@material-ui/icons";
import { Twitter } from "@material-ui/icons";
import { GitHub } from "@material-ui/icons";
import { YouTube } from "@material-ui/icons";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <div>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white",padding:"10px"}}
      >
        <Box
          sx={{
            
            "& svg": {
                
              fontSize: "30px", padding:"3px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <Instagram />
          <Twitter />
          <GitHub />
          <YouTube />
        </Box>
        <Typography
          variant="65"
          sx={{fontSize:"20px"}}
          style={{
            "@media (max-width:600px)": {
              fontSize: "1.5rem",
            },
          }}
        >
          All Rights Reserved &copy; Bilal
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;