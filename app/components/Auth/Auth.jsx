'use client'
// ! ----------------------------- imports start ---------------------------------- //
import React, { useEffect, useState } from 'react'
import UserIcon from '@/assets/icons/User';
import LogoutIcon from '@/assets/icons/LogoutIcon';
import AppButton from '@/components/SharedComponents/UiComponents/Button/Button';
import AppModal from '@/components/SharedComponents/UiComponents/Modal/AppModal';
import LoginForm from '@/components/SharedComponents/Forms/LoginForm';
import RegisterForm from '@/components/SharedComponents/Forms/RegisterForm';
import ForgetPassword from '@/components/SharedComponents/Forms/ForgetPassword';
import ConfirmOtp from '@/components/SharedComponents/Forms/ConfirmOtp';
import ResetPassword from '@/components/SharedComponents/Forms/ResetPassword';
import { RecoilRoot, useRecoilState } from 'recoil';
import { userState } from '@/store/store';

import "@/styles/components/form.scss"
import { message } from 'antd';
// ! ----------------------------- imports End ---------------------------------- //

const Auth = () => {

  // ^ ----------------------------- constants start ---------------------------------- //
  const [open,setOpen]= useState(false);
  const [current, setCurrent] = useState(0);
  
  const steps = [
    {
      title: 'تسجيل دخول',
      content: <LoginForm handleClose={handleClose} setCurrent={setCurrent}/>,
      class:"login-form"
    },
    {
      title: 'انشاء حساب جديد',
      content: <RegisterForm handleClose={handleClose} setCurrent={setCurrent}/>,
    },
    {
      title: 'هل نسيت كلمة المرور؟',
      desc:"قم بادخال البريد الإلكتروني او رقم الهاتف الخاص بك لتغيير كلمة المرور",
      content: <ForgetPassword setCurrent={setCurrent}/>,
    },
    {
      title: 'تاكيد الهوية',
      desc:"ادخل الكود المرسل اليك من خلال رقم الهاتف",
      content: <ConfirmOtp setCurrent={setCurrent}/>,
    },
    {
      title: 'تغيير كلمة المرور',
      content: <ResetPassword setCurrent={setCurrent}/>,
    },
  ];
  // ^ ----------------------------- constants End ---------------------------------- //

  // & ----------------------------- methods start ---------------------------------- //
  const handleOpen = ()=> setOpen(true);

  function handleClose (){
    setOpen(false)
    setCurrent(0)
  }
  // & ----------------------------- methods end ---------------------------------- //

  return (
    // * ---------------------------- template start --------------------------------- //
    <RecoilRoot> 
      <AuthBtn handleOpen={handleOpen}/>
    <AppModal isModalVisible={open} onCancel={handleClose} footer={false} centered={true}  className={`auth-form`} >
        <h2 className='text-[28px] leading-[41.16px] text-blackText font-semibold text-center'>
          {steps[current].title}
          </h2>
        {steps[current].desc && <p className='text-center my-6 text-[#ABABAB]'>{steps[current].desc}</p>} 
        {steps[current].content}
    </AppModal>
    </RecoilRoot>
        // * ---------------------------- template end --------------------------------- //
  )
}

export default Auth

// * ----------------------------auth btn template start --------------------------------- //
const AuthBtn = ({handleOpen}) => {
  const [userData, setUserData] = useRecoilState(userState);
  const [loader,setLoader] = useState(true)

  useEffect(()=>{
    if(localStorage){
      const userData = localStorage.getItem('user');
      if(userData){
        setUserData({
          is_logged:true,
          user:userData,
        })
      }
    }
    setLoader(false)
  },[setUserData])

  const handleClick = ()=>{
    setLoader(true)
    if(userData.is_logged){
      setUserData({
        is_logged:false,
        user: '',
      })
      localStorage.removeItem('user')
      message.success('تم تسجيل الخروج')
    }else{
      handleOpen()
    }
    setTimeout(() => {
      setLoader(false)      
    }, 500);
  }
  return (
    <>
      <AppButton onClick={handleClick} loading={loader} className="md:min-w-[50px] md:min-h-[50px]">
          {loader ? "" : userData.is_logged ? <LogoutIcon/>:<UserIcon /> } 
      </AppButton>
    </>
  )
}

