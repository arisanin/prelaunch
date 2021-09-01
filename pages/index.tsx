import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Illustration from '../public/Illustration'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Arisanin - arisan lebih mudah dan aman</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Aplikasi yang membantu kamu ikut atau bahkan bikin arisan online/offline jadi lebih gampang dan aman." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='font-aris-sora'>
        <Header />
        <div className='flex flex-col-reverse md:grid md:grid-cols-2 lg:pl-28 w-full mt-4'>
          <div className='flex flex-col mt-20 z-10 px-5 sm:px-16 md:pr-0'>
            <p className='font-bold text-7xl'>Khusus buat kamu yang suka arisan</p>
            <p className='font-light text-xl w-3/4 mt-9'>Aplikasi yang membantu kamu ikut atau bahkan bikin arisan online/offline jadi lebih gampang dan aman.</p>
            <p className='text-aris-blue font-semibold text-xl mt-9'>— segera hadir di Play Store &#38; App Store </p>
          </div>
          <div>
            <img src="/Illustration.svg" alt="illustration" />
          </div>
        </div>
        <div className='h-28 w-full'></div>
      </div>
    </div>
  )
}

export default Home
