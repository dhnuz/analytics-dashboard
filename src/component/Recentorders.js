import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useGlobalData } from "../context/context";
import { BsArrowRight } from "react-icons/bs";
const Recentorders = () => {
  const { recentorders } = useGlobalData();

  return (
    <>
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
            margin: "10px",
          }}
        >
          Recent Orders
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
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
      </Stack>
      <Stack
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          opacity: "0.5",

          margin: "10px 18px",
        }}
      >
        <Typography
          sx={{
            fontSize: { lg: "15px", sm: "12px", xs: "11px" },
            ml: { lg: "-8px", xs: "-5px" },
          }}
        >
          Order No
        </Typography>
        <Typography
          sx={{
            ml: { lg: "-60px", xs: "-20px" },
            fontSize: { lg: "15px", sm: "12px", xs: "11px" },
          }}
        >
          Customer
        </Typography>
        <Typography sx={{ fontSize: { lg: "15px", sm: "12px", xs: "11px" } }}>
          Status
        </Typography>
        <Typography sx={{ fontSize: { lg: "15px", sm: "12px", xs: "11px" } }}>
          Order value
        </Typography>
      </Stack>
      <hr style={{ opacity: "0.3" }} />
      <Stack>
        <table style={{ width: "100%", margin: "5px 10px", fontWeight: 600 }}>
          <tbody width="100%">
            {recentorders.map((i) => {
              let bg;
              if (i.status === "Recieved") {
                bg = "#10b900";
              } else if (i.status === "Cancelled") {
                bg = "#FF0000";
              } else if (i.status === "Picked") {
                bg = "#eaea2b";
              } else {
                bg = "#FFFFFF";
              }
              return (
                <tr key={i.id}>
                  <td>{i.orderNo}</td>
                  <td>{i.customer}</td>
                  <td>
                    <div
                      style={{
                        display: "inline-block",
                        backgroundColor: bg,
                        borderRadius: "50%",
                        height: "8px",
                        width: "8px",
                        marginRight: "5px",
                      }}
                    ></div>
                    {i.status}
                  </td>
                  <td style={{ float: "right", marginRight: "20px" }}>
                    ₹{i.orderValue}.00
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Stack>
    </>
  );
};

export default Recentorders;
