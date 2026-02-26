import * as React from "react";
import Stack from "@mui/material/Stack";
import { BarChart, BarChartProps } from "@mui/x-charts/BarChart";


export default function PlacementInternshipBarChart() {
  const [layout, setLayout] = React.useState<"horizontal" | "vertical">(
    "vertical"
  );
  const [radius, setRadius] = React.useState(10);
  const [reverse, setReverse] = React.useState(false);

  return (
    <Stack direction="column" spacing={1} sx={{ width: "101%", maxWidth: 600 }}>
      <Stack
        direction="row"
        spacing={4}
        flexWrap="wrap"
        justifyContent="center"
      >
        
      </Stack>
      <BarChart
        series={[
          {
            dataKey: "high",
            label: "Placement (LPA)",
          },
          {
            dataKey: "low",
            label: "Internship (₹K)",
          },
        ]}
        margin={{ left: 0 }}
        {...getChartSettings(layout, reverse)}
        borderRadius={radius}
      />
      
    
    </Stack>
  );
}

// Real TPC dataset
// high = Placement package (LPA)
// low  = Internship stipend (₹K - thousands)
const dataset = [
  { order: "Highest", high: 6, low: 15 },
  { order: "Average", high: 4.5, low: 8.45 },
  { order: "Median", high: 4.2, low: 9 },
];

function getChartSettings(
  layout: "vertical" | "horizontal",
  reverse: boolean
): Partial<BarChartProps> {
  return {
    dataset,
    height: 300,
    xAxis: layout === "horizontal" ? [{ reverse }] : [{ dataKey: "order" }],
    yAxis:
      layout === "horizontal"
        ? [{ scaleType: "band", dataKey: "order" }]
        : [{ reverse }],
    slotProps: {
      legend: {
        direction: "horizontal",
        position: { vertical: "bottom", horizontal: "center" },
      },
    },
  };
}
