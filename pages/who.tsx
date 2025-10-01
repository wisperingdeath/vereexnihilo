import Head from 'next/head'
import Layout from '../components/Layout'

export default function Who() {
  return (
    <Layout>
      <Head>
        <title>Who Are We | Vere Ex Nihilo</title>
      </Head>
      <main className="min-h-screen px-6 py-12 text-port bg-background text-white">
        <h1 className="text-3xl font-bold mb-4">Who Are We</h1>
        <p className="max-w-2xl">
          Vere Ex Nihilo think differently. We take first principles thinking differently and aren&apos;t afraid to break the rules, and the results show.
        </p>
        <p className="mt-4 max-w-2xl">
          Efficiency through revolutionary thinking.
        </p>
      </main>
    </Layout>
  )
}