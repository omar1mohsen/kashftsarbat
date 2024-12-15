// ! ----------------------------- imports start ---------------------------------- //
import React, { useState } from "react";
import { Form, Input, message } from "antd";
import AppButton from "../UiComponents/Button/Button";
import PhoneInput from "../UiComponents/Inputs/PhoneInput";
import { registerFunc } from "@/services/ApiHandler";
import NameIcon from "@/assets/icons/NameIcon";
import { userState } from "@/store/store";
import { useRecoilState } from "recoil";
// ! ----------------------------- imports end ------------------------------------- //
const RegisterForm = ({ handleClose, setCurrent }) => {
  // ^ ----------------------------- constants start ---------------------------------- //
  const [loader, setLoader] = useState(false);
  const [form] = Form.useForm();
  const [userData, setUserData] = useRecoilState(userState);
  // ^ ----------------------------- constants end ---------------------------------- //

  // ! ----------------------------- functions start ---------------------------------- //

  const onFinish = async (values) => {
    try {
      setLoader(true);
      const { data } = await registerFunc(values);
      if (data?.status === "success") {
        localStorage.setItem("user", "logged in");
        setUserData({
          is_logged: true,
          user: "logged in",
        });
        message.success("Register Successful");
        handleClose();
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
      <Form.Item label="الاسم" name="full_name">
        <Input prefix={<NameIcon />} />
      </Form.Item>

      <PhoneInput form={form} />

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
        dependencies={["password"]}
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
          انشاء حساب جديد
        </AppButton>
      </Form.Item>

      <span className="flex items-center justify-center gap-1 text-base -mt-2 text-blackText w-full">
        لديك حساب بالفعل ؟
        <strong
          className="text-main-300 cursor-pointer"
          onClick={() => setCurrent(0)}
        >
          تسجيل دخول
        </strong>
      </span>
    </Form>
  );
  // * ---------------------------- template end --------------------------------- //

};

export default RegisterForm;
