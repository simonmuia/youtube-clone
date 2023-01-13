import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { format } from "date-fns/esm";
import { SideBar } from "./index";

const Feed = () => {
  const year = format(new Date(),'yyyy');
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar/>
        <Typography 
        className="copyright"
        variant="body2"
        sx={{
          color:'#fff'
        }}
        
        >
          Copyright &copy; {year} Simon Muia&trade;
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
