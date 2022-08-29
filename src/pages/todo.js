import AddTodoItem from "../components/add-todo-item";
import TodoItemList from "../components/todo-item-list";

const Todo = () => {
  return (
    <div className="flex">
      <AddTodoItem />
      <TodoItemList />
    </div>
  );
};

export default Todo;
