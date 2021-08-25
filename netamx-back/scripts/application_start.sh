#!/bin/bash
forever stopall
fuser -k 5001/tcp
cd /var/www/netamx-backend-api
forever start -c node_modules/.bin/babel-node server/server.js