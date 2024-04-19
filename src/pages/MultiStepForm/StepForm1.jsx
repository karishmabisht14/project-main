import { Form, Input, Button } from "antd";

const StepForm1 = ({ form, back, next, payload }) => {
  function showNextForm(values) {
    payload.current.data = { ...payload.current.data, ...values };
    // console.log("payload", payload);
    next();
  }

  return (
    <>
      <h1>Step Form 1</h1>
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
        onFinish={showNextForm}
        form={form}
        autoComplete="off"
      >
        <Form.Item
          label="Event Name"
          name="eventName"
          rules={[
            {
              required: true,
              message: "Please input event name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Event Duration"
          name="Duration"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={back}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default StepForm1;
