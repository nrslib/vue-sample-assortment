export enum AccountRole {
    Administrator = "administrator",
    User = "user"
}

export function checkAllowed(myRole: AccountRole, role: AccountRole) {
    if (myRole === AccountRole.Administrator) {
        return true;
    }

    if (myRole === role) {
        return true;
    }

    return false;
}
