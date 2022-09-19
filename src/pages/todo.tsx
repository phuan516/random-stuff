import React from "react";
import { useSession } from "next-auth/react";

import AddTodoItem from "../components/add-todo-item";
import TodoList from "../components/todo-list";
import { adminEmail } from "../lib/admin-email";
import Unauthorize from "../components/unauthorize";
import AccessDenied from "../components/access-denied";
import SideBar from "../components/side-bar/side-bar";

const Todo = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <Unauthorize />;
  }

  return (
    <>
      <SideBar />
      {session.user.email === adminEmail ? (
        <div className="flex w-full ml-20">
          <AddTodoItem />
          <TodoList />
        </div>
      ) : (
        <AccessDenied />
      )}
    </>
  );
};

export default Todo;
