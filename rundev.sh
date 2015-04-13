#!/bin/bash

docker rm -f $(docker ps -f "name=tirc" -q -a)

docker build --rm=true -t trriplejay/tircapi .

docker run -d -p 3000:3000 --name tirc -e DB_URL=127.0.0.1:27017 trriplejay/tircapi
