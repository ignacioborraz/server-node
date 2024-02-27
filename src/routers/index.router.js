import ApiRouter from "./api/index.router.api.js";
import ViewsRouter from "./views/index.view.js";
import CustomRouter from "./CustomRouter.js";

const api = new ApiRouter
const views = new ViewsRouter
class Router extends CustomRouter {
  init() {
    this.router.use("/api", api.getRouter());
    this.router.use("/", views.getRouter());
  }
}
export default Router;
