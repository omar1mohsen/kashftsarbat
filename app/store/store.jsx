'use client'
const { atom } = require("recoil");


export const otpState = atom({
  key: 'otpState', 
  default: {
    phone_code:"",
    phone:""
  }, 
});

export const userState = atom({
  key: 'userState', 
  default: {
    is_logged:false,
    user: ""
  }, 
});
export const videoState = atom({
  key: 'videoState', 
  default: {
    isOpen:false
  } 
});