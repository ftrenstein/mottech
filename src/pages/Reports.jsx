import React from "react";
import { Box, Card, Typography, Stack, Input } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { projectsData } from "../data/dashboardData";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Reports = () => {
  const barData = React.useMemo(
    () => [
      { width: 45, height: 3, top: 56, left: 0, opacity: 0.5 },
      { width: 46, height: 32, top: 27, left: 55, opacity: 0.6 },
      { width: 45, height: 59, top: 0, left: 110, opacity: 0.7 },
      { width: 46, height: 13, top: 46, left: 165, opacity: 0.8 },
      { width: 45, height: 8, top: 51, left: 220, opacity: 1 },
    ],
    []
  );
  const languageButtons = [
    { label: "English", language: "Language 1" },
    { label: "Spanish", language: "Language 2" },
  ];

  const renderCard = (title, content) => (
    <Card
      sx={{
        p: 2.5,
        height: 260,
        width: 300,
        borderRadius: "10px",
      }}
    >
      <Stack spacing={5}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight="600">
            {title}
          </Typography>
          <Typography variant="caption" color="#969696">
            Last 30 days
          </Typography>
        </Box>
        {content}
      </Stack>
    </Card>
  );
  const projectsAmountContent = (
    <Stack spacing={6} sx={{ width: "100%", height: "100%" }}>
      {/* Верхний ряд — Информация о проектах */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",

          p: 2,
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h4" fontWeight="600">
            {projectsData.inProgress}
          </Typography>
          <Typography variant="caption">projects in progress</Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" fontWeight="400" color="#969696">
            {projectsData.archived}
          </Typography>
          <Typography variant="caption">archived projects</Typography>
        </Box>
      </Box>

      {/* Нижний ряд — Бары */}
      <Box sx={{ position: "relative", width: "100%", height: 77 }}>
        {barData.map((bar, index) => (
          <Box
            key={index}
            sx={{
              width: bar.width,
              height: bar.height,
              position: "absolute",
              top: bar.top,
              left: bar.left,
              opacity: bar.opacity,
              backgroundColor: "#3778a6",
              borderRadius: "5px",
            }}
          />
        ))}
      </Box>
    </Stack>
  );

  const projectsExecutionContent = (
    <Stack spacing={6} sx={{ width: "100%", height: "100%" }}>
      {/* Статистика проектов */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Stack spacing={0}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="h4" fontWeight={600}>
              134
            </Typography>
            <Typography
              variant="caption"
              color="#207D46"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "inherit",
              }}
            >
              <ArrowUpward
                fontSize="inherit"
                style={{ transform: "translateY(-13px)" }}
              />
              <span style={{ transform: "translateY(-10px)" }}>
                <sup>32%</sup>
              </span>
            </Typography>
          </Stack>
          <Typography variant="caption">projects created</Typography>
        </Stack>
        <Stack spacing={1}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="h4" fontWeight={600}>
              108
            </Typography>
            <Typography
              variant="caption"
              color="#E82F03"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "inherit",
              }}
            >
              <ArrowDownward
                fontSize="inherit"
                style={{ transform: "translateY(-13px)" }}
              />
              <span style={{ transform: "translateY(-10px)" }}>
                <sup>2%</sup>
              </span>
            </Typography>
            {/* <Typography variant="caption" color="#E82F03">
              ↓2%
            </Typography> */}
          </Stack>
          <Typography variant="caption">projects completed</Typography>
        </Stack>
      </Stack>

      {/* Прогресс по месяцам */}
      {[
        {
          label: "This month",
          value: "16d",
          progress: 276,
          total: 310,
          change: "11%",
          color: "#207D46",
        },
        {
          label: "February",
          value: "18d",
          progress: 310,
          total: 310,
          change: null,
          color: "black",
        },
      ].map(({ label, value, progress, total, change, color }, index) => (
        <Stack key={index} spacing={0.5}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="caption" sx={{ flex: 1 }}>
              {label}
            </Typography>
            <Stack direction="row" spacing={0.5} alignItems="center">
              {change && (
                <Typography variant="caption" color={color}>
                  <ArrowUpward
                    fontSize="inherit"
                    style={{ transform: "translateY(+1px)" }}
                  />
                  {change}
                </Typography>
              )}
              <Typography variant="caption" color="black">
                {value}
              </Typography>
            </Stack>
          </Stack>
          <Box
            sx={{
              width: "100%",
              height: 4,
              bgcolor: "#E1EBF2",
              borderRadius: 5,
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: `${(progress / total) * 100}%`,
                height: "100%",
                bgcolor: "#3778A6",
                borderRadius: 5,
              }}
            />
          </Box>
        </Stack>
      ))}
    </Stack>
  );
  const tasksExecutionContent = (
    <Stack spacing={6} sx={{ width: "100%", height: "100%" }}>
      {/* Статистика проектов */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Stack spacing={0}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="h4" fontWeight={600}>
              343
            </Typography>
            <Typography
              variant="caption"
              color="#207D46"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "inherit",
              }}
            >
              <ArrowUpward
                fontSize="inherit"
                style={{ transform: "translateY(-13px)" }}
              />
              <span style={{ transform: "translateY(-10px)" }}>
                <sup>44%</sup>
              </span>
            </Typography>
          </Stack>
          <Typography variant="caption">projects created</Typography>
        </Stack>
        <Stack spacing={1}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="h4" fontWeight={600}>
              234
            </Typography>
            <Typography
              variant="caption"
              color="#E82F03"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "inherit",
              }}
            >
              <ArrowDownward
                fontSize="inherit"
                style={{ transform: "translateY(-13px)" }}
              />
              <span style={{ transform: "translateY(-10px)" }}>
                <sup>5%</sup>
              </span>
            </Typography>
          </Stack>
          <Typography variant="caption">projects completed</Typography>
        </Stack>
      </Stack>

      {[
        {
          label: "This month",
          value: "8h",
          progress: 276,
          total: 310,
          change: "2%",
          color: "#207D46",
        },
        {
          label: "February",
          value: "9h",
          progress: 310,
          total: 310,
          change: null,
          color: "black",
        },
      ].map(({ label, value, progress, total, change, color }, index) => (
        <Stack key={index} spacing={0.5}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="caption" sx={{ flex: 1 }}>
              {label}
            </Typography>
            <Stack direction="row" spacing={0.5} alignItems="center">
              {change && (
                <Typography variant="caption" color={"red"}>
                  <ArrowDownward
                    fontSize="inherit"
                    style={{ transform: "translateY(+1px)" }}
                  />
                  {change}
                </Typography>
              )}
              <Typography variant="caption" color="black">
                {value}
              </Typography>
            </Stack>
          </Stack>
          <Box
            sx={{
              width: "100%",
              height: 4,
              bgcolor: "#E1EBF2",
              borderRadius: 5,
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: `${(progress / total) * 100}%`,
                height: "100%",
                bgcolor: "#3778A6",
                borderRadius: 5,
              }}
            />
          </Box>
        </Stack>
      ))}
    </Stack>
  );
  const translatorsContent = (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: 3,
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{ height: 115, display: "flex", flexDirection: "column", gap: 1 }}
      >
        {/* Заголовок таблицы */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography variant="body2" sx={{ width: 18, fontSize: 12 }}>
            №
          </Typography>
          <Typography variant="body2" sx={{ width: 155, fontSize: 12 }}>
            Name
          </Typography>
          <Typography variant="body2" sx={{ flex: 1, fontSize: 12 }}>
            Average
          </Typography>
          <Typography variant="body2" sx={{ width: 60, fontSize: 12 }}>
            Fastest
          </Typography>
        </Box>
        <Divider sx={{ borderColor: "#E8E8E8" }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                borderBottom: "1px solid #E8E8E8",
                paddingBottom: 1,
              }}
            >
              <Typography variant="caption" sx={{ width: 14, color: "black" }}>
                1
              </Typography>
              <Typography variant="caption" sx={{ width: 150, color: "black" }}>
                Thomas Bernard
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="caption" sx={{ color: "black" }}>
                  18h12m
                </Typography>
                <Typography variant="caption" sx={{ color: "#207D46" }}>
                  <ArrowUpward fontSize="inherit" />
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ width: 60, color: "black" }}>
                8h12m
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                borderBottom: "1px solid #E8E8E8",
                paddingBottom: 1,
              }}
            >
              <Typography variant="caption" sx={{ width: 14, color: "black" }}>
                2
              </Typography>
              <Typography variant="caption" sx={{ width: 150, color: "black" }}>
                John Doe
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="caption" sx={{ color: "black" }}>
                  20h15m
                </Typography>
                <Typography variant="caption" sx={{ color: "#E82F03" }}>
                  <ArrowDownward fontSize="inherit" />
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ width: 60, color: "black" }}>
                2h12m
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                borderBottom: "1px solid #E8E8E8",
                paddingBottom: 1,
              }}
            >
              <Typography variant="caption" sx={{ width: 14, color: "black" }}>
                3
              </Typography>
              <Typography variant="caption" sx={{ width: 150, color: "black" }}>
                Jane Smith
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="caption" sx={{ color: "black" }}>
                  22h30m
                </Typography>
                <Typography variant="caption" sx={{ color: "#207D46" }}>
                  <ArrowUpward fontSize="inherit" />
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ width: 60, color: "black" }}>
                15h12m
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              width: 48,
              height: 15,
              color: "#3778A6",
              fontSize: 12,
              fontWeight: "500",
            }}
          >
            Show all
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  const validatorssContent = (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: 3,
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{ height: 115, display: "flex", flexDirection: "column", gap: 1 }}
      >
        {/* Заголовок таблицы */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography variant="body2" sx={{ width: 18, fontSize: 12 }}>
            №
          </Typography>
          <Typography variant="body2" sx={{ width: 155, fontSize: 12 }}>
            Name
          </Typography>
          <Typography variant="body2" sx={{ flex: 1, fontSize: 12 }}>
            Average
          </Typography>
          <Typography variant="body2" sx={{ width: 60, fontSize: 12 }}>
            Fastest
          </Typography>
        </Box>
        <Divider sx={{ borderColor: "#E8E8E8" }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                borderBottom: "1px solid #E8E8E8",
                paddingBottom: 1,
              }}
            >
              <Typography variant="caption" sx={{ width: 14, color: "black" }}>
                1
              </Typography>
              <Typography variant="caption" sx={{ width: 150, color: "black" }}>
                Thomas Bernard
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="caption" sx={{ color: "black" }}>
                  18h12m
                </Typography>
                <Typography variant="caption" sx={{ color: "#207D46" }}>
                  <ArrowUpward fontSize="inherit" />
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ width: 60, color: "black" }}>
                8h12m
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                borderBottom: "1px solid #E8E8E8",
                paddingBottom: 1,
              }}
            >
              <Typography variant="caption" sx={{ width: 14, color: "black" }}>
                2
              </Typography>
              <Typography variant="caption" sx={{ width: 150, color: "black" }}>
                John Doe
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="caption" sx={{ color: "black" }}>
                  20h15m
                </Typography>
                <Typography variant="caption" sx={{ color: "#E82F03" }}>
                  <ArrowDownward fontSize="inherit" />
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ width: 60, color: "black" }}>
                2h12m
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                borderBottom: "1px solid #E8E8E8",
                paddingBottom: 1,
              }}
            >
              <Typography variant="caption" sx={{ width: 14, color: "black" }}>
                3
              </Typography>
              <Typography variant="caption" sx={{ width: 150, color: "black" }}>
                Jane Smith
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="caption" sx={{ color: "black" }}>
                  22h30m
                </Typography>
                <Typography variant="caption" sx={{ color: "#207D46" }}>
                  <ArrowUpward fontSize="inherit" />
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ width: 60, color: "black" }}>
                15h12m
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              width: 48,
              height: 15,
              color: "#3778A6",
              fontSize: 12,
              fontWeight: "500",
            }}
          >
            Show all
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  const designersContent = (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        padding: 3,
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{ height: 115, display: "flex", flexDirection: "column", gap: 1 }}
      >
        {/* Заголовок таблицы */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography variant="body2" sx={{ width: 18, fontSize: 12 }}>
            №
          </Typography>
          <Typography variant="body2" sx={{ width: 155, fontSize: 12 }}>
            Name
          </Typography>
          <Typography variant="body2" sx={{ flex: 1, fontSize: 12 }}>
            Average
          </Typography>
          <Typography variant="body2" sx={{ width: 60, fontSize: 12 }}>
            Fastest
          </Typography>
        </Box>
        <Divider sx={{ borderColor: "#E8E8E8" }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                borderBottom: "1px solid #E8E8E8",
                paddingBottom: 1,
              }}
            >
              <Typography variant="caption" sx={{ width: 14, color: "black" }}>
                1
              </Typography>
              <Typography variant="caption" sx={{ width: 150, color: "black" }}>
                Thomas Bernard
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="caption" sx={{ color: "black" }}>
                  18h12m
                </Typography>
                <Typography variant="caption" sx={{ color: "#207D46" }}>
                  <ArrowUpward fontSize="inherit" />
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ width: 60, color: "black" }}>
                8h12m
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                borderBottom: "1px solid #E8E8E8",
                paddingBottom: 1,
              }}
            >
              <Typography variant="caption" sx={{ width: 14, color: "black" }}>
                2
              </Typography>
              <Typography variant="caption" sx={{ width: 150, color: "black" }}>
                John Doe
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="caption" sx={{ color: "black" }}>
                  20h15m
                </Typography>
                <Typography variant="caption" sx={{ color: "#E82F03" }}>
                  <ArrowDownward fontSize="inherit" />
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ width: 60, color: "black" }}>
                2h12m
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
                borderBottom: "1px solid #E8E8E8",
                paddingBottom: 1,
              }}
            >
              <Typography variant="caption" sx={{ width: 14, color: "black" }}>
                3
              </Typography>
              <Typography variant="caption" sx={{ width: 150, color: "black" }}>
                Jane Smith
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="caption" sx={{ color: "black" }}>
                  22h30m
                </Typography>
                <Typography variant="caption" sx={{ color: "#207D46" }}>
                  <ArrowUpward fontSize="inherit" />
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ width: 60, color: "black" }}>
                15h12m
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              width: 48,
              height: 15,
              color: "#3778A6",
              fontSize: 12,
              fontWeight: "500",
            }}
          >
            Show all
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  const languagepairsContent = (
    <Stack spacing={6} sx={{ width: "100%", height: "100%" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Stack spacing={0}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="h4" fontWeight={600}>
              732
            </Typography>
            <Typography
              variant="caption"
              color="#207D46"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "inherit",
              }}
            >
              <ArrowUpward
                fontSize="inherit"
                style={{ transform: "translateY(-13px)" }}
              />
              <span style={{ transform: "translateY(-10px)" }}>
                <sup>32%</sup>
              </span>
            </Typography>
          </Stack>
          <Typography variant="h8">documents</Typography>
        </Stack>
      </Stack>

      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        {/* Language 1 */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography sx={{ fontSize: 14, fontWeight: "400", color: "black" }}>
            Language 1
          </Typography>
          <Button
            sx={{
              height: 50,
              padding: "8px 12px",
              backgroundColor: "white",
              borderRadius: 1,
              border: "1px solid #E8E8E8",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 12,
              textAlign: "left",
              width: "160px", // Make the button longer
            }}
          >
            <Typography sx={{ flex: 1, color: "black" }}>English</Typography>
            <ExpandMoreIcon sx={{ width: 24, height: 24, opacity: 0.87 }} />
          </Button>
        </Box>

        {/* Language 2 */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography sx={{ fontSize: 14, fontWeight: "400", color: "black" }}>
            Language 2
          </Typography>
          <Button
            sx={{
              height: 50,
              padding: "8px 12px",
              backgroundColor: "white",
              borderRadius: 1,
              border: "1px solid #E8E8E8",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 12,
              textAlign: "left",
              width: "160px", // Make the button longer
            }}
          >
            <Typography sx={{ flex: 1, color: "black" }}>Spanish</Typography>
            <ExpandMoreIcon sx={{ width: 24, height: 24, opacity: 0.87 }} />
          </Button>
        </Box>
      </Box>
    </Stack>
  );
  const wordMentionsContent = (
    <Stack spacing={6} sx={{ width: "100%", height: "100%" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Stack spacing={0}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="h4" fontWeight={600}>
              12947
            </Typography>
            <Typography
              variant="caption"
              color="#207D46"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "inherit",
              }}
            >
              <ArrowUpward
                fontSize="inherit"
                style={{ transform: "translateY(-13px)" }}
              />
              <span style={{ transform: "translateY(-10px)" }}>
                <sup>2%</sup>
              </span>
            </Typography>
          </Stack>
          <Typography variant="h8">words</Typography>
        </Stack>
        <Stack spacing={0}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="h4" fontWeight={600}>
              473
            </Typography>
            <Typography
              variant="caption"
              color="#207D46"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "inherit",
              }}
            >
              <ArrowUpward
                fontSize="inherit"
                style={{ transform: "translateY(-13px)" }}
              />
              <span style={{ transform: "translateY(-10px)" }}>
                <sup>9%</sup>
              </span>
            </Typography>
          </Stack>
          <Typography variant="h8">projects</Typography>
        </Stack>
      </Stack>

      {/* Language 1 */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography sx={{ fontSize: 14, fontWeight: "400", color: "black" }}>
          Word
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: 50,
            p: 1,
            backgroundColor: "white",
            borderRadius: 1,
            border: "1px solid #E8E8E8",
            // display: "inline-flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <Typography sx={{ fontSize: 12, fontWeight: 400, flex: 1 }}>
            Care
          </Typography> */}
          <Input
            sx={{
              fontSize: 16,
              color: "black",
              "& .MuiInputBase-root": {
                padding: "2px", // for better spacing inside input
              },
            }}
          />
        </Box>
      </Box>
    </Stack>
  );
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Grid container spacing={6} sx={{ maxWidth: "1300px", width: "100%" }}>
        <Grid item xs={12} sm={6} md={4}>
          {renderCard("Projects amount", projectsAmountContent)}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {renderCard("Projects execution", projectsExecutionContent)}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {renderCard("Tasks execution", tasksExecutionContent)}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {renderCard("Translators", translatorsContent)}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {renderCard("Validators", validatorssContent)}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {renderCard("Designers", designersContent)}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {renderCard("Language pairs", languagepairsContent)}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {renderCard("Word mentions", wordMentionsContent)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reports;
