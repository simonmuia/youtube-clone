import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  //add the data to state of videos
  const [videos, setVideos] = useState([]);

  const {searchTerm} = useParams();

  // add the identity of clicked button to the API filter url
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      //Get the data fetched
      setVideos(data.items); //load data to setVideos state
    });
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      {/* Video list sub-section header */}
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search results for:
        <span
          style={{
            color: "#F31503",
            padding:'0 10px',
          }}
        >
         {searchTerm}
        </span> videos
      </Typography>

      {/* Video list component */}
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
