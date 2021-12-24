#!/usr/bin/env bash
tmux2pane() {
if [[ "$#" -eq 0 ]]; then
	getHelp
	exit
else
	# while test $# -gt 0; do
	case "$1" in
	-h | --help)
		getHelp
		shift
		;;
	*)
		tmux new-session -s "$1" -d
		echo -n "Would you like to create a vertical or horizontal split (enter for h) v/h?: "
		read -r REPLY

		if [[ $REPLY == ^[Vv]$ ]]; then
			tmux split-window -v
		else
			tmux split-window -h
		fi
		if [[ "$#" -gt 1 ]]; then
			tmux send-keys -t "$1"".0" "$2" ENTER
		fi
		if [[ "$#" -gt 2 ]]; then
			tmux send-keys -t "$1"".1" "$3" ENTER
		fi
		;;
	esac
	# done
fi

echo -n "Would you like to attach to the tmux session ""$1"" (enter for n) y/n?: "
read -r REPLY

if [[ $REPLY =~ ^[Yy]$ ]]; then
	tmux -2 attach-session -d
fi
}

tmux2pane servers "npx next dev -p 3000" "npx hardhat node"
sleep 5
echo "compiling contracts..."
npx hardhat run scripts/deploy.ts --network localhost
echo "$(tput setaf 2)Local deployment complete. Visit localhost:3000 to view the front end"

