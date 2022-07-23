import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from '@mui/material/Button'

// Components 

import Layout from "../components/Master"


export default function Home() {
  return (
    <div className='bg-[#121212]'>
      <div className="mx-auto">
      <Head>
        <title>CryptoWatch</title>
        <meta name="description" content="CryptoCurrency Dashboard Frontend UI Created with Material UI TailwindCSS NextJS CoinGecko API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout />
      </main>
      </div>
    </div>
  );
}

