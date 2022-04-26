import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Layout from '../components/layout.js'

export default function About() {
  return (
  <Layout>
  <Head>
    <title>First Post</title>
  </Head>
  <h1>Welcome to the About page</h1>
  <h2>
    <Link href="/">
      <a>Back to home</a>
    </Link>
  </h2>
  </Layout>
    )
}