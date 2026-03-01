import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

interface ChartDatum {
  id: string;
  label: string;
  value: number;
  percentage: number;
  color: string;
}

// -----------------------------
// TPC DATASETS (SLC)
// -----------------------------
// C) Placement Gender Ratio (in %)
const placementGenderRatio: ChartDatum[] = [
  { id: "Male", label: "Male", value: 50, percentage: 50, color: "#3b82f6" },
  {
    id: "Female",
    label: "Female",
    value: 50,
    percentage: 50,
    color: "#ec4899",
  },
];

// D) Internship Gender Ratio (in %)
const internshipGenderRatio: ChartDatum[] = [
  { id: "Male", label: "Male", value: 43, percentage: 43, color: "#3b82f6" },
  {
    id: "Female",
    label: "Female",
    value: 57,
    percentage: 57,
    color: "#ec4899",
  },
];

// E) PROSPECT'25 Registrations by Stream
const prospect25StreamRegistrations: ChartDatum[] = [
  {
    id: "Commerce",
    label: "Commerce",
    value: 300,
    percentage: (300 / 550) * 100,
    color: "#22c55e",
  },
  {
    id: "Arts",
    label: "Arts",
    value: 150,
    percentage: (150 / 550) * 100,
    color: "#a855f7",
  },
  {
    id: "Science",
    label: "Science",
    value: 100,
    percentage: (100 / 550) * 100,
    color: "#06b6d4",
  },
];

// F) COMPITO'24 Registrations by Stream
const compito24StreamRegistrations: ChartDatum[] = [
  {
    id: "Commerce",
    label: "Commerce",
    value: 330,
    percentage: (330 / 580) * 100,
    color: "#22c55e",
  },
  {
    id: "Arts",
    label: "Arts",
    value: 150,
    percentage: (150 / 580) * 100,
    color: "#a855f7",
  },
  {
    id: "Science",
    label: "Science",
    value: 100,
    percentage: (100 / 580) * 100,
    color: "#06b6d4",
  },
];

const totalProspect = 550;
const totalCompito = 580;

const StyledText = styled("text")(({ theme }: { theme: Theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

interface PieCenterLabelProps {
  children: React.ReactNode;
}

function PieCenterLabel({ children }: PieCenterLabelProps): React.ReactElement {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

type ViewType = "placementGender" | "internshipGender" | "prospect" | "compito";

export default function PlacementInternshipPieChart(): React.ReactElement {
  const [view, setView] = React.useState<ViewType>("placementGender");
  const handleViewChange = (
    event: React.MouseEvent<HTMLElement>,
    newView: ViewType | null
  ) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mb: 2,
          px: 1,
          pointerEvents: "auto",
        }}
      >
        <ToggleButtonGroup
          color="primary"
          size="small"
          value={view}
          exclusive
          onChange={handleViewChange}
          sx={{
            width: "100%",
            maxWidth: 520,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            p: 0.75,
            border: " solid rgba(55,50,47,0.12)",
            borderRadius: 2,
            backgroundColor: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            "& .MuiToggleButtonGroup-grouped": {
              m: 0.5,
              border: "1px solid rgba(55,50,47,0.12)",
              borderRadius: 10,
              flex: "1 1 calc(50% - 12px)",
              minWidth: 0,
            },
          }}
        >
          <ToggleButton
            value="placementGender"
            sx={{
              textTransform: "none",
              fontSize: 12,
              py: 1.1,
              lineHeight: 1.2,
              whiteSpace: "nowrap",
            }}
          >
            Placement
          </ToggleButton>
          <ToggleButton
            value="internshipGender"
            sx={{
              textTransform: "none",
              fontSize: 12,
              py: 1.1,
              lineHeight: 1.2,
              whiteSpace: "nowrap",
            }}
          >
            Internship
          </ToggleButton>
            <ToggleButton
            value="prospect"
            sx={{
              textTransform: "none",
              fontSize: 12,
              py: 1.1,
              lineHeight: 1.2,
              whiteSpace: "nowrap",
            }}
            >
              PROSPECT'25
          </ToggleButton>
            <ToggleButton
            value="compito"
            sx={{
              textTransform: "none",
              fontSize: 12,
              py: 1.1,
              lineHeight: 1.2,
              whiteSpace: "nowrap",
            }}
            >
              COMPITO'24
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", height: 360, mt: 1 }}
      >
        {view === "placementGender" && (
          <PieChart
            series={[
              {
                innerRadius: 80,
                outerRadius: 130,
                paddingAngle: 5,
                startAngle: -55,
                endAngle: 315,
                cornerRadius: 10,
                data: placementGenderRatio,

                valueFormatter: ({ value }) => `${value}%`,
                highlightScope: { fade: "global", highlight: "item" },
                highlighted: { additionalRadius: 2 },
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: { fontSize: "12px" },
            }}
            hideLegend
          >
            <PieCenterLabel>Placement</PieCenterLabel>
          </PieChart>
        )}

        {view === "internshipGender" && (
          <PieChart
            series={[
              {
                innerRadius: 80,
                outerRadius: 130,
                paddingAngle: 5,
                startAngle: -55,
                endAngle: 315,
                cornerRadius: 10,
                data: internshipGenderRatio,

                valueFormatter: ({ value }) => `${value}%`,
                highlightScope: { fade: "global", highlight: "item" },
                highlighted: { additionalRadius: 2 },
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: { fontSize: "12px" },
            }}
            hideLegend
          >
            <PieCenterLabel>Internship</PieCenterLabel>
          </PieChart>
        )}

        {view === "prospect" && (
          <PieChart
            series={[
              {
                innerRadius: 80,
                outerRadius: 130,
                paddingAngle: 5,
                startAngle: -55,
                endAngle: 315,
                cornerRadius: 10,
                data: prospect25StreamRegistrations,

                valueFormatter: ({ value }) => `${value} / ${totalProspect}`,
                highlightScope: { fade: "global", highlight: "item" },
                highlighted: { additionalRadius: 2 },
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: { fontSize: "12px" },
            }}
            hideLegend
          >
            <PieCenterLabel>PROSPECT'25</PieCenterLabel>
          </PieChart>
        )}

        {view === "compito" && (
          <PieChart
            series={[
              {
                innerRadius: 80,
                outerRadius: 130,
                paddingAngle: 5,
                startAngle: -55,
                endAngle: 315,
                cornerRadius: 10,
                data: compito24StreamRegistrations,

                valueFormatter: ({ value }) => `${value} / ${totalCompito}`,
                highlightScope: { fade: "global", highlight: "item" },
                highlighted: { additionalRadius: 2 },
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: { fontSize: "12px" },
            }}
            hideLegend
          >
            <PieCenterLabel>COMPITO'24</PieCenterLabel>
          </PieChart>
        )}
      </Box>
    </Box>
  );
}
