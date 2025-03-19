import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, addTodoAsync, toggleTodoAsync, removeTodoAsync, setFilter } from "./todoSlice";
import { selectFilteredTodos } from "./selectorss";

const API_URL = "http://localhost:5000/todos"; 

const TodoList = () => {
    const [input, setInput] = useState("");
    const todos = useSelector(selectFilteredTodos);
    const filter = useSelector(state => state.todos.filter);
    const status = useSelector(state => state.todos.status);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Fetching todos from:", API_URL); 
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleAddTodo = () => {
        if (input.trim()) {
            dispatch(addTodoAsync(input));
            setInput("");
        }
    };

    return (
        <div>
            <h1>ToDo List</h1>

            {/* <p>API: <a href={API_URL} target="_blank" rel="noopener noreferrer">{API_URL}</a></p> */}

            <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Введите задачу..." 
            />
            <button onClick={handleAddTodo}>Добавить</button>

            {status === "loading" && <p>Загрузка...</p>}
            {status === "failed" && <p>Ошибка загрузки задач.</p>}

            <div>
                {todos.map(todo => (
                    <div key={todo.id}>
                        <span 
                            style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
                            onClick={() => dispatch(toggleTodoAsync(todo.id))}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch(removeTodoAsync(todo.id))}>удалить</button>
                    </div>
                ))}
            </div>

            <div>
                <button onClick={() => dispatch(setFilter("all"))} disabled={filter === "all"}>Все</button>
                <button onClick={() => dispatch(setFilter("active"))} disabled={filter === "active"}>Активные</button>
                <button onClick={() => dispatch(setFilter("completed"))} disabled={filter === "completed"}>Завершённые</button>
            </div>
        </div>
    );
};

export default TodoList;
