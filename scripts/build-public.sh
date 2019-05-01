#!/usr/bin/env bash

out=dist/public/

rm -rf "$out"
mkdir -p "$out"
cp -R node_modules/swagger-ui-dist/* "$out"
cp -R node_modules/typeface-open-sans/files/open-sans-latin-{3,4}00.woff2 "$out"
cp -R resources/* "$out"
