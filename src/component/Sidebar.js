import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { CgHome } from "react-icons/cg";
import { CgMenuBoxed } from "react-icons/cg";

import { TbTruckDelivery } from "react-icons/tb";
import { BsBagCheck } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { TbBuildingStore } from "react-icons/tb";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { HiPaintBrush } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";
import { MdInsights } from "react-icons/md";
import ordrioIcon from "../Icons/ordio_logo.jpg";
import { Box } from "@mui/system";

const Sidebar = () => {
  const [selected, setSelected] = useState("Dashboard");
  const sidebarContent = [
    {
      name: "Dashboard",
      icon: <CgHome />,
    },
    {
      name: "Orders",
      icon: <CgMenuBoxed />,
    },
    {
      name: "Products",
      icon: <BsBagCheck />,
    },
    {
      name: "Customer",
      icon: <IoPersonOutline />,
    },
    {
      name: "Market Place",
      icon: <TbBuildingStore />,
    },
    {
      name: "Design",
      icon: <HiPaintBrush />,
    },

    {
      name: "Promotion",
      icon: <IoPersonOutline />,
    },
    {
      name: "Notification",
      icon: <IoChatboxEllipsesOutline />,
    },
    {
      name: "Dispatcher",
      icon: <TbTruckDelivery />,
    },
    {
      name: "Insights",
      icon: <MdInsights />,
    },
    {
      name: "Settings",
      icon: <FiSettings />,
    },
  ];

  console.log(selected);
  return (
    <>
      <Box
        sx={{
          flexDirection: "column",

          height: "100%",
          width: "100%",
        }}
      >
        {" "}
        <Stack
          sx={{
            alignItems: "center",
            height: "100%",
            width: "80%",
            ml: "30px",
          }}
        >
          {" "}
          <img
            className="ordrio_icon"
            style={{ width: "130px", height: "40px", margin: "25px 0px " }}
            src={ordrioIcon}
            alt=""
          />
          {sidebarContent.map((i) => {
            return (
              <Stack
                key={`${i.name}`}
                onClick={() => setSelected(i.name)}
                sx={{
                  justifyContent: "center",
                  m: "7px 0px",
                  bgcolor: `${
                    selected === i.name ? "rgb(223, 239, 252,0.8)" : ""
                  }`,
                  width: "100%",
                  borderRadius: "7px",

                  pl: "12px",
                  pt: "7px",
                  pr: "2px",
                }}
              >
                {" "}
                <Typography
                  sx={{
                    textAlign: "start",
                    display: "flex",
                    flexDirection: "row",
                    fontWeight: 500,
                    fontFamily: "Poppins",
                  }}
                >
                  <Typography
                    sx={{
                      mr: { lg: "10px", fontSize: "20px" },
                      p: "0px 5px",
                      width: "30px",
                    }}
                  >
                    {" "}
                    {i.icon}
                  </Typography>
                  {"  "}

                  {i.name}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Box>
    </>
  );
};

export default Sidebar;
