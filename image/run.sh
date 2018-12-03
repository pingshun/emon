#!/bin/bash

image=`docker images | grep emontech/emonsite`
if [ -z "$image" ]; then
  echo 'No emonsite image found, build it first:'
  docker build -t emontech/emonsite -f Dockerfile .
else
  echo 'emonsite image has been built:'
  echo $image
fi

docker run -d -p 8081:80 --name emonsite -v $PWD/../www:/var/www/emon emontech/emonsite
