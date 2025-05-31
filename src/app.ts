import { AppRouter } from "./presentation/router";
import { Server } from "./presentation/server";

(() => {
  app();
})();

function app() {
  const server = new Server({
    port: 3000,
    router: AppRouter.router,
  });

  server.start();
}
