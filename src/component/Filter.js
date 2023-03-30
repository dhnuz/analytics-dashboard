import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useGlobalData } from "../context/context";
import Select from "./Select";

const Filter = () => {
  const { selected, handleSelected } = useGlobalData();
  const Timeline = ["Day", "Week", "Month", "Year", "2022-11-21"];

  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px",
      }}
    >
      <Select />
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          Width: "700px",
        }}
      >
        {Timeline.map((intervals, index) => {
          return (
            <Typography
              key={`${index}0.276786`}
              sx={{
                fontSize: { lg: "13px", sm: "12px", xs: "8px" },
                fontWeight: 600,
                bgcolor: `${selected === index ? "#FFC000" : ""}`,
                border: "1px solid rgba(172, 169, 169, 0.3)",
                p: { lg: "5px 25px", sm: "4px 20px", xs: "3px 10px" },
                m: { lg: "0 10px", sm: "0 8px", xs: "0 2px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "12px",
              }}
              onClick={() => handleSelected(index)}
            >
              {intervals}
            </Typography>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Filter;
