#!/usr/bin/env bash

out=dist/public/

rm -rf "$out"
mkdir -p "$out"
cp -R node_modules/swagger-ui-dist/* "$out"
cp -R resources/* "$out"
