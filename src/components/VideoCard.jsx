import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    // Define Video Card Component
    <Card sx={{
        width: {md:'320px',xs:'100%'},
        boxShadow: 'none',
        borderRadius:0
    }}>
      {/* Card link wrapper */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {/* Card Image */}
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
            width: '100%',
            height: '180px',
          }}
        />
      </Link>

      {/* Card Content sub-section */}
      <CardContent
        sx={{
          backgroundColor: "#1e1e1e",
          height: "106px",
        }}
      >
        {/* Video Title */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        {/* Channel Title */}
        <Link to= {snippet?.channelId?`/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{
                fontSize:14,
                color:'green',
                ml:'5px'
            }}/>
          </Typography>
        </Link>

      </CardContent>
    </Card>
  );
};

export default VideoCard;
