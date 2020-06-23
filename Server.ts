import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';

import container from './ioc.config';

// start the server
let server = new InversifyExpressServer(container);

server
  .setConfig((app) => {})
  .setErrorConfig((app) => {
    app.use((err, req, res, next) => {
      console.log("Error handling...", err);
      res.status(err.status).json({message: err.message});
    })
  });

let serverInstance = server.build();
serverInstance.listen(3000);

console.log('Server started on port 3000 :)');
