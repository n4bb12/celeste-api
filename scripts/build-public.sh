#!/usr/bin/env bash

rm -rf dist/public
mkdir -p dist/public
cp -R node_modules/swagger-ui-dist/* dist/public/
