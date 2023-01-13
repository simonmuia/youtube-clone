// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import {Search} from "@mui/icons-material";

const SearchBar = () => (
  // Search Bar Component
  <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
      borderRadius: 20,
      border: "1px solid #e3e3e3",
      pl: 2,
      boxShadow: "none",
      mr: { sm: 5 },
    }}
  >
    {/* Input sub-section */}
    <input
    className="search-bar"
    placeholder="Search"
    value=""
    onChange={()=>{}}
    />
    {/* Icon Submit Button */}
    <IconButton type="submit" sx={{p:'10px', color:'red'}}>
        <Search/>
    </IconButton>
  </Paper>
);

export default SearchBar;
