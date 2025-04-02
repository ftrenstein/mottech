import { createContext, useState, useEffect, useContext } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children } = {}) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  // Функция для загрузки данных из JSON-файла
  const fetchProjectsFromJson = async () => {
    try {
      const response = await fetch("/demo/public/data/projects.json");
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonProjects = await response.json();
      return jsonProjects;
    } catch (error) {
      console.error("Ошибка загрузки JSON:", error);
      return [];
    }
  };

  // Загрузка данных при запуске
  useEffect(() => {
    const loadProjects = async () => {
      try {
        // Загружаем данные из localStorage и JSON
        setIsLoading(true);
        const storedProjects =
          JSON.parse(localStorage.getItem("projects")) || [];
        const jsonProjects = await fetchProjectsFromJson();

        // Объединяем JSON и localStorage, исключая дубли
        const mergedProjects = [
          ...jsonProjects,
          ...storedProjects.filter(
            (p) => !jsonProjects.some((j) => j.id === p.id)
          ),
        ];
        console.log("Merged Projects:", mergedProjects);
        setProjects(mergedProjects);
        localStorage.setItem("projects", JSON.stringify(mergedProjects));
      } catch (error) {
        console.error("Ошибка загрузки проектов:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    loadProjects();
  }, []);

  // Функция сохранения в localStorage
  const saveProjectsToLocalStorage = (updatedProjects) => {
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  // Добавление проекта
  const addProject = (newProject) => {
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    saveProjectsToLocalStorage(updatedProjects);
  };

  // Удаление проекта
  const deleteProject = (id) => {
    const updatedProjects = projects.filter((p) => p.id !== id);
    setProjects(updatedProjects);
    saveProjectsToLocalStorage(updatedProjects);
  };

  // Обновление параметров проекта
  const updateProjectParameters = (id, updatedParameters) => {
    const updatedProjects = projects.map((project) =>
      project.id === id ? { ...project, ...updatedParameters } : project
    );
    setProjects(updatedProjects);
    saveProjectsToLocalStorage(updatedProjects);
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        deleteProject,
        updateProjectParameters, // Expose the new function
        isLoading,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
};

export default ProjectProvider;
