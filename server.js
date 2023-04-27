const express = require('express');
const app = express();
const fs = require('fs');

const routesMiddlewarePath = './routes-middleware.json';
const routesMiddleware = JSON.parse(fs.readFileSync(routesMiddlewarePath));

for (const route in routesMiddleware) {
  const middlewares = routesMiddleware[route].middlewares || [];
  const router = require(`./routes/${routesMiddleware[route].router}`);

  // Agrega los middlewares a la ruta
  middlewares.forEach((middleware) => {
    app.use(route, require(`./middlewares/${middleware}`));
  });

  // Agrega el enrutador a la ruta
  app.use(route, router);
}

app.listen(3000, () => {
  console.log('Server running on port 3000');
});