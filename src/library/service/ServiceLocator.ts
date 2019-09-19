import {MessageService} from "@/library/service/message/MessageService";
import {RouteService} from "@/library/service/route/RouteService";

export default class ServiceLocator {
    private static _instance: ServiceLocator = new ServiceLocator();

    public static get instance(): ServiceLocator {
        return this._instance;
    }

    public readonly messageService: MessageService = new MessageService();
    public readonly routeService: RouteService = new RouteService();
}