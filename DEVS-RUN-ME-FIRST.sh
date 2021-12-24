#!/usr/bin/env bash

echo "Installing deps"
sleep 2
npm install --production=false

echo "Setting up dev automation scripts"
sleep 2
chmod +x ./stop.sh
chmod +x ./start.sh

echo -n "Would you like to set up the aliases for this project.. \"start\" & \"stop\" (enter for y) y/n?: "
read -r REPLY

if [[ $REPLY =~ [yY](es)* ]] || [[ -z "$REPLY" ]]; then
    echo "setting up aliases.."
    sleep 1
    alias stop='./stop.sh'
    alias start="./start.sh"
fi

echo -n "Would you like to start this project.. (enter for y) y/n?: "
read -r REPLY

if [[ $REPLY =~ [yY](es)* ]] || [[ -z "$REPLY" ]]; then
    echo "starting the servers and compiling contracts for first time... visit localhost:3000 to view site"
    sleep 1
    ./start.sh
fi
