import {AccountRole} from "@/library/account/AccountRole";

export class AccountInfo {
    public constructor(public readonly userInfo: AccountUserInfo) {}
}

export class AccountUserInfo {
    public constructor(public readonly id: string,
                       public readonly displayName: string,
                       public readonly role: AccountRole
    ) {
    }
}