import Route from "./Route";

export default class Router {
    routes: Route[];
    history: History;
    _currentRoute: Route | null;
    _rootQuery: string;
    private static __instance: Router;


    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    use(pathname: string, block: any) {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery});

        this.routes.push(route);
        return this;
    }

    start() {
        // Реагируем на изменения в адресной строке и вызываем перерисовку
        window.onpopstate = () => {
            this._onRoute(window.location.pathname);
        };

        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }
        if (this._currentRoute) {
            this._currentRoute.leave();
        }
        this._currentRoute = route;
        route.render();
    }

    getCurrentRoute() {
        return this._currentRoute;
    }

    go(pathname: string) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }

    getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }
}
