import Head from 'next/head'
import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact | Vere Ex Nihilo</title>
      </Head>
      <main className="min-h-screen px-6 py-12 text-port bg-background text-white">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="max-w-2xl mb-4">
          Inquiries are welcomed via encrypted email or secure form. All correspondence is treated 
          in confidence. NDA templates are available upon request.
        </p>
        <p className="italic mb-1">andrew.jones@vereexnihilo.com</p>
        <p className="italic">+64 21 242 5994</p>
      </main>
    </Layout>
  )
}