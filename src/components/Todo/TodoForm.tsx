import { Form, FormLayout, TextField, Checkbox } from "@shopify/polaris";
import { observer } from "mobx-react";
import React, { FormEvent, useContext } from "react";
import RootContext from "src/context/RootContext";

type TWrapProps = {
  submit: (event: FormEvent<HTMLFormElement>) => void;
};
const TodoForm: React.FC<TWrapProps> = observer(({ submit }: TWrapProps) => {
  const store = useContext(RootContext);
  const { title, content, check, setTitle, setContent, toggleCheck } =store.detailTodo;
  
  return (
    <Form onSubmit={submit}>
      <FormLayout>
        <TextField
          label="Tiêu đề"
          value={title}
          onChange={(value) => setTitle(value)}
          placeholder="Bạn đang nghĩ gì..."
        />
      </FormLayout>
      <FormLayout>
        <TextField
          label="Nội dung"
          value={content}
          onChange={(value) => setContent(value)}
          placeholder="Nhập nội dung bạn muốn ..."
          multiline={4}
        />
      </FormLayout>
      <FormLayout>
        <Checkbox
          label="Trạng thái (Y/n)"
          checked={check}
          onChange={(newChecked) => toggleCheck(newChecked)}
        />
      </FormLayout>
    </Form>
  );
});
export default TodoForm;
