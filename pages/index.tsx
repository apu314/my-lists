import type { NextPage } from 'next'
import Head from 'next/head'

import { MainLayout } from '../components/layouts'
import { Lists } from '../components/ui/lists'

import styles from '../styles/Home.module.css'


const Home: NextPage = () => {

  return (
    <>
      <MainLayout
        title="Home"
      >
        <>
          <Head>
            {/* <title>Create Next App</title> */}
            {/* <meta name="description" content="Generated by create next app" /> */}
          </Head>

          <Lists />
          
        </>
      </MainLayout>
    </>
  )
}

export default Home
