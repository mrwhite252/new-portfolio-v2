import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
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
      <Main />
      <About />
      <Skills />
      <Project />
      {/* <Contact /> */}
    </div>
  )
}