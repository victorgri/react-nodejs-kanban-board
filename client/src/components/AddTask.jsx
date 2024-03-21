import { useRef } from "react"

export const AddTask = ({socket}) => {
  const taskRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("createTask", taskRef.current.value);
    taskRef.current.value = '';
  }

  return (
    <form className="form__input" onSubmit={handleSubmit}>
      <label htmlFor="task">Add Task</label>
      <input
        className="input"
        type="text"
        name="task"
        id="task"
        required
        ref={taskRef}
      />

      <button className="addTodoBtn">ADD TASK</button>
    </form>
  )
}

