// import { Box, Typography, Divider } from "@mui/material";

// const ProjectProgressCard = () => (
//   <Box
//     sx={{
//       width: "100%",
//       height: "100%",
//       p: 2.5,
//       bgcolor: "white",
//       borderRadius: 1,
//       border: "1px solid",
//       borderColor: "divider",
//       display: "flex",
//       flexDirection: "column",
//       gap: 2.5,
//     }}
//   >
//     <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
//       Project Overview
//     </Typography>

//     <Box
//       sx={{
//         height: 72,
//         display: "flex",
//         alignItems: "center",
//         gap: 3,
//       }}
//     >
//       <StatItem
//         value="8"
//         label="Linguist verification"
//         progress={18.96}
//         bgcolor="#3778A6"
//       />
//       <StatItem value="6" label="Translation" progress={14.22} />
//       <StatItem value="5" label="Validation" progress={11.85} />
//       <StatItem value="8" label="Design" progress={18.96} />

//       <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: 1.25,
//         }}
//       >
//         <Box>
//           <Typography variant="h4" sx={{ fontWeight: 600 }}>
//             0/27
//           </Typography>
//           <Typography variant="body2" sx={{ fontWeight: "400" }}>
//             Done
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             width: 64,
//             height: 3,
//             bgcolor: "divider",
//             borderRadius: 1,
//             borderLeft: "1px solid",
//             borderLeftColor: "primary.main",
//           }}
//         />
//       </Box>
//     </Box>
//   </Box>
// );

// const StatItem = ({ value, label, progress }) => (
//   <Box
//     sx={{
//       display: "flex",
//       flexDirection: "column",
//       gap: 1.25,
//     }}
//   >
//     <Box>
//       <Typography variant="h4" sx={{ fontWeight: 600 }}>
//         {value}
//       </Typography>
//       <Typography variant="body2">{label}</Typography>
//     </Box>
//     <Box
//       sx={{
//         width: 64,
//         height: 3,
//         bgcolor: "divider",
//         borderRadius: 1,
//         position: "relative",
//       }}
//     >
//       <Box
//         sx={{
//           width: progress,
//           height: 3,
//           bgcolor: "primary.main",
//           borderRadius: 1,
//           position: "absolute",
//         }}
//       />
//     </Box>
//   </Box>
// );

// export default ProjectProgressCard;

import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

const data = [
  { label: "Al ", value: 3 },
  { label: "Linguist verification", value: 0 },
  { label: "Translation", value: 0 },
  { label: "Validation", value: 0 },
  { label: "Design", value: 0 },
];

export default function ProjectProgressCard(projectId) {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        p: 2,
        bgcolor: "white",
        borderRadius: 1,
        border: "1px solid #E8E8E8",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography fontSize={12} fontWeight={600} color="black">
        Project Overview
      </Typography>
      <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
        {data.map((item) => (
          <Box
            key={item.label}
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <Typography fontSize={36} fontWeight={600} color="black">
              {item.value}
            </Typography>
            <Typography fontSize={12} fontWeight={400} color="black">
              {item.label}
            </Typography>
          </Box>
        ))}
        <Box
          sx={{
            width: 72,
            height: 1,
            transform: "rotate(90deg)",
            bgcolor: "#E8E8E8",
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography fontSize={36} fontWeight={600} color="black">
            0/{total}
          </Typography>
          <Typography fontSize={12} fontWeight={400} color="black">
            Done
          </Typography>
          <LinearProgress
            variant="determinate"
            value={37}
            color="#3778a6"
            sx={{
              width: 64,
              height: 3,
              bgcolor: "#E8E8E8",
              borderRadius: 1,
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#3778A6",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
