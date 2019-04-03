#!/bin/bash

set -ex
echo "Working on $GITHUB_REF"
if [[ "refs/heads/master" = "$GITHUB_REF" ]]
then

    npm install -g @angular/cli
    cd psheet-app
    npm install
    mkdir -p /tmp/site
    ng build --prod --output-path /tmp/site --base-href /psheet/
    cd ..

    git config user.email "buildbot@wbtn.net"
    git config user.name "Build bot"
    git reset --hard
    git checkout gh-pages
    rm -rf *
    cp -r /tmp/site/* .
    touch .nojekyll
    git add .
    git commit -m "deploy site"
    git push
fi