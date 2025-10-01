import Head from 'next/head'
import Layout from '../components/Layout'

export default function Applications() {
  return (
    <Layout>
      <Head>
        <title>Applications | Vere Ex Nihilo</title>
      </Head>
      <main className="min-h-screen px-6 py-12 text-port bg-background text-white">
        <h1 className="text-3xl font-bold mb-4">Applications</h1>
        <p className="max-w-2xl">
          We build architectures that scale. Whether you&apos;re designing intelligent systems,
          cryptographic substrates, or simulation backends, the same logic applies:
          start from justified order, not assumptions.
        </p>
      </main>
    </Layout>
  )
}