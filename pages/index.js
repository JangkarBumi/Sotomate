import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sotomate - Social Marketing Automation Tool</title>
        <meta property="og:title" content="My page title" />
      </Head>
      {/* <Loader show/>
       */}

      {/* Hero Section */}
      <div>
        <h1>Main value proposition</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in
          molestiae ex.
        </p>
      </div>
    </div>
  );
}
