import Head from 'next/head';

const HeadTag = () => {
    return (
        <div>
            <Head>
                <title>A demo sitewide head tag</title>
                <meta name="keywords" content="some, meta, tags, crypto" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
}

export default HeadTag

