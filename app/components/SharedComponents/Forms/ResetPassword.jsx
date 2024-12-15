// ! ----------------------------- imports start ---------------------------------- //
import React, { useState } from "react";
import { Form, Input, message } from "antd";
import AppButton from "../UiComponents/Button/Button";
import { resetPassword } from "@/services/ApiHandler";
import { useRecoilState } from "recoil";
import { otpState } from "@/store/store";
// ! ----------------------------- imports end ---------------------------------- //

const ResetPassword = ({ setCurrent }) => {
  // ^ ----------------------------- constants start ---------------------------------- //
  const [loader, setLoader] = useState(false);
  const [form] = Form.useForm(); 
  const [phoneData, setPhoneData] = useRecoilState(otpState);
  // ^ ----------------------------- constants end ------------------------------------ //

// ! ----------------------------- functions start ---------------------------------- //

  const onFinish = async (values) => {
    try {
      setLoader(true);
      values.phone = phoneData.phone;
      values.phone_code = phoneData.phone_code;
      values.code = phoneData.code;
       const { data } = await resetPassword(values);

      if (data?.status === "success") {
        message.success(data?.message);
        setCurrent(0);
      } else {
        message.error(data?.message);
      }
    } catch (error) {
      console.error("Error:", error);
      message.error(error?.response?.data?.message || "حدث خطأ ما");
    } finally {
      setLoader(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };
// ! ----------------------------- functions end ---------------------------------- //

// * ---------------------------- template start --------------------------------- //

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="gap-4 dark:text-white login-form"
    >
      <Form.Item
        label="كلمة المرور"
        name="password"
        rules={[{ required: true, message: "كلمة المرور مطلوبة" }]}
      >
        <Input.Password placeholder="أدخل كلمة المرور" />
      </Form.Item>

      <Form.Item
        label="تاكيد كلمة المرور"
        name="password_confirmation"
        dependencies={["password"]} // Ensure dependency on the password field
        rules={[
          { required: true, message: "تاكيد كلمة المرور مطلوبة" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (value && value !== getFieldValue("password")) {
                return Promise.reject(new Error("يجب ان تتطابق كلمة المرور"));
              }
              return Promise.resolve();
            },
          }),
        ]}
      >
        <Input.Password placeholder="أدخل تاكيد كلمة المرور" />
      </Form.Item>

      <Form.Item>
        <AppButton loading={loader} htmlType="submit" className="main-btn">
            ارسال
        </AppButton>
      </Form.Item>

    </Form>
  );
  // * ---------------------------- template end --------------------------------- //

};

export default ResetPassword;
