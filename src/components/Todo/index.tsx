import { Page, Card } from "@shopify/polaris";
import React from "react";
import { observer } from "mobx-react";

import TodoList from "./TodoList";

const TodoComponent = observer(() => {
  return (
    <Page title="Todo App" primaryAction={{ content: "+", url: "/todo/create" }}>
      <Card>
        <TodoList />
      </Card>
    </Page>
  );
});
export default TodoComponent;
