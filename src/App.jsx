import { useState } from "react";
import AddTask from "./pages/addTask";
import Navbar from "./components/navbar";
import Tasks from "./pages/tasks";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (formData) => {
    console.log(formData);
    setTasks([...tasks, formData]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tasks tasksData={tasks} />} />
        <Route path="/add-task" element={<AddTask addTaskHandler={addTaskHandler} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
