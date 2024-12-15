import {  notification } from 'antd';


export const logOut = (isInterceptors) => {
    return new Promise((resolve, reject) => {
        if (localStorage.getItem('is_login')) {
            localStorage.removeItem("is_login");
            let timer = 0;
            if (isInterceptors) {
                timer = 3000;
                notification.open({
                    type: 'error',
                    message: 'Session has expired',
                    description: 'Your session has been expired, you have been logged out',
                    duration: 3,
                    className: 'expiration-notification',
                });
            }
            setTimeout(() => {
                // Simulate an asynchronous operation (e.g., API call) with a timeout
                window.location.href = '/';
            }, timer);
        }
    });
};
