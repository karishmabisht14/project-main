import { Form } from "antd";
import { useRef, useState } from "react";
import StepForm1 from "./StepForm1";
import StepForm2 from "./StepForm2";
import ShowEvents from "./ShowEvents";

const UI = {
  Form1: "form1",
  Form2: "form2",
  List: "list",
};

const MultiStepRouter = () => {
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
        <StepForm1
          back={() => setUi(UI.List)}
          form={form}
          next={() => setUi(UI.Form2)}
          payload={payload}
        />
      )}
      {ui === UI.Form2 && (
        <StepForm2
          back={() => setUi(UI.Form1)}
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

export default MultiStepRouter;
