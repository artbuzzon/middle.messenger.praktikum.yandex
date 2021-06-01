import Route from './Route';

const NAV_A_SELECTOR = 'a[data-navigation]';

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

    use(pathname: string, block: any): Router {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery});

        this.routes.push(route);
        return this;
    }

    start(): void {
        // Реагируем на изменения в адресной строке и вызываем перерисовку
        window.onpopstate = () => {
            this._onRoute(window.location.pathname);
        };

        document
            .body
            .addEventListener('click', e => {
                const {target} = e;
                // @ts-ignore
                if (target.matches(NAV_A_SELECTOR)) {
                    e.preventDefault();
                    // @ts-ignore
                    this.go(target.pathname);
                }
            });

        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string): void {
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

    getCurrentRoute(): Route | null {
        return this._currentRoute;
    }

    go(pathname: string): void {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    getRoute(pathname: string): Route | undefined {
        return this.routes.find(route => route.match(pathname));
    }
}
