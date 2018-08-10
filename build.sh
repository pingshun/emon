#!/bin/bash

echo "Removing www..."
rm -rf ./www/*

echo "Copying latest resources..."
cp -r ./css ./www/
cp -r ./fonts ./www/
cp -r ./img ./www/
cp -r ./js ./www/
cp -r ./mail ./www/
cp ./index.html ./www/
cp ./baidu_verify_g1Ld5WiiIO.html ./www/

echo "Done!"