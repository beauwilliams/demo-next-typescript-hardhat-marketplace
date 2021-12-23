import Nav from '@components/Nav';
import Header from '@components/Header';
import HeadTag from '@components/HeadTag';
import Footer from '@components/Footer';
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
