import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

// Страницы
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import NewProject from "./pages/NewProject";
import ProjectOverview from "./pages/ProjectOverview";
import Documents from "./pages/Documents";
import Reports from "./pages/Reports";
import AccessRights from "./pages/AccessRights";

// Компоненты
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// Тема
import theme from "./theme/theme";

// Макет приложения
const AppLayout = ({ children }) => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <div style={{ flex: 1, backgroundColor: "#fafafa", height: "100vh" }}>
      <Navbar />
      <Container sx={{ padding: 25, marginLeft: 20 }}>{children}</Container>
    </div>
  </div>
);

// Обернутые защищенные маршруты
const ProtectedRoutes = () => (
  <AppLayout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/new-project" element={<NewProject />} />
      <Route path="/projectOverview/:id" element={<ProjectOverview />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/access-rights" element={<AccessRights />} />
    </Routes>
  </AppLayout>
);

// Основное приложение
const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <ProtectedRoutes />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
