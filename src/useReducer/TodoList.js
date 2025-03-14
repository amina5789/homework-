import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo, setFilter } from "./todoSlice";
import { selectFilteredTodos } from "./selectorss";

const TodoList = () => {
    const [input, setInput] = useState("");
    const todos = useSelector(selectFilteredTodos);
    const filter = useSelector(state => state.todos.filter);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput("");
        }
    };

    return (
        <div>
            <h1>ToDo List</h1>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleAddTodo}>Add</button>

            <div>
                {todos.map(todo => (
                    <div key={todo.id}>
                        <span 
                            style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
                            onClick={() => dispatch(toggleTodo(todo.id))}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
                    </div>
                ))}
            </div>

            <div>
                <button onClick={() => dispatch(setFilter("all"))} disabled={filter === "all"}>All</button>
                <button onClick={() => dispatch(setFilter("active"))} disabled={filter === "active"}>Active</button>
                <button onClick={() => dispatch(setFilter("completed"))} disabled={filter === "completed"}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;
