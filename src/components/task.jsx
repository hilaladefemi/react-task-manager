function Task(props) {
  return (
    <div className="task">
      <div style={{ display: "flex", gap: 10 }}>
        <input type="checkbox" checked={props.completed} readOnly />
        <div>
          <p>{props.title}</p>
          <p>{props.description}</p>
        </div>
      </div>
      <p>{props.date}</p>
    </div>
  );
}

export default Task;
