import React from "react";
import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { BellOutlined } from "@ant-design/icons";
import { Badge, Space } from "antd";

const Navbar = () => {
  const Search = styled("div")(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    color: "#000",
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: "12px",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#000",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),

      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",

    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  return (
    <nav>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: "60px",
          mt: "10px",
          ml: { lg: "50px", sm: "30px" },
          mr: { lg: "50px", sm: "30px" },
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: "30px", sm: "25px", xs: "20px" },
            fontFamily: "Poppins",
            fontWeight: 600,
          }}
        >
          Dashboard
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <Search
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              bgcolor: "#eff8ff",
              color: "#000",
            }}
          >
            {" "}
            <StyledInputBase
              placeholder="Type here to search"
              inputProps={{ "aria-label": "search" }}
              sx={{ color: "#000" }}
            />{" "}
            <SearchIconWrapper>
              <SearchIcon />{" "}
            </SearchIconWrapper>{" "}
          </Search>
          <Space className="notify">
            <Badge dot>
              <BellOutlined style={{ fontSize: 25 }} />
            </Badge>
          </Space>{" "}
          <Space sx={{ display: { sm: "none" } }}>
            <img
              className="top_icon"
              style={{ height: "25px", width: "25px", marginLeft: "30px" }}
              src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/null/external-application-user-interface-basic-anggara-basic-outline-anggara-putra.png"
            />
          </Space>{" "}
          <Space sx={{ display: { xs: "none" } }}>
            <img
              className="top_icon"
              style={{
                height: "30px",
                width: "30px",
                marginLeft: "30px",
                backgroundColor: "#FFC000",
                padding: "7px",
                borderRadius: "5px",
              }}
              src="https://img.icons8.com/ios-glyphs/30/000000/plus-math.png"
            />
          </Space>{" "}
        </Stack>
      </Stack>
    </nav>
  );
};

export default Navbar;
