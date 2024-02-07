import React from "react";
import "./index.css";
import { Button, Form } from "antd";
import { PriceInput } from "./components/PriceInput.tsx";

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values from form: ", values);
  };

  const checkPrice = (_: any, value: { number: number }) => {
    if (value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Price must be greater than zero!"));
  };

  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
      initialValues={{
        price: {
          number: 0,
        },
      }}
    >
      <Form.Item name="price" label="Price" rules={[{ validator: checkPrice }]}>
        <PriceInput />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
