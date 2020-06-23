import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';

import container from './ioc.config';
import express from "express";
import * as swagger from "swagger-express-ts";
import * as bodyParser from "body-parser";

// start the server
const server = new InversifyExpressServer(container);

server
  .setConfig((app) => {
    app.use( '/api-docs/swagger' , express.static( 'swagger' ) );
    app.use( '/api-docs/swagger/assets' , express.static( 'node_modules/swagger-ui-dist' ) );
    app.use( bodyParser.json() );
    app.use( swagger.express(
      {
        definition : {
          info : {
            title : "My api" ,
            version : "1.0"
          } ,
          externalDocs : {
            url : "My url"
          }
          // Models can be defined here
        }
      }
    ));
  })
  .setErrorConfig((app) => {
    app.use((err, req, res, next) => {
      console.error("Error handling...", err);
      res.status(err.status).json({message: err.message});
    })
  });

const serverInstance = server.build();
serverInstance.listen(3000);

console.info('Server started on port 3000 :)');
