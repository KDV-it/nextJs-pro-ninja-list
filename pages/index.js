import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/NavBar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home </title>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Nostrud exercitation adipisicing ipsum et aliquip id ad commodo cupidatat. Consequat incididunt proident duis aliqua cillum sint cillum magna exercitation culpa deserunt cillum ea id. Dolor aliqua dolor cupidatat minim labore ea enim incididunt magna non proident non ut. Minim exercitation sit mollit officia aute officia nulla aliqua consectetur.</p>
      <Link href='/ninjas'>
        <a className={styles.btn}>
          See Ninja Listing
        </a>
      </Link>
    </div>
    
    </>
  )
}
