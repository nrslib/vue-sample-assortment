import {Route} from "vue-router";
import accountStoreFacade from "@/store/facades/accountStoreFacade";
import ServiceLocator from "@/library/service/ServiceLocator";
import {AccountRole} from "@/library/account/AccountRole";
import {MessageType} from "@/library/service/message/MessageType";
import i18n from "@/plugins/i18n";

/**
 * true: transferred
 * @param to
 * @param from
 * @param next
 */
async function transferLoginWhenNoAuth(to: Route, from: Route, next: Function): Promise<boolean> {
    if (isAuthorised(to)) {
        if (!accountStoreFacade.hasInfo()) {
            await accountStoreFacade.loadAccountInfo();
            if (!accountStoreFacade.hasInfo()) {
                if (!ServiceLocator.instance.routeService.endure) {
                    ServiceLocator.instance.routeService.releaseOverwrite();
                    ServiceLocator.instance.routeService.saveBackRoute(to);
                    next({name: 'login'});
                    return true;
                }
            }
        }
    }
    return false;
}

async function transferWhenNoRole(to: Route, from:Route, next: Function): Promise<boolean> {
    if (!isAuthorised(to)) {
        return false;
    }

    if (isAnonymous(to)) {
        return false;
    }

    if (isAllowed(to)) {
        return false;
    }

    const showMessage =  from.name === 'top'
        ? (message: string) => ServiceLocator.instance.messageService.addMessage(MessageType.Error, message)
        : (message: string) => ServiceLocator.instance.messageService.reserve(MessageType.Error, message);
    const mesasge = i18n.t("common.routing.no-authority").toString();
    showMessage(mesasge);
    next({name: "top"});
    return true;
}

function isAuthorised(to: Route): boolean {
    return to.matched.every(record => !record.meta.noAuth);
}

function isAnonymous(to: Route): boolean {
    return to.matched.some((record => !!record.meta && record.meta.role === 'any'));
}

function isAllowed(to: Route): boolean {
    return to.matched.some(record => {
        if (!record || !record.meta) {
            return false;
        }

        const metaRole = record.meta.role;
        if (metaRole instanceof Array) {
            const allowedRoles = <AccountRole[]>metaRole;
            return accountStoreFacade.isAllowedAny(allowedRoles);
        } else {
            const allowedRole = !!metaRole ? <AccountRole>metaRole : AccountRole.Administrator;
            return accountStoreFacade.isAllowed(allowedRole);
        }
    })
}

export default async function globalBeforeEach(to: Route, from: Route, next: Function) {
    if (await transferLoginWhenNoAuth(to, from, next)) {
        return;
    }

    if (await transferWhenNoRole(to, from, next)) {
        return;
    }

    next();
}