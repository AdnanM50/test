import { get, patchForm, post } from "./api";
export const postRegister=(data)=>post('/user/registration',data);
export const sendOtp=(data)=>post('/user/send-otp',data);
export const verifyOTP=(data)=>post('/user/send-otp',data);
export const postResetPassword=(data)=>post('/user/reset-password',data);
export const postLogin=(data)=>post('/user/login',data);
export const findUser=(data)=>get('/user/find',data);
export const postVerifyOtp = (data) => post("/user/verify-otp", data);
export const fetchUser=(data)=>get('/user',data);
export const updateUser=(data)=>patchForm('/user',data);
export const updatePassword=(data)=>post('/user/password',data);
export const postRide=(data)=>post('/ride/request',data)
