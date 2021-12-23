import Nav from './Nav';
import Header from './Header';
import HeadTag from './HeadTag';
import Footer from './Footer';
import styles from '@styles/Layout.module.css';

const Layout = ({ children }) => {
    return (
        <>
            <HeadTag></HeadTag>
            <Nav></Nav>
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header></Header>
                    {children}
                    <Footer></Footer>
                </main>
            </div>
        </>
    );
};

export default Layout;
