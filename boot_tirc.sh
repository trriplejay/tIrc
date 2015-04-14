#!/bin/bash -x
cd /home/proj/tircapi

npm install

if [ $RUN_MODE = dev ]
then
echo forever is watching file changes
forever -w -v tircapi-app.js
else
echo forever is NOT watching file changes
node tircapi-app.js
fi
