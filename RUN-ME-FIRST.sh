#!/usr/bin/env bash
chmod +x ./stop.sh
chmod +x ./start.sh

echo -n "Would you like to set up the aliases for this project.. \"start\" & \"stop\" (enter for y) y/n?: "
read -r REPLY

if [[ $REPLY =~ ^[Nn]$ ]]; then
alias stop='./stop.sh'
alias start="./start.sh"
fi
