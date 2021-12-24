#!/usr/bin/env bash

echo "Installing deps"
sleep 2
npm install --production=false

echo "Setting up dev automation scripts"
sleep 2
chmod +x ./stop.sh
chmod +x ./start.sh
chmod +x ./test.sh

echo -n "Would you like to set up the aliases for this project.. \"start\" & \"stop\" (enter for y) y/n?: "
read -r REPLY

if [[ $REPLY =~ [yY](es)* ]] || [[ -z "$REPLY" ]]; then
    echo "setting up aliases.."
    sleep 1
    alias stop='./stop.sh'
    alias start="./start.sh"
    alias test="./test.sh"
fi

echo -n "Would you like to test and then start this project.. (enter for y) y/n?: "
read -r REPLY

if [[ $REPLY =~ [yY](es)* ]] || [[ -z "$REPLY" ]]; then
    ./test.sh
    echo "starting the servers and compiling contracts for first time... visit localhost:3000 to view site"
    sleep 1
    ./start.sh
fi

echo "$(tput setaf 2)Initial set up is complete. You can now use 'start' 'stop' 'test' commands. .......Re run this script to set up aliases on a new shell by following prompts."
