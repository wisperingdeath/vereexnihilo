// pages/index.tsx
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Vere Ex Nihilo - Truth From Nothing</title>
        <meta name="description" content="The opportunities start where nothing fails. Revolutionary IP licensing built on mathematical foundations." />
      </Head>

      {/* Hero Section */}
      <section className="section min-h-[calc(100vh-5rem)] flex items-center">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center animate-up">
            <div className="text-label mb-6 animate-in">Revolutionary Thinking</div>
            <h1 className="text-6xl lg:text-7xl font-bold tracking-tighter mb-8">
              Vere <span className="text-gradient">Ex Nihilo</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-text-secondary mb-6 font-light leading-relaxed">
              The opportunities start where nothing fails.
            </p>
            <p className="text-lg text-text-tertiary max-w-3xl mx-auto mb-12 leading-relaxed">
              Building an IP-first licensing empire on groundbreaking mathematical discoveries.
              60+ patents covering universal computational primitives with 156x proven performance improvements.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/applications" className="btn btn-primary">
                View Applications
              </Link>
              <Link href="/ip-access" className="btn btn-secondary">
                IP Portfolio
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="section bg-bg-secondary/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-up">
              <div className="text-5xl font-bold text-gradient mb-2">60+</div>
              <div className="text-sm text-text-tertiary uppercase tracking-wider">Core Patents</div>
            </div>
            <div className="text-center animate-up">
              <div className="text-5xl font-bold text-gradient mb-2">156x</div>
              <div className="text-sm text-text-tertiary uppercase tracking-wider">Performance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Processes */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-label mb-4">Four Fundamental Processes</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Mathematical <span className="text-gradient">Foundations</span>
            </h2>
            <p className="text-xl text-text-secondary">
              Each process generates 15 patentable methods = 60+ core patents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Projection', desc: 'Constants & Information Loss', icon: '→' },
              { name: 'Compression', desc: 'Masses & Topology', icon: '⊂' },
              { name: 'Optimization', desc: 'Mixing & Channel Capacity', icon: '⊕' },
              { name: 'Saturation', desc: 'Emergence & Critical Points', icon: 'Ξ' },
            ].map((process, idx) => (
              <div key={idx} className="card-elevated text-center group hover:scale-105 transition-transform">
                <div className="text-5xl mb-4 text-accent-primary group-hover:animate-glow">{process.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{process.name}</h3>
                <p className="text-sm text-text-tertiary">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validated Results */}
      <section className="section bg-bg-secondary/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="text-label mb-4">Proof of Concept</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Validated <span className="text-gradient">Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Quaternion Processing', metric: '156x faster', impact: 'Every IMU device' },
              { name: 'SU2 Compression', metric: '37x compression', impact: 'All data storage' },
              { name: 'Information Saturation', metric: '2-10 min prediction', impact: 'Financial markets' },
              { name: 'Q-Stream I/O', metric: '100% extraction', impact: 'Sensor networks' },
            ].map((result, idx) => (
              <div key={idx} className="card group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold">{result.name}</h3>
                  <span className="text-xs bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full">✓ Validated</span>
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{result.metric}</div>
                <p className="text-sm text-text-tertiary">{result.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-custom">
          <div className="card-elevated text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to explore the <span className="text-gradient">opportunities</span>?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              We take first principles thinking differently and aren&apos;t afraid to break the rules.
              The results speak for themselves.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link href="/ip-access" className="btn btn-secondary">
                View IP Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}