import { Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useGlobalData } from "../context/context";
import { Stack } from "@mui/system";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineAndroid } from "react-icons/ai";
import { TfiApple } from "react-icons/tfi";
import { BsGlobe2 } from "react-icons/bs";
const Customerdevice = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "rgba(223, 223, 223, 0.3)",
    ...theme.typography.body2,

    textAlign: "center",
    height: "160px",
    borderRadius: "8px",
    color: theme.palette.text.secondary,
  }));

  const { selected, customer } = useGlobalData();

  const totalCus = ["281", "783", "8,223", "52,260", "86,095"];
  return (
    <>
      <Typography
        sx={{
          textAlign: "start",
          fontWeight: 700,
          color: "black",
          margin: { lg: "10px 20px", sm: "7px 14px", xs: "5px 10px" },
        }}
      >
        Customer / Device
      </Typography>
      <Stack
        sx={{
          margin: { lg: "10px 20px", sm: "7px 14px", xs: "5px 10px" },
        }}
      >
        <Grid
          sx={{
            flexDirection: { lg: "row", sm: "row", xs: "column" },
            justifyContent: {
              lg: "space-between",
              sm: "space-between",
              xs: "center",
            },
            alignItems: {
              lg: "space-between",
              sm: "space-between",
            },
          }}
          container
          rowSpacing={2}
          columnSpacing={{ xs: 3, sm: 2, md: 3 }}
        >
          <Grid item lg={8} sm={8} xs={12}>
            <Item>
              {" "}
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {" "}
                <Typography
                  sx={{
                    textAlign: "start",
                    fontWeight: 700,
                    color: "black",
                    marginTop: "5px",
                    ml: { lg: "10px", sm: "6px", xs: "5px" },
                    fontSize: "13px",
                  }}
                >
                  New Signup
                </Typography>
                <Typography
                  sx={{
                    fontSize: "10px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    opacity: "0.5",
                    color: "black",
                    margin: "10px",
                  }}
                >
                  See All <BsArrowRight />
                </Typography>
              </Stack>{" "}
              <Box sx={{ margin: "10px" }}>
                {" "}
                {customer.map((i) => {
                  return (
                    <Stack
                      sx={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        color: "#000",
                      }}
                      key={i.id}
                    >
                      <Typography
                        sx={{
                          fontWeight: 550,
                          fontSize: { lg: "12px", sm: "11px", xs: "10px" },
                          margin: "2px",
                        }}
                      >
                        {i.cusName}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 550,
                          fontSize: { lg: "12px", sm: "11px", xs: "10px" },
                          margin: "2px",
                        }}
                      >
                        {i.cusDevice}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 550,
                          fontSize: { lg: "12px", sm: "11px", xs: "10px" },
                          margin: "2px",
                        }}
                      >
                        {i.cusInfo}
                      </Typography>
                    </Stack>
                  );
                })}
              </Box>
            </Item>
          </Grid>
          <Grid
            item
            lg={4}
            sm={4}
            xs={12}
            sx={{
              hieght: "200px",

              alignItems: { xs: "center" },
            }}
          >
            <Item sx={{ hieght: "100%" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  color: "black",
                  paddingTop: "5px",
                  fontSize: "15px",
                }}
              >
                Total Customers
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  color: "black",
                  paddingTop: "25px",
                  fontSize: "40px",
                }}
              >
                {totalCus[selected]}
              </Typography>
            </Item>
          </Grid>
        </Grid>

        <Stack
          sx={{
            margin: "20px 20px",

            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: { lg: "25px", sm: "20px", xs: "15px" },

            textAlign: "start",
            color: "rgba(4, 4, 4)",
          }}
        >
          <Stack sx={{ flexDirection: "row" }}>
            <div className="device_circle ">
              {" "}
              <AiOutlineAndroid />
            </div>
            <Stack sx={{ ml: { lg: "10px", sm: "8px", xs: "2px" } }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "black",
                  fontSize: { lg: "13px", sm: "12px", xs: "9px" },
                }}
              >
                Android
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "black",
                  fontSize: { lg: "20px", sm: "17px", xs: "15px" },
                }}
              >
                150
              </Typography>
            </Stack>
          </Stack>
          <Stack sx={{ flexDirection: "row" }}>
            <div className="device_circle ">
              {" "}
              <TfiApple />
            </div>{" "}
            <Stack sx={{ ml: { lg: "10px", sm: "8px", xs: "5px" } }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "black",
                  ml: { lg: "1px", sm: "1px", xs: "1px" },
                  fontSize: { lg: "13px", sm: "12px", xs: "9px" },
                }}
              >
                iOS
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "black",
                  fontSize: { lg: "20px", sm: "17px", xs: "15px" },
                }}
              >
                123
              </Typography>
            </Stack>
          </Stack>
          <Stack sx={{ flexDirection: "row" }}>
            <div className="device_circle ">
              {" "}
              <BsGlobe2 />
            </div>
            <Stack sx={{ ml: { lg: "10px", sm: "8px", xs: "5px" } }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "black",
                  fontSize: { lg: "13px", sm: "12px", xs: "9px" },
                }}
              >
                Others
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "black",
                  fontSize: { lg: "20px", sm: "17px", xs: "15px" },
                }}
              >
                18
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Customerdevice;
