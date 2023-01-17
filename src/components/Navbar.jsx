import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from './SearchBar';

const Navbar = () => (
    // Navbar Section Component
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      justifyContent: "space-between",
    }}
  >
    {/* Image sub-section */}
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={42} />
    </Link>
    <SearchBar/>
  </Stack>
);

export default Navbar;
