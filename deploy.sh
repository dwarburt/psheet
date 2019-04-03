#!/bin/bash -evx

install -g @angular/cli
cd psheet-app
npm install
mkdir -p /tmp/site
ng build --prod --output-path /tmp/site --base-href /psheet/
cd ..
git checkout gh-pages
rm -rf *
cp -r /tmp/site/* .
git add .
git commit -m "deploy site"
git push
