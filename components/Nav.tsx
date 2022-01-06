import ConnectWallet from '@components/ConnectWallet';
import Link from 'next/link';
import navStyles from '@styles/Nav.module.css';

const Nav = () => {
    return (
        <div className={navStyles.navbar}>
            <ul className={navStyles.menu}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/featured">Featured</Link>
                </li>
                <li>
                    <Link href="/market">Marketplace</Link>
                </li>
                <li>
                    <Link href="/mint">Mint NFTs</Link>
                </li>
                <li>
                    <Link href="/community">Community</Link>
                </li>
                <li>
                    <Link href="/stake">Stake</Link>
                </li>
                <li>
                    {/*here they vote on proposals, they get a share of the fees for participasting */}
                    <Link href="/vote">Vote</Link>
                </li>
                <li>
                    {/* where they go to make proposals such as delisting, adding new creators, etc, they get comissions for accepted proposals */}
                    <Link href="/propose">Propose</Link>
                </li>
                <li>
                    <Link href="/launchpad">Launchpad</Link>
                </li>
            </ul>
            <ul className="flex items-center mr-8">
                <ConnectWallet></ConnectWallet>
            </ul>
        </div>
    );
};

export default Nav;
