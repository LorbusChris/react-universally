/* @flow */
/* eslint-disable no-console */

// This grants us source map support, which combined with our webpack source
// maps will give us nice stack traces.
import 'source-map-support/register';

import express from 'express';
import compression from 'compression';
import { resolve as pathResolve } from 'path';
import appRootDir from 'app-root-dir';
import keystoneSingleton from './keystone';
import reactApplication from './middleware/reactApplication';
import security from './middleware/security';
import clientBundle from './middleware/clientBundle';
import serviceWorker from './middleware/serviceWorker';
import offlinePage from './middleware/offlinePage';
import errorHandlers from './middleware/errorHandlers';
import config from '../../config';
import importModels from './models/';
import { nav } from '../../config/keystoneConfig';

// Create our express based server.
const app = express();

// Don't expose any software information to potential hackers.
app.disable('x-powered-by');

// Security middlewares.
app.use(...security);

// Gzip compress the responses.
app.use(compression());

// When in production mode, we will serve our service worker which was generated
// by the offline-plugin webpack plugin. See the webpack plugins section for
// more information.
// Note: the service worker needs to be served from the http root of your
// application for it to work correctly.
if (process.env.NODE_ENV === 'production'
  && config.serviceWorker.enabled) {
  app.get(`/${config.serviceWorker.fileName}`, serviceWorker);
  app.get(
    `${config.bundles.client.webPath}${config.serviceWorker.offlinePageFileName}`,
    offlinePage,
  );
}

// Create an express router middleware for our react application.
// This Router will be mounted onto keystone
const router = express();

// Configure serving of our client bundle.
router.use(config.bundles.client.webPath, clientBundle);

// Configure static serving of our "public" root http path static files.
// Note: these will be served off the root (i.e. '/') of our application.
router.use(express.static(pathResolve(appRootDir.get(), config.publicAssetsPath)));

// The React application middleware.
router.get('*', reactApplication);

// Error Handler middlewares.
router.use(...errorHandlers);

const keystone = keystoneSingleton.keystone;

// Initialize Keystone
keystone.set('routes', router);
importModels();
keystone.set('nav', nav);
keystone.initExpressApp(app);

// Open Database Connection
keystone.openDatabaseConnection();

// Create http(s) listener(s) for our keystone express app.
// let l be the listener to be exported.
let l;
if (process.env.NODE_ENV === 'production') {
  const ssl = keystone.get('ssl');
  // HTTP Server
  if (ssl !== 'only') {
    require('../../node_modules/keystone/server/startHTTPServer')(keystone, keystone.app, (err, msg) => console.log(`HTTP Server listening: ${msg}`));
    l = keystone.httpServer;
  }
  // HTTPS Server
  if (ssl) {
    require('../../node_modules/keystone/server/startSecureServer')(keystone, keystone.app, (err, msg) => console.log(`HTTPS Server listening: ${msg}`));
    l = keystone.httpsServer;
  }
} else {
  // Dev Server
  l = keystone.app.listen(config.port, config.host, () =>
    console.log(`Development Server listening on port ${config.port}`),
  );
}
const listener = l;

// We export the listener as it will be handy for our development hot reloader,
// or for exposing a general extension layer for application customisations.
export default listener;
