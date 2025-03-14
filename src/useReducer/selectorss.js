export const selectFilteredTodos = (state) => {
    switch (state.todos.filter) {
        case "active":
            return state.todos.allTodos.filter(todo => !todo.completed);
        case "completed":
            return state.todos.allTodos.filter(todo => todo.completed);
        default:
            return state.todos.allTodos;
    }
};
