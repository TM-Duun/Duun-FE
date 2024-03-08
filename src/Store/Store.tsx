import { create } from "zustand";

// 전역 관리 단계 들어갈 때부터 시작, 이것은 그냥 임의의 코드임
const useStore = create(set => ({
    bears: 0,
    setBears: (n: number) => set({ bears: n }),
    setCount: (n: number) => set({ count: n }),
}))

export default useStore;