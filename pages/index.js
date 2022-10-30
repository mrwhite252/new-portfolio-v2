import Head from 'next/head';
import About from '../components/About';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Skills from '../components/Skills';

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
      <About />
      <Skills />
      <Project />
    </div>
  )
}