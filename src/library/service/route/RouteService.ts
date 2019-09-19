import {Route} from "vue-router";

export class RouteService {
    private _backRoute: Route | null = null;
    private _endure: boolean = false;

    public get endure(): boolean {
        return this._endure;
    }

    public get hasBackRoute(): boolean {
        return !!this._backRoute;
    }

    public pathToBack(): string {
        return this._backRoute !== null ? this._backRoute.fullPath : "/";
    }

    public saveBackRoute(route: Route): void {
        this._backRoute = route;
    }

    public clear(): void {
        this._backRoute = null;
    }

    public endureOverwrite() {
        this._endure = true;
    }

    public releaseOverwrite() {
        this._endure = false;
    }
}
