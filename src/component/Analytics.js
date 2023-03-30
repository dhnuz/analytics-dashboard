import React from "react";
import Filter from "./Filter";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Menuimg from "../Icons/icons8-menu-squared-50.png";
import Arrowimg from "../Icons/icons8-right-arrow-60.png";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import { Image } from "@mui/icons-material";
import Linechart from "./Linechart";
import Recentorders from "./Recentorders";
import Customerdevice from "./Customerdevice";
import { useGlobalData } from "../context/context";

const Analytics = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    height: "300px",
    borderRadius: "8px",
    color: theme.palette.text.secondary,
  }));

  const { selected } = useGlobalData();

  const income = ["1255", "10,000+", "99,000+", "1M+", "8M+"];

  return (
    <>
      <Filter />
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid item lg={6} sm={4} xs={11}>
          <Item
            sx={{
              bgcolor: "#000",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Stack
              sx={{
                padding: "10px",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Stack
                sx={{
                  flexDirection: "row",

                  alignItems: "center",
                }}
              >
                <img
                  style={{ color: "#fff", height: "35px", width: "35px" }}
                  src={`${Menuimg}`}
                />{" "}
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: 500,
                    ml: "7px",
                    fontFamily: "Raleway",
                  }}
                >
                  {" "}
                  Orders
                </Typography>
              </Stack>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "40px",
                  fontWeight: 800,
                  textAlign: "start",
                }}
              >
                {income[selected]}
              </Typography>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Raleway",
                    fontSize: "18px",
                  }}
                >
                  Total Orders
                </Typography>
                <img
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    height: "38px",
                    width: "50px",
                  }}
                  src={`${Arrowimg}`}
                  alt=""
                />
              </Stack>
            </Stack>
          </Item>
        </Grid>
        <Grid item lg={6} sm={8} xs={11}>
          <Item
            sx={{
              display: "flex",
              justifyContent: "center",
              // alignItems: "center",
              bgcolor: "rgba(223, 223, 223, 0.3)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                textAlign: "start",
                fontWeight: 700,
                color: "black",
                marginLeft: "10px",
                float: "left",
              }}
            >
              Sales / Income
            </Typography>
            <Linechart />
          </Item>
        </Grid>
        <Grid item lg={6} sm={11} xs={11}>
          <Item>
            <Recentorders />
          </Item>
        </Grid>
        <Grid item lg={6} sm={11} xs={11}>
          <Item
            sx={{
              height: { xs: "450px", lg: "300px", sm: "280px" },
            }}
          >
            <Customerdevice />
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Analytics;
