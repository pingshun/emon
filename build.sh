#!/bin/bash

echo "Removing www..."
rm -rf ./www/*

echo "Copying latest resources..."
cp -r ./assets ./www/
cp ./index.html ./www/
cp ./baidu_verify_g1Ld5WiiIO.html ./www/

echo "Done!"