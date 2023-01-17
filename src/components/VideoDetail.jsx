import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
// import { CheckCircle } from "@mui/icons-material";
// import { Video } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { CheckCircle, ThumbUp } from "@mui/icons-material";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    // Fetch all videos related to opened video
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);
  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    // Define Video Details component
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        {/* Player Component */}
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: "#fff",
              }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{
                      fontSize: "14px",
                      color: "green",
                      ml: "5px",
                    }}
                  />
                </Typography>
              </Link>
              <Stack>
                {/* Views count text */}
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.7,
                  }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                {/* Like Count */}
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.7,
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "center",
                  }}
                >
                  {parseInt(likeCount).toLocaleString()}{" "}
                  <ThumbUp sx={{ color: "#fff", pl: "10px" }} />
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
      {/* <Box px={2} py={{md:1, xs:5}} justifyContent="center" alignItems="center">
              <videos videos={videos}/>
      </Box> */}
    </Box>
  );
};

export default VideoDetail;
