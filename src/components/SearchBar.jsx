import React, { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  // Introduce useState to handle searched term
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  // Define function to handle submit event
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      setSearchTerm(''); //Reset search term to empty string
    }
  } 

  return (
    // Search Bar Component
    <Paper
      component="form"
      onSubmit={handleSubmit}
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
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* Icon Submit Button */}
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
