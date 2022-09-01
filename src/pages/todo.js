import AddTodoItem from "../components/add-todo-item";
import TodoList from "../components/todo-list";

const Todo = () => {
  return (
    <div className="flex">
      <AddTodoItem />
      <TodoList />
    </div>
  );
};

export default Todo;
