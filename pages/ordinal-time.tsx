import Head from 'next/head'
import Layout from '../components/Layout'

export default function OrdinalTime() {
  return (
    <Layout>
      <Head>
        <title>Ordinal Time | Vere Ex Nihilo</title>
      </Head>
      <main className="min-h-screen px-6 py-12 text-port bg-background text-white">
        <h1 className="text-3xl font-bold mb-4">Ordinal Time</h1>
        <p className="max-w-2xl">
          Time is not a ticking variable. It is structured emergence. 
          At Vere Ex Nihilo, Ordinal Time represents justified sequence—the logical 
          ordering of events without reliance on external clocking or arbitrary intervals.
        </p>
        <p className="mt-4 max-w-2xl">
          This principle forms the backbone of our systems: no assumptions, no retrofits—only integrity through causality.
        </p>
      </main>
    </Layout>
  )
}