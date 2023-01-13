import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";


const SideBar = ({selectedCategory, setSelectedCategory}) => {
  return (
    // Define Sidebar Container
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: {
          sx: "auto",
          md: "95%",
        },
        flexDirection: { md: "column" },
      }}
    >
        {/* List of categories */}
      {categories.map((category) => (
        // Category menu Link component
        <button
          className="category-btn"

          onClick={()=>
            setSelectedCategory(category.name)
          }

          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "white",
          }}

          key={category.name}
        >
            {/* Span Icon */}
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          {/* Span Category Name */}
          <span style={{opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
