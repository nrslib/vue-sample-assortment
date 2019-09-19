export interface IAccountInfoModel {
    userInfo: IAccountUserInfoModel;
}

export interface IAccountUserInfoModel {
    id: string;
    name: string;
    role: string;
}