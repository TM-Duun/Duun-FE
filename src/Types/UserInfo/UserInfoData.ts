export interface userInfoData {
    userId: string;
    username: string;
    password: string;
}

export interface userInfoExData extends userInfoData {
    phoneNum : string;
    email: string;
    address: string;
}

export interface UserState extends userInfoData {
    setUserInfo: (data: userInfoData) => void;
    resetUserInfo: () => void;
}