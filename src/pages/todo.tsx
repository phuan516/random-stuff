import React from "react";
import { useSession } from "next-auth/react";

import AddTodoItem from "../components/add-todo-item";
import TodoList from "../components/todo-list";
import { adminEmail } from "../lib/admin-email";
import Unauthorize from "../components/unauthorize";
import AccessDenied from "../components/access-denied";
import Layout from "../components/layout";

const Todo = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <Layout>
        <Unauthorize />
      </Layout>
    );
  }

  return (
    <Layout>
      {session.user.email === adminEmail ? (
        <div className="flex m-4">
          <AddTodoItem />
          <TodoList />
        </div>
      ) : (
        <AccessDenied />
      )}
    </Layout>
  );
};

export default Todo;
