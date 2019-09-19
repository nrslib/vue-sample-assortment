import {AccountInfo, AccountUserInfo} from "@/library/account/AccountInfo";
import {AccountRole, checkAllowed} from "@/library/account/AccountRole";
import {DefineActions, DefineGetters, DefineMutations} from "vuex-type-helper";
import {IAccountInfoModel} from "@/library/account/AccountInfoModel";
import {IAccountGetResponse} from "@/library/dto/account";
import wraxios from "@/library/net/wraxios";

export interface IAccountState {
    accountInfo: AccountInfo | null;
}

export interface IAccountGetters {
    hasInfo: boolean;
    name: string | null;
    role: AccountRole | null;
    isAllowed: (role: AccountRole) => boolean;
    isAllowedAny: (roles: AccountRole[]) => boolean;
}

export interface IAccountMutations {
    updateAccountInfo: {
        accountInfo: IAccountInfoModel;
    };
    dropAccountInfo: null;
}

export interface IAccountActions {
    loadAccountInfo: null;
}

export const accountState: IAccountState = {
    accountInfo: null,
};

export const accountGetters: DefineGetters<IAccountGetters, IAccountState> = {
    hasInfo: state => !!state.accountInfo,
    name: (state, getters) => getAccountDataOrDefault(state, getters, account => account.userInfo.displayName),
    role: (state, getters) => getAccountDataOrDefault(state, getters, account => account.userInfo.role),
    isAllowed: (state, getters) => (role: AccountRole) =>
        getAccountDataOr(state, getters, false, account => checkAllowed(account.userInfo.role, role)),
    isAllowedAny: (state, getters) => (roles: AccountRole[]) =>
        roles.some(x =>
            getAccountDataOr(state, getters, false, account => checkAllowed(account.userInfo.role, x)))
};

export const accountMutations: DefineMutations<IAccountMutations, IAccountState> = {
    updateAccountInfo(state, {accountInfo}){
        if (!accountInfo) {
            state.accountInfo = null;
        } else {
            const userInfo = new AccountUserInfo(
                accountInfo.userInfo.id,
                accountInfo.userInfo.name,
                <AccountRole>accountInfo.userInfo.role
            );
            state.accountInfo = new AccountInfo(
                userInfo
            );
        }
    },
    dropAccountInfo(state) {
        state.accountInfo = null;
    }
};

export const accountActions: DefineActions<IAccountActions, IAccountState, IAccountMutations, IAccountGetters> = {
    async loadAccountInfo(context) {
        return wraxios.get<IAccountGetResponse>("/account")
            .then(res => {
                const data = res.data;
                if (!!data) {
                    const accountInfo: IAccountInfoModel = {
                        userInfo: {
                            id: data.id,
                            name: data.name,
                            role: data.role
                        }
                    };
                    context.commit('updateAccountInfo', {accountInfo: accountInfo})
                }
            });
    }
};

export const index = {
    namespaced: true,
    state: accountState,
    getters: accountGetters,
    mutations: accountMutations,
    actions: accountActions,
};

function getAccountDataOrDefault<T>(state: IAccountState, getters: IAccountGetters, selector: (_: AccountInfo) => T): T | null {
    if (!getters.hasInfo) {
        return null;
    }

    return selector(state.accountInfo!);
}

function getAccountDataOr<T>(state: IAccountState, getters: IAccountGetters, defaultValue: T, selector: (_: AccountInfo) => T): T {
    if (!getters.hasInfo) {
        return defaultValue;
    }

    return selector(state.accountInfo!);
}
