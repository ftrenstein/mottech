import React, { useState } from "react";
import { Box, Typography, Avatar, TextField, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { discussionData } from "../data/discussionData";

// RightPanel component displays the participants and discussion sections.

const RightPanel = () => {
  return (
    <Box sx={styles.container}>
      <ParticipantsSection />
      <DiscussionSection />
    </Box>
  );
};

const ParticipantsSection = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box sx={styles.card}>
      <Box sx={styles.header}>
        <Typography sx={styles.title}>Participants</Typography>
        <IconButton onClick={handleToggle}>
          <ArrowBackIosNewIcon
            sx={{
              ...styles.arrowIcon,
              transform: isExpanded ? "rotate(90deg)" : "rotate(-90deg)",
            }}
          />
        </IconButton>
      </Box>
      {isExpanded && (
        <Box sx={styles.sectionContent}>
          <Box sx={styles.participantsGrid}>
            {[...Array(6)].map((_, index) => (
              <Avatar key={index} sx={styles.avatar}>
                KK
              </Avatar>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

const DiscussionSection = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box
      sx={{
        ...styles.card,
        height: isExpanded ? 400 : "auto",
        overflow: isExpanded ? "auto" : "hidden",
      }}
    >
      <Box sx={styles.header}>
        <Typography sx={styles.title}>{discussionData.title}</Typography>
        <IconButton onClick={handleToggle}>
          <ArrowBackIosNewIcon
            sx={{
              ...styles.arrowIcon,
              transform: isExpanded ? "rotate(90deg)" : "rotate(-90deg)",
            }}
          />
        </IconButton>
      </Box>
      {isExpanded && (
        <>
          <Box sx={styles.messagesContainer}>
            {discussionData.messages.map((msg, index) => (
              <Message
                key={index}
                {...msg}
                isUserMessage={msg.author === "You"}
              />
            ))}
          </Box>
          <Box sx={styles.inputContainer}>
            <TextField
              fullWidth
              placeholder={discussionData.placeholder}
              sx={styles.textField}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

const Message = ({ author, role, text, bgColor, isUserMessage }) => (
  <Box
    sx={{
      ...styles.message,
      bgcolor: bgColor,
      alignSelf: isUserMessage ? "flex-end" : "flex-start",
      backgroundColor: isUserMessage ? "#e0f7fa" : "#ffffff",
    }}
  >
    {author && (
      <Box>
        <Typography component="span" sx={styles.messageAuthor}>
          {author}
        </Typography>
        {role && (
          <Typography component="span" sx={styles.messageRole}>
            {role}
          </Typography>
        )}
      </Box>
    )}
    <Typography sx={styles.messageText}>{text}</Typography>
  </Box>
);

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    height: "100%",
  },
  card: {
    p: 2,
    bgcolor: "white",
    borderRadius: 1,
    border: "1px solid #E8E8E8",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  sectionContent: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  title: {
    flex: 1,
    fontFamily: "SB Sans Display",
    fontWeight: 600,
    fontSize: 18,
    lineHeight: "24px",
    color: "black",
  },
  arrowIcon: {
    color: "#161D27",
    opacity: 0.87,
  },
  participantsGrid: {
    display: "flex",
    gap: 1,
    flexWrap: "wrap",
  },
  avatar: {
    width: 40,
    height: 40,
    bgcolor: "white",
    border: "1px solid #E8E8E8",
    color: "#747474",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  messagesContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 1,
  },
  message: {
    width: 256,
    p: 1,
    borderRadius: 1,
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  messageAuthor: {
    color: "#212121",
    fontSize: 12,
    fontFamily: "Inter",
    mr: 1,
  },
  messageRole: {
    color: "#747474",
    fontSize: 12,
    fontFamily: "Inter",
  },
  messageText: {
    color: "#212121",
    fontSize: 12,
    fontFamily: "Inter",
  },
  inputContainer: {
    width: "100%",
    mt: "auto",
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 1,
      fontSize: 12,
      fontFamily: "Inter",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#E8E8E8",
    },
  },
};

export default RightPanel;
