import Header from '@/components/Header'
import OtherProduct from '@/components/OtherProducts'
import Head from 'next/head'

import Image from 'next/image'
export default function Home() {
  return (
    <main
      className={``}
    >
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js"></script>
      </Head>
      <Header/>
      <OtherProduct/>
    </main>
  )
}
