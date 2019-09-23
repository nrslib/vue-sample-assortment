function allowedRoles(roles) {
    if (roles === void 0) {
        return ["administrator"];
    }
    if (typeof roles === 'string') {
        return [roles];
    }

    return roles;
}

export default function (roles) {
    return function (request, response, next) {
        if (!request.session.user) {
            response.status(403).send();
            return;
        }
        const role = request.session.user.role;
        if (role === 'administrator') {
            next();
            return;
        }

        roles = allowedRoles(roles);
        if (roles.some(x => x === role)) {
            next();
        } else {
            response.status(403).send();
        }
    }
};
