// ! ----------------------------- imports start ---------------------------------- //
import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import AppButton from "../UiComponents/Button/Button";
import { verifyOtp } from "@/services/ApiHandler";
import { otpState } from "@/store/store";
import { useRecoilState } from "recoil";
// ! ----------------------------- imports end ---------------------------------- //

const ConfirmOtp = ({ setCurrent }) => {
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
      const { data } = await verifyOtp(values);
      if (data?.status == "success") {
        setPhoneData({
          ...phoneData,
          code: values.code,
        })
        message.success(data?.message);
        setCurrent(4);
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="gap-4 dark:text-white login-form"
    >
      <Form.Item
        label="تعديل رقم الهاتف"
        className="otp-form-item"
        name="code"
        rules={[{ required: true, message: "الكود مطلوب" }]}
      >
        <Input.OTP length={4} formatter={(str) => str.toUpperCase()} />
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

export default ConfirmOtp;
