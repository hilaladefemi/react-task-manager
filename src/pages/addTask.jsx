import { useState } from "react";
import Navbar from "../components/navbar";

function AddTask({ addTaskHandler }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  function onChangeDate(e) {
    setDate(e.target.value);
  }

  function onChangeDescription(e) {
    setDescription(e.target.value);
  }

  function onFormSubmitted(e) {
    // setting isloading to true
    setIsLoading(true);
    e.preventDefault();
    const formData = {
      title,
      date,
      description,
      completed: false,
    };
    if (title.trim() === "" || description.trim() === "") {
      alert("Title and description is required!!!");
      // setting isloading to false
      setIsLoading(false);
      return;
    }
    addTaskHandler(formData);
    // making it looks lie we are sending a request to an api
    setTimeout(() => {
      resetFormField();
      // setting isloading to false
      setIsLoading(false);
    }, 1000);
  }

  function resetFormField() {
    setTitle("");
    setDate("dd/mm/yyyyy");
    setDescription("");
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="inner_container">
          <form onSubmit={onFormSubmitted}>
            <h1>Add Task</h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                onChange={onChangeTitle}
                value={title}
              />
            </label>
            <label htmlFor="date">
              Date
              <input
                type="date"
                id="date"
                onChange={onChangeDate}
                value={date}
              />
            </label>
            <label htmlFor="Description">
              Description
              <textarea
                id="Description"
                onChange={onChangeDescription}
                value={description}
              ></textarea>
            </label>
            <button type="submit" disabled={isLoading}>
              {isLoading === true ? "Loading..." : "Add Task"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTask;
