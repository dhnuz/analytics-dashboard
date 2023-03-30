import React from "react";
import { Line } from "react-chartjs-2";

import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useGlobalData } from "../context/context";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.register(ArcElement, Tooltip, Legend);

const LineChart = () => {
  const { linedata, loading } = useGlobalData();

  const options = {
    type: "line",
    options: {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          callbacks: {
            title: function (context) {
              return "";
            },
            beforeBody: function (context) {
              return "Income";
            },
            label: function (context) {
              return "";
            },
            footer: function (context) {
              return "₹1255.30+";
            },
          },
          displayColors: false,
          displayLabels: false,
        },
      },
      scales: {
        x: {
          beginAtZero: true,

          grid: {
            display: false,
            tickColor: "red",
            drawBorder: false,
            borderColor: "green",
            borderWidth: 10,
          },
        },
        y: {
          beginAtZero: true,

          ticks: {
            callback: function (value, index, values) {
              if (value !== 0) {
                return value + "K";
              } else {
                return value;
              }
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
      },
    },
  };
  return (
    <>
      {" "}
      {!loading ? (
        <Line
          style={{
            minWidth: "95%",
            maxHeight: "90%",
            marginTop: "10px",
            marginLeft: "10px",
          }}
          data={linedata}
          options={options.options}
        ></Line>
      ) : (
        ""
      )}
    </>
  );
};

export default LineChart;
