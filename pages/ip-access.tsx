import Head from 'next/head'
import Layout from '../components/Layout'

export default function IPAccess() {
  return (
    <Layout>
      <Head>
        <title>IP Access | Vere Ex Nihilo</title>
      </Head>
      <main className="min-h-screen px-6 py-12 text-port bg-background text-white">
        <h1 className="text-3xl font-bold mb-4">Intellectual Property Access</h1>
        <p className="max-w-2xl">
          Our research and architecture documentation is available to qualified individuals and entities 
          under NDA. For access, please submit a request through the contact page.
        </p>
      </main>
    </Layout>
  )
}