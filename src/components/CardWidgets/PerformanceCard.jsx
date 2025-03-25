import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import ellipse from "../../assets/elipse.svg";

const PerformanceCard = ({ data }) => {
  return (
    <Card sx={{ p: 2.5, height: "auto", borderRadius: "5px", width: "333px" }}>
      <Stack spacing={2.5}>
        <Typography variant="h6" fontWeight="600">
          Performance
        </Typography>
        {/* Performance Metrics */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            width: "100%",
            gap: 1,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                width: "146px",
                height: "73px",
                position: "relative",
              }}
            >
              <img
                src={ellipse}
                alt="Translation time gauge"
                style={{
                  position: "absolute",
                  width: "133px",
                  height: "73px",
                }}
              />
            </Box>
            <Box sx={{ mt: 1.25 }}>
              <Typography variant="h4" fontWeight="600">
                {data.translation.time}
              </Typography>
              <Typography variant="caption">
                {data.translation.description}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                width: "146px",
                height: "73px",
                position: "relative",
                // backgroundImage:
                //   "url(https://c.animaapp.com/Sxb9yGzm/img/ellipse-1520-1.svg)",
                // backgroundSize: "100% 100%",
              }}
            >
              <img
                src={ellipse}
                alt="Validation time gauge"
                style={{
                  position: "absolute",
                  width: "133px",
                  height: "73px",
                }}
              />
            </Box>
            <Box sx={{ mt: 1.25 }}>
              <Typography variant="h4" fontWeight="600">
                {data.validation.time}
              </Typography>
              <Typography variant="caption">
                {data.validation.description}
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Fastest Members */}
        <Box>
          <Typography
            variant="caption"
            fontWeight="600"
            sx={{ mb: 0.5, display: "block" }}
          >
            The fastest members
          </Typography>
          <Stack spacing={0.5}>
            {data.fastestMembers.map((member, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant="caption">{member.translator}</Typography>
                <Typography variant="caption">{member.validator}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};

export default PerformanceCard;
