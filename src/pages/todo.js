const addTodoItem = async (item) => {
  const response = await fetch(`/api/add-todo-item`, {
    method: "POST",
    body: JSON.stringify(item),
  });

  console.log(response);
};

const Todo = () => {
  return (
    <div>
      <button
        onClick={() =>
          addTodoItem({
            title: "test adding item",
            dueDate: new Date(),
            labelsToAdd: ["dashboard", "assignments"],
          })
        }
      >
        add
      </button>
    </div>
  );
};

export default Todo;
