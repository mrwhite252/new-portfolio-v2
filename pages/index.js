import Head from 'next/head';
import Main from '../components/Main';
import Navbar from '../components/Navbar';

export default function Home() {
  return (

    <div>
      <Head>
        <title> David Portfolio </title>
        <meta name="description" content="David Bai's protfolio site" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <Main />
    </div>
  )
}