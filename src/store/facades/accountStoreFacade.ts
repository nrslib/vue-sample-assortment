import store from './../../store';
import {AccountRole} from "@/library/account/AccountRole";

class AccountStore {
    public hasInfo(): boolean {
        return store.getters['account/hasInfo'];
    }

    public dropAccountInfo(): void {
        store.commit('account/dropAccountInfo');
    }

    public loadAccountInfo(): Promise<void> {
        return store.dispatch('account/loadAccountInfo');
    }

    public isAllowed(role: AccountRole): boolean {
        return store.getters['account/isAllowed'](role);
    }

    public isAllowedAny(roles: AccountRole[]): boolean {
        return store.getters['account/isAllowedAny'](roles);
    }
}

const accountStore = new AccountStore();

export default accountStore;
