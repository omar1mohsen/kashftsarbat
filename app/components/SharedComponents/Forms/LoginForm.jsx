// ! ----------------------------- imports start ---------------------------------- //
import React, { useState } from "react";
import { Form, Input, message } from "antd";
import AppButton from "../UiComponents/Button/Button";
import PhoneInput from "../UiComponents/Inputs/PhoneInput";
import { loginFunc } from "@/services/ApiHandler";
import { userState } from "@/store/store";
import { useRecoilState } from "recoil";
// ! ----------------------------- imports end ---------------------------------- //

const LoginForm = ({handleClose,setCurrent}) => {
  // ^ ----------------------------- constants start ---------------------------------- //
  const [loader, setLoader] = useState(false);
  const [form] = Form.useForm();
  const [userData, setUserData] = useRecoilState(userState);
  // ^ ----------------------------- constants end ------------------------------------ //
// ! ----------------------------- functions start ---------------------------------- //
  const onFinish = async (values) => {
    try {
      setLoader(true);
     const {data} = await loginFunc(values);
     if(data?.status == "success"){
        localStorage.setItem("user",data?.data);
        setUserData({
          is_logged:true,
          user:data?.data
        });
        message.success('Login Successful');
        handleClose()
     }else{
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="gap-4 dark:text-white login-form"
    >
      <PhoneInput form={form} />
      <Form.Item
        label="كلمة المرور"
        name="password"
        rules={[{ required: true, message: "كلمة المرور مطلوبة" }]}
      >
        <Input.Password placeholder="أدخل كلمة المرور" />
      </Form.Item>
        <button className="block text-main-300 font-semibold text-base -mt-2 mb-8" onClick={()=>setCurrent(2)}>نسيت كلمة المرور؟</button>

      <Form.Item>
        <AppButton loading={loader} htmlType="submit" className="main-btn">
          تسجيل الدخول
        </AppButton>
      </Form.Item>
      <span className="flex items-center justify-center gap-1 text-base -mt-2 text-blackText w-full" >
            ليس لديك حساب ؟ 
            <strong className="text-main-300 cursor-pointer" onClick={()=>setCurrent(1)}> انشاء حساب جديد</strong>
        </span>
    </Form>
  );
  // * ---------------------------- template end --------------------------------- //

};

export default LoginForm;
