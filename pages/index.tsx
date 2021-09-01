import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Arisanin - arisan lebih mudah dan aman</title>
        <meta name="description" content="Aplikasi yang membantu kamu ikut atau bahkan bikin arisan online/offline jadi lebih gampang dan aman." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <p className='text-red-500'>Hello, world!</p>
      </div>
    </div>
  )
}

export default Home
