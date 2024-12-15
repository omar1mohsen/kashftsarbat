import axiosInstance from "./instance";


export const getHomeData = () => {
    return axiosInstance.get("/home");
};

export const loginFunc = (data) => {
    return axiosInstance.post("/login",data);
};

export const registerFunc = (data) => {
    return axiosInstance.post("/register",data);
};

export const sendOtp = (data) => {
    return axiosInstance.post("/send-code",data);
};

export const verifyOtp = (data) => {
    return axiosInstance.post("/check-code",data);
};

export const resetPassword = (data) => {
    return axiosInstance.patch("/reset-password",data);
};
