import { Box, Typography, Divider } from "@mui/material";

const ProjectProgressCard = () => (
  <Box
    sx={{
      width: "100%",
      height: "100%",
      p: 2.5,
      bgcolor: "white",
      borderRadius: 1,
      border: "1px solid",
      borderColor: "divider",
      display: "flex",
      flexDirection: "column",
      gap: 2.5,
    }}
  >
    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
      Project Overview
    </Typography>

    <Box
      sx={{
        height: 72,
        display: "flex",
        alignItems: "center",
        gap: 3,
      }}
    >
      <StatItem
        value="8"
        label="Linguist verification"
        progress={18.96}
        bgcolor="#3778A6"
      />
      <StatItem value="6" label="Translation" progress={14.22} />
      <StatItem value="5" label="Validation" progress={11.85} />
      <StatItem value="8" label="Design" progress={18.96} />

      <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.25,
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            0/27
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "400" }}>
            Done
          </Typography>
        </Box>
        <Box
          sx={{
            width: 64,
            height: 3,
            bgcolor: "divider",
            borderRadius: 1,
            borderLeft: "1px solid",
            borderLeftColor: "primary.main",
          }}
        />
      </Box>
    </Box>
  </Box>
);

const StatItem = ({ value, label, progress }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 1.25,
    }}
  >
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        {value}
      </Typography>
      <Typography variant="body2">{label}</Typography>
    </Box>
    <Box
      sx={{
        width: 64,
        height: 3,
        bgcolor: "divider",
        borderRadius: 1,
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: progress,
          height: 3,
          bgcolor: "primary.main",
          borderRadius: 1,
          position: "absolute",
        }}
      />
    </Box>
  </Box>
);

export default ProjectProgressCard;
