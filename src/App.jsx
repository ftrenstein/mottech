// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider, CssBaseline, Container } from "@mui/material";
// import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./ProtectedRoute";
// import "./App.css";
// // Страницы
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Projects from "./pages/Projects";
// import NewProject from "./pages/NewProject";
// import ProjectOverview from "./pages/ProjectOverview";
// import Documents from "./pages/Documents";
// import Reports from "./pages/Reports";
// import AccessRights from "./pages/AccessRights";
// import DocumentOverview from "./pages/DocumentOverview";

// // Компоненты
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";

// // Тема
// import theme from "./theme/theme";

// // Макет приложения
// const AppLayout = ({ children }) => (
//   <div style={{ display: "flex" }}>
//     <Sidebar />
//     <div style={{ flex: 1, backgroundColor: "#fafafa", height: "100vh" }}>
//       <Navbar />
//       <Container sx={{ padding: 25, marginLeft: 20 }}>{children}</Container>
//     </div>
//   </div>
// );

// // Обернутые защищенные маршруты
// const ProtectedRoutes = () => (
//   <AppLayout>
//     <Routes>
//       <Route path="/" element={<Dashboard />} />
//       <Route path="/projects" element={<Projects />} />
//       <Route path="/new-project" element={<NewProject />} />
//       <Route path="/projectOverview/:id" element={<ProjectOverview />} />
//       <Route path="/documents" element={<Documents />} />
//       <Route path="/documentOverview" element={<DocumentOverview />} />
//       <Route path="/reports" element={<Reports />} />
//       <Route path="/access-rights" element={<AccessRights />} />
//     </Routes>
//   </AppLayout>
// );

// // Основное приложение
// const App = () => (
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <AuthProvider>
//       <BrowserRouter basename="/demo/">
//         <Routes>
//           <Route
//             path="/login"
//             element={
//               <Login
//                 sx={{
//                   backgroundColor: (theme) =>
//                     theme.components.MuiPaper.styleOverrides.body
//                       .backgroundColor.backgroundColor,
//                 }}
//               />
//             }
//           />
//           <Route
//             path="/*"
//             element={
//               <ProtectedRoute>
//                 <ProtectedRoutes />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   </ThemeProvider>
// );

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";
import { Box, Container } from "@mui/material";

// Страницы
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import NewProject from "./pages/NewProject";
import ProjectOverview from "./pages/ProjectOverview";
import Documents from "./pages/Documents";
import Reports from "./pages/Reports";
import AccessRights from "./pages/AccessRights";
import DocumentOverview from "./pages/DocumentOverview";

// Компоненты
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// Тема
import theme from "./theme/theme";

// Макет приложения
const AppLayout = ({ children }) => (
  <Box sx={{ display: "flex", backgroundColor: "#fafafa" }}>
    <Sidebar />
    <Box
      sx={{
        flex: 1,
        backgroundColor: "#fafafa",
        minHeight: "100vh",
        marginLeft: { xs: "70px", md: "100px" }, // Учитываем ширину сайдбара
      }}
    >
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          pt: 18,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {children}
      </Container>
    </Box>
  </Box>
);

// Обернутые защищенные маршруты
const ProtectedRoutes = () => (
  <ProtectedRoute>
    <AppLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/new-project" element={<NewProject />} />
        <Route path="/projectOverview/:id" element={<ProjectOverview />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/documentOverview" element={<DocumentOverview />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/access-rights" element={<AccessRights />} />
      </Routes>
    </AppLayout>
  </ProtectedRoute>
);

// Основное приложение
const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthProvider>
      <BrowserRouter basename="/demo/">
        <Routes>
          <Route
            path="/login"
            element={
              <div className="login-page">
                <Login />
              </div>
            }
          />
          <Route path="/*" element={<ProtectedRoutes />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
