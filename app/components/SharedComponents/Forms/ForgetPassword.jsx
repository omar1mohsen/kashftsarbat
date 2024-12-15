// ! ----------------------------- imports start ---------------------------------- //
import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import AppButton from "../UiComponents/Button/Button";
import PhoneInput from "../UiComponents/Inputs/PhoneInput";
import { sendOtp } from "@/services/ApiHandler";
import { useRecoilState } from "recoil";
import {otpState} from "@/store/store";
// ! ----------------------------- imports end ---------------------------------- //

const ForgetPassword = ({setCurrent}) => {
  // ^ ----------------------------- constants start ---------------------------------- //
  const [loader, setLoader] = useState(false);
  const [form] = Form.useForm();
  const [phoneData, setPhoneData] = useRecoilState(otpState);
  // ^ ----------------------------- constants end ------------------------------------ //

  // ! ----------------------------- functions start ---------------------------------- //
  const onFinish = async (values) => {
    try {
      setLoader(true);
     const {data} = await sendOtp(values);
     if(data?.status == "success"){
        setPhoneData({
            phone: values.phone,
            phone_code: values.phone_code
        })
         message.success(data?.message);
         setCurrent(3)
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

      <Form.Item>
        <AppButton loading={loader} htmlType="submit" className="main-btn">
            ارسال   
        </AppButton>
      </Form.Item>

    </Form>
  );
  // * ---------------------------- template start --------------------------------- //

};

export default ForgetPassword;
