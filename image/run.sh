#!/bin/bash

image=`docker images | grep emontech/emon`
if [ -z "$image" ]; then
  echo 'No emon image found, build it first:'
  docker build -t emontech/emon -f Dockerfile .
else
  echo 'emon image has been built:'
  echo $image
fi

docker run -d -p 8081:80 --name emon -v $PWD/../www:/var/www/emon emontech/emon
