export enum AccountRole {
    Administrator = "administrator",
    Advanced = "advanced",
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
