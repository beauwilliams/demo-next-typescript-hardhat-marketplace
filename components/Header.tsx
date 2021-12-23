import { useRouter } from 'next/router';
import headerStyles from '@styles/Header.module.css';


const Header = () => {
    const { asPath } = useRouter();
    const header = asPath.replace(/\//, "")
    const x: number = 5
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>{header}</span>
            </h1>
            <style jsx>
            {`
                .conditional-styled-jsx {
                font-family: 'Rock 3D', cursive;
                color: ${x > 3 ? 'blue' : 'red'}
                }
            `}
            </style>
        </div>
    );
};

export default Header
