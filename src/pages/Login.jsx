import { useState, useEffect } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import signInImage from "../assets/sign-in.svg"; // Замените на свою картинку
import { useAuth } from "../context/AuthContext"; // Импортируйте ваш контекст аутентификации
import { useNavigate } from "react-router-dom"; // Импортируйте useNavigate из react-router-dom

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // Add this line
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
  useEffect(() => {
    document.body.style.backgroundColor = "black";
    return () => {
      document.body.style.backgroundColor = ""; // Восстанавливаем при размонтировании
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",

        flexDirection: { xs: "column", md: "row" },
        height: "100vh",
        // maxWidth: "1400px", // Ограничение ширины страницы
        margin: "0 auto", // Центрируем на больших экранах
      }}
    >
      {/* Левая часть - Форма */}
      <Box
        sx={{
          // width: "50%",
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
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ color: "white" }}>
            Welcome Back
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Email"
              name="username"
              variant="outlined"
              fullWidth
              onChange={(e) => setUsername(e.target.value)}
              required
              sx={{
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
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
              value={password} // Uncomment this line
              onChange={(e) => setPassword(e.target.value)} // This will now work
              sx={{
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                  "& input": { color: "white" },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              maxwidth="100%"
              sx={{
                border: "0.5px solid white", // Добавляем тонкую белую обводку
                "&:hover": {
                  backgroundColor: "#3778a6",
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Box>

      {/* Правая часть - Картинка */}
      <Box
        sx={{
          width: "50%",
          // display: "flex",
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          overflow: "hidden",
        }}
      >
        <img
          src={signInImage}
          alt="Sign In"
          style={{
            width: "100%",
            height: "100%",
            // objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
    </Box>
  );
};

export default Login;
