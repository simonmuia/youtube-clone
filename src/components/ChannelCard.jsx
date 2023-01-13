import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => {
  return (
    // Define Component
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:{xs:'356px', md:'320px'},
        height:'326px',
        margin:'auto',
      }}
    >
      {/* Define Channel Card link */}
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {/* Channel Logo */}
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          {/* Channel Title */}
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle
              sx={{
                fontSize: 14,
                color: "green",
                ml: "5px",
              }}
            />
          </Typography>
          {/* Check if channel subscribers are upto required number to be verified */}
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {
                parseInt(channelDetail?.statistics?.subscriberCount)
                  .toLocaleString
              }{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
