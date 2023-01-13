import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { format } from "date-fns/esm";
import { SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {

  // Define current year
  const year = format(new Date(), "yyyy");

  // Define State of the clicked button
  const [selectedCategory, setSelectedCategory] = useState("New");
   //add the data to state of videos
   const [videos, setVideos] = useState([]);

  // add the identity of clicked button to the API filter url
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{ //Get the data fetched
      setVideos(data.items) //load data to setVideos state
    })
  }, [selectedCategory]);

  return (

    // Feed Section
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        {/* Category Menu */}
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Bottom Copyright Text */}
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            color: "#fff",
          }}
        >
          Copyright &copy; {year} Simon Muia&trade;
        </Typography>
      </Box>
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
          {selectedCategory}
          <span
            style={{
              color: "#F31503",
            }}
          >
            Videos
          </span>
        </Typography>

        {/* Video list component */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
