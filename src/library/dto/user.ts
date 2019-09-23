export interface IUserGetResponse {
    users: IUserModel[]
}

export interface IUserModel {
    id: string;
    name: string;
}

export interface IUserCreateResponse {
    createdUuid: string;
}

export interface IUserGetDetailResponse {
    user: IUserModel;
}