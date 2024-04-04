import { create } from "zustand";

interface LoginData {
    userId : string;
    setUserId: (id: string) => void;
}

const StoreLoginInfo = create<LoginData>(set => ({
    userId: "",
    setUserId: (id: string) => set({ userId: id }),
}));

export default StoreLoginInfo;