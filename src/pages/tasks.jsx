import CustomButton from "../components/customButton";
import Navbar from "../components/navbar";
import Task from "../components/task";

export default function Tasks({ tasksData }) {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="inner_container">
          <div className="task_container">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>My Tasks</h3>
              <h3>{tasksData.length}</h3>
            </div>
            {tasksData.length < 1 ? (
              <div style={{display:"flex", flexDirection:"column", gap:10, alignItems:"center", margin:"20px 0"}}>
                <p>No task found</p>
                <CustomButton text="Add Task"/>
              </div>
            ) : (
              <>
                {tasksData.map(function (task, index) {
                  return (
                    <Task
                      title={task.title}
                      description={task.description}
                      date={task.date}
                      completed={task.completed}
                      key={index}
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
