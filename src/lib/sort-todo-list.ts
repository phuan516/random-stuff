const sortTodoList = (todoList) => {
  const ReadyList = todoList.filter((todoItem) => todoItem.status === "Ready");
  const workingList = todoList.filter(
    (todoItem) => todoItem.status === "Working"
  );
  const doneList = todoList.filter((todoItem) => todoItem.status === "Done");

  ReadyList.sort((a, b) => {
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  });

  workingList.sort((a, b) => {
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  });

  doneList.sort((a, b) => {
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  });

  return [...ReadyList, ...workingList, ...doneList];
};
export { sortTodoList };
