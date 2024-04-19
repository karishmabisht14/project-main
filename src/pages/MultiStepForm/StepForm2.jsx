import { Button, Form, Input } from "antd";
import { addFunction, updateFunction } from "../../services/events/events";
const StepForm2 = ({ back, form, success, payload }) => {
  const submitForm = (values) => {
    payload.current.data = { ...payload.current.data, ...values };
    // console.log("payload", payload);

    if (payload.current.operation === "ADD") {
      payload.current.data.eventId = Math.random();
      addFunction(payload.current.data).then((events) => {
        success();
      });
    } else {
      updateFunction(payload.current.data, "eventId").then((events) => {
        success();
      });
    }
  };
  return (
    <>
      <h2>Form 2</h2>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={submitForm}
        form={form}
        autoComplete="off"
      >
        <Form.Item
          label="Event Price"
          name="Price"
          rules={[
            {
              required: true,
              message: "Please input event name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={back}>
            Previous
          </Button>
          <Button type="primary" htmlType="submit">
            {payload.current.operation === "ADD" ? "Add Event" : "Update Event"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default StepForm2;
