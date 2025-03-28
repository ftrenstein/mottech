import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import UniversalButton from "../components/UniversalButton";
import signInImage from "../assets/sign-in.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target); // Ensure e.target is the form element
    const username = formData.get("username");
    const password = formData.get("password");

    if (login(username, password)) {
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      {/* Left Section - Form (меньшая часть) */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          padding: 2,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            width: "100%",
            maxWidth: "400px",
            backgroundColor: "#121212",
            // bgcolor: "white",
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ color: "white" }}>
            Welcome back
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              label="Email"
              name="username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              sx={{
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "gray" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                  "& input": { color: "white" },
                },
              }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              required
              sx={{
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "gray" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                  "& input": { color: "white" },
                },
              }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <UniversalButton type="submit" startIcon={null}>
                Sign in
              </UniversalButton>
              <Button
                sx={{
                  color: "#4dabf5",
                  fontSize: "0.75rem",
                  fontFamily: "'Inter-Regular', Helvetica",
                  fontWeight: "normal",
                }}
              >
                Forgot your password?
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* Right Section - Image (большая часть) */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={signInImage}
            alt="Sign In"
            style={{
              width: "600px",
              height: "100%",
              // objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
