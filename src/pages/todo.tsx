import React from "react";
import { useSession } from "next-auth/react";

import AddTodoItem from "../components/add-todo-item";
import TodoList from "../components/todo-list";
import { adminEmail } from "../lib/admin-email";

const Todo = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Sign in to view this page</p>;
  }

  return (
    <>
      {session.user.email === adminEmail ? (
        <div className="flex w-full">
          <AddTodoItem />
          <TodoList />
        </div>
      ) : (
        <p>Access Denied</p>
      )}
    </>
  );
};

export default Todo;
