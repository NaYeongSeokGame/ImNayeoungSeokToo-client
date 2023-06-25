#!/bin/bash
REPOSITORY=/home/ubuntu/client-build
cd $REPOSITORY

sudo yarn install --frozen-lockfile
sudo -E npx pm2 reload