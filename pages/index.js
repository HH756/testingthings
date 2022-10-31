import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Home() {

  const [hydrated, setHydrated] = useState(false); 
  const [curr,curre1] = useState(null);
  const [thearr,pushto] = useState(["0",]);
  const [currCount,counter] = useState(null);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  } 
 
  const increment = () => {
    let x = (Math.floor((1/Math.random())*100)/100).toFixed(2);
    curre1(x);
    pushto(thearr => thearr.push(1));
    counter(currCount => (currCount + 1))
    console.log(x);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Crash</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Crash
        </h1>
        <span className={styles.ranNum}>
          {curr}
        </span>
        <span>
          {currCount}{thearr}
        </span>
        <button className={styles.getNewButton} onClick={increment}>Generate a new Crashpoint</button>
      </main>
    </div>
  )
}
