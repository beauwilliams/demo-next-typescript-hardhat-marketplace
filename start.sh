tmux-2pane servers "npx next dev -p 3000" "npx hardhat node"
sleep 5
echo "compiling contracts..."
npx hardhat run scripts/deploy.ts --network hardhat
