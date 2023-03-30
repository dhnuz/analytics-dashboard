import React from "react";
import { DownOutlined } from "@ant-design/icons";

import { Dropdown, Space } from "antd";
import { Typography } from "@mui/material";

const items = [
  {
    key: "1fsdffff",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://ordrio.com/">
        Udupi
      </a>
    ),
  },
  {
    key: "2rttrtrg",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://ordrio.com/">
        Mangalore
      </a>
    ),
  },

  {
    key: "4fskjkfsh",
    danger: true,
    label: "All Branch",
  },
];

const Select = () => (
  <Dropdown menu={{ items }} style={{ display: "flex" }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space sx={{ color: "#000" }}>
        <Typography
          sx={{
            fontSize: { lg: "20px", sm: "15px", xs: "10px" },
            ml: { lg: "10px", xs: "0px" },

            fontWeight: "600",
            opacity: 1.2,
            fontFamily: "Poppins",
          }}
        >
          {" "}
          All Branch
        </Typography>
        <DownOutlined
          style={{
            padding: 0,
            fontSize: "10px",
            marginLeft: "-7px",
            opacity: 1.8,
            fontWeight: "600",
          }}
        />
      </Space>
    </a>
  </Dropdown>
);

export default Select;
