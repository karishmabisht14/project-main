import { Form } from "antd";
import { useRef, useState } from "react";
import ShowEvents from "./ShowEvents";
import ShowForm from "./ShowForm";

const UI = {
  Form1: "form1",
  List: "list",
};

const SingleStepRouter = () => {
  const [updatedCount, setUpdatedCount] = useState(0);
  const [ui, setUi] = useState(UI.List);
  const [form] = Form.useForm();

  let payload = useRef({
    operation: "",
    data: {},
  });

  const initFormData = () => {
    payload.current.data
      ? form.setFieldsValue(payload.current.data)
      : form.resetFields();
  };
  return (
    <>
      {ui === UI.Form1 && (
        <ShowForm
          cancel={() => setUi(UI.List)}
          form={form}
          success={() => setUi(UI.List)}
          payload={payload}
          updatedCount={updatedCount}
          setUpdatedCount={setUpdatedCount}
        />
      )}
      {ui === UI.List && (
        <ShowEvents
          showCreateUpdateForm={() => setUi(UI.Form1)}
          payload={payload}
          initFormData={initFormData}
          updatedCount={updatedCount}
        />
      )}
    </>
  );
};

export default SingleStepRouter;
