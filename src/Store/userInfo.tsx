import { create } from "zustand";
import { UserState } from "../Types/UserInfo/UserInfoData";

const StoreSignupInfo = create<UserState>((set) => ({
    userId: "",
    username: "",
    password: "",
    setUserInfo: (data) => set((state) => ({ ...state, ...data })),
    resetUserInfo: () => set(() => ({ userId: "", username: "", password: "" }))
}));

export default StoreSignupInfo;