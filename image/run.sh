#!/bin/bash

docker run -d -p 8081:80 --name emon -v $PWD/../www:/var/www/emon emontech/emon