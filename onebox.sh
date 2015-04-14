#!/bin/bash -x

wd=$(pwd)
ids=$(sudo docker ps -a | grep tirc | awk '{print $1}')

sudo docker stop -t=0 ${ids}
sudo docker rm -f ${ids}
sudo docker build --rm=true -t trriplejay/tircapi .
sudo npm install
id=$(sudo docker run -d --name=tirc --privileged=true --restart=always \
  --net=host \
  -e DB_URL=mongodb://localhost:27017 \
  -e RUN_MODE=dev \
  -v ${wd}:/home/proj/tircapi:rw \
  -p 60000:60000 \
  -t trriplejay/tircapi)
echo "tirc started with ID:" ${id}
sleep 2s && sudo docker logs ${id}