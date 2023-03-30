import React from "react";
import { Box } from "@mui/system";
import Navbar from "./Navbar";
import Analytics from "./Analytics";


const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <hr />

      <Box
        sx={{ ml: { lg: "50px", sm: "30px" }, mr: { lg: "50px", sm: "30px" } }}
      >
        <Analytics />
      </Box>
    </div>
  );
};

export default Dashboard;
