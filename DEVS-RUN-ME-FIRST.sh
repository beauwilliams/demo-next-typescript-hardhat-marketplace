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

if [[ $REPLY =~ ^[Nn]$ ]]; then
alias stop='./stop.sh'
alias start="./start.sh"
fi

./start.sh
