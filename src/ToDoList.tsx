import { SetStateAction, useState } from "react"

function ToDoList(){

    const [task, setTasks] = useState([""]);
    const [newTasks, setNewTask] = useState("")

    function handleInputchange(event: { target: { value: SetStateAction<string>; }; }) {
        setNewTask(event.target.value)
    }

    function addTask(){

        if(newTasks.trim() !== '') {
            setTasks(t =>[...t, newTasks]);
            setNewTask('');
        }
        
    }

    function deleteTask(index) {
        const updatedTask = task.filter((_, i) => i !== index );
        setTasks(updatedTask);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index - 1]] =
            [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    function moveTaskDown(index) {
        if (index < task.length - 1) {
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index + 1]] =
            [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }


    return (
    <>
    <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input 
            type="text" 
            placeholder="Enter a task..."
            value={newTasks}
            onChange={handleInputchange} />

            <button
            className="add-button"
            onClick={addTask}>
                Add
            </button>
        </div>

        <ol>
            {task.map((task, index) =>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button"
                onClick={() => deleteTask(index)}>
                   Delete
                </button>
                <button className="move-button"
                onClick={() => moveTaskUp(index)}>
                    👆
                </button>
                <button className="move-button"
                onClick={() => moveTaskDown(index)}>
                    👇
                </button>
            </li>
            )}
        </ol>
    </div>
    </>);
}

export default ToDoList