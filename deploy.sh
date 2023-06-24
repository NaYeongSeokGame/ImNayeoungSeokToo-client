#!/bin/bash
REPOSITORY=/home/ubuntu/imnayeongseoktoo-deploy
cd $REPOSITORY

sudo yarn install --frozen-lockfile
sudo -E npx pm2 reload