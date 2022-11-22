'use strict';

import * as url from 'url';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export function createServer() {
  const express = require('express');
  const cors = require('cors');
  const app = express();
  app.use(cors());

  app.use(express.static(`${__dirname}/data`));

  return app;
};
