import AddTodoItem from "../components/add-todo-item";
import LabelSetting from "../components/label-settings";
import TodoItemList from "../components/todo-item-list";

const Todo = () => {
  return (
    <div className="flex">
      <div>
        <AddTodoItem />
        <LabelSetting />
      </div>
      <TodoItemList />
    </div>
  );
};

export default Todo;
