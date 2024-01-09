import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import RealtyCard from '@/components/RealtyCard';


export default function Home() {

  return (
    <>
      <Head>
        <title>Домашняя страница</title>
      </Head>
      <div className='m-8'>
        <RealtyCard></RealtyCard>
      </div>
    </>

  )
}
