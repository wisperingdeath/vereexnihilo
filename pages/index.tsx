// pages/index.tsx
import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Vere Ex Nihilo</title>
        <meta name="description" content="The opportunities start where nothing fails." />
      </Head>
      <main className="min-h-screen flex items-center justify-center text-port text-center px-4">
        <div>
          <h1 className="text-4xl font-bold mb-4">Vere Ex Nihilo</h1>
          <p className="text-xl italic">The opportunities start where nothing fails.</p>
        </div>
      </main>
    </Layout>
  )
}