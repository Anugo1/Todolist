interface DateUpdate {
    dueDate: Date;
}

interface TodoItem extends DateUpdate {
    id: number;
    task: string;
    completed: boolean;
}

class TodoList {
    private todoItems: TodoItem[] = [];
    private nextId: number = 1; // Auto-incrementing ID

    constructor(initialTodos: TodoItem[] = []) {
        this.todoItems = initialTodos;
        this.nextId = initialTodos.length > 0 ? Math.max(...initialTodos.map(t => t.id)) + 1 : 1;
    }

    // Adds a new todo item
    addTodo(task: string, dueDate: Date): string {
        const newTodo: TodoItem = {
            id: this.nextId++,
            task,
            completed: false,
            dueDate,
        };
        this.todoItems.push(newTodo);
        return `Task '${task}' added successfully!`;
    }

    // Marks a todo item as completed
    completeTodo(id: number): string {
        const todo = this.todoItems.find(item => item.id === id);
        if (!todo) return `Task with ID ${id} not found.`;
        
        todo.completed = true;
        return `Task '${todo.task}' marked as completed.`;
    }

    // Removes a todo item
    removeTodo(id: number): string {
        const index = this.todoItems.findIndex(item => item.id === id);
        if (index === -1) return `Task with ID ${id} not found.`;

        const [removed] = this.todoItems.splice(index, 1);
        return `Task '${removed.task}' removed successfully.`;
    }

    // Lists all todo items
    listTodos(): TodoItem[] {
        return this.todoItems;
    }

    // Filters todos by completion status
    filterTodoItems(completed: boolean): TodoItem[] {
        return this.todoItems.filter(item => item.completed === completed);
    }

    // Updates the task description
    updateTodoItem(id: number, newTask: string): string {
        const todo = this.todoItems.find(item => item.id === id);
        if (!todo) return `Task with ID ${id} not found.`;

        todo.task = newTask;
        return `Task ${id} updated to '${newTask}'.`;
    }

    // Clears all completed tasks
    clearAllCompletedTodos(): string {
        this.todoItems = this.todoItems.filter(item => !item.completed);
        return "All completed tasks have been cleared.";
    }
}

// Example Usage
const todoApp = new TodoList([{ id: 1, task: 'Finish project', completed: false, dueDate: new Date() }]);

console.log(todoApp.addTodo("Read TypeScript docs", new Date("2025-03-10")));
console.log(todoApp.completeTodo(1));
console.log(todoApp.removeTodo(2));
console.log(todoApp.listTodos());
console.log(todoApp.filterTodoItems(true));
console.log(todoApp.updateTodoItem(1, "Complete TypeScript project"));
console.log(todoApp.clearAllCompletedTodos());
console.log(todoApp.listTodos());
