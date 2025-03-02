### **Todo List Application - TypeScript**  

This is a simple **Todo List** application written in **TypeScript**. It allows users to **add, complete, remove, update, list, and filter todo items** while also managing due dates.  

---

## **Features**  
- ✅ Add new tasks with a **due date**  
- ✅ Mark tasks as **completed**  
- ✅ Remove tasks  
- ✅ List all tasks  
- ✅ Filter tasks by **completion status**  
- ✅ Update task descriptions  
- ✅ Clear all completed tasks  

---

## **Getting Started**  

### **1. Prerequisites**  
Ensure you have the following installed on your machine:  
- [Node.js](https://nodejs.org/) (v16+ recommended)  
- [TypeScript](https://www.typescriptlang.org/)  

To check if you have Node.js and TypeScript installed, run:  

```sh
node -v
tsc -v
```

If TypeScript is not installed, install it globally using:  

```sh
npm install -g typescript
```

---

### **2. Clone the Repository**  
Clone this project to your local machine using Git:  

```sh
git clone https://github.com/your-username/todo-list-ts.git
cd todo-list-ts
```

---

### **3. Install Dependencies**  
If there are any dependencies (e.g., testing libraries), install them using:  

```sh
npm install
```

---

### **4. Compile the TypeScript Code**  
Run the following command to compile the TypeScript code into JavaScript:  

```sh
tsc
```

This will generate a `dist` folder containing the compiled `.js` files.  

---

### **5. Run the Application**  
You can run the compiled JavaScript file using Node.js:  

```sh
node dist/index.js
```

---

## **Code Explanation**  

### **1. TodoItem Interface**  
The `TodoItem` interface defines the structure of a **todo item**:  

```typescript
interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
}
```
- `id`: Unique identifier for the task  
- `task`: Description of the task  
- `completed`: Whether the task is completed or not  
- `dueDate`: The due date of the task  

---

### **2. TodoList Class**  
The `TodoList` class manages the **todo items**:  

```typescript
class TodoList {
    private todoItems: TodoItem[] = [];
    private nextId: number = 1;
```
- `todoItems`: Stores the list of todo items  
- `nextId`: Auto-incremented ID for new tasks  

---

### **3. Methods**  

#### **🔹 addTodo(task: string, dueDate: Date): string**  
Adds a new task to the list. The ID is generated automatically.  

```typescript
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
```

---

#### **🔹 completeTodo(id: number): string**  
Marks a task as completed.  

```typescript
completeTodo(id: number): string {
    const todo = this.todoItems.find(item => item.id === id);
    if (!todo) return `Task with ID ${id} not found.`;

    todo.completed = true;
    return `Task '${todo.task}' marked as completed.`;
}
```

---

#### **🔹 removeTodo(id: number): string**  
Removes a task from the list.  

```typescript
removeTodo(id: number): string {
    const index = this.todoItems.findIndex(item => item.id === id);
    if (index === -1) return `Task with ID ${id} not found.`;

    const [removed] = this.todoItems.splice(index, 1);
    return `Task '${removed.task}' removed successfully.`;
}
```

---

#### **🔹 listTodos(): TodoItem[]**  
Returns all tasks.  

```typescript
listTodos(): TodoItem[] {
    return this.todoItems;
}
```

---

#### **🔹 filterTodoItems(completed: boolean): TodoItem[]**  
Filters tasks by completion status.  

```typescript
filterTodoItems(completed: boolean): TodoItem[] {
    return this.todoItems.filter(item => item.completed === completed);
}
```

---

#### **🔹 updateTodoItem(id: number, newTask: string): string**  
Updates the task description.  

```typescript
updateTodoItem(id: number, newTask: string): string {
    const todo = this.todoItems.find(item => item.id === id);
    if (!todo) return `Task with ID ${id} not found.`;

    todo.task = newTask;
    return `Task ${id} updated to '${newTask}'.`;
}
```

---

#### **🔹 clearAllCompletedTodos(): string**  
Removes all completed tasks.  

```typescript
clearAllCompletedTodos(): string {
    this.todoItems = this.todoItems.filter(item => !item.completed);
    return "All completed tasks have been cleared.";
}
```

---

## **Example Usage**  
```typescript
const todoApp = new TodoList();

console.log(todoApp.addTodo("Read TypeScript docs", new Date("2025-03-10")));
console.log(todoApp.completeTodo(1));
console.log(todoApp.removeTodo(2));
console.log(todoApp.listTodos());
console.log(todoApp.filterTodoItems(true));
console.log(todoApp.updateTodoItem(1, "Complete TypeScript project"));
console.log(todoApp.clearAllCompletedTodos());
console.log(todoApp.listTodos());
```

---

## **Conclusion**  
This is a simple yet **fully functional** TypeScript-based **Todo List App** that demonstrates key TypeScript concepts like **interfaces, classes, private properties, and strict typing**.  
