import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Who() {
  return (
    <Layout>
      <Head>
        <title>Who We Are | Vere Ex Nihilo</title>
        <meta name="description" content="Physics-led technology development pushing boundaries of computational performance" />
      </Head>
      
      <main className="min-h-screen px-6 py-12 bg-background text-white">
        {/* Hero */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="text-label mb-4">About Us</div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            We Think <span className="text-gradient">Differently</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl">
            Vere Ex Nihilo takes first principles thinking seriously. We start from fundamental physics, 
            not industry conventions. The results speak for themselves.
          </p>
        </section>

        {/* Philosophy */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="card-elevated">
            <h2 className="text-2xl font-bold mb-6">Our <span className="text-gradient">Approach</span></h2>
            <div className="space-y-6 text-text-secondary">
              <p>
                Most technology companies optimize within existing paradigms. They take conventional approaches 
                and make them slightly faster, slightly cheaper, slightly better.
              </p>
              <p>
                We don&apos;t do that.
              </p>
              <p>
                We go back to the physics. We ask: what principles actually govern this problem? What does 
                mathematics tell us about the optimal solution? What can we learn from how physical systems 
                naturally solve similar challenges?
              </p>
              <p>
                This physics-led approach enables performance improvements that seem impossible from a
                conventional engineering perspective. Not 10% better. Not 2× better. Often 10×, 50×, or
                100× better.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8">Core <span className="text-gradient">Principles</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="card">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-lg font-semibold mb-3">Physics First</h3>
              <p className="text-sm text-text-secondary">
                We start from fundamental principles, not industry best practices. Understanding the physics
                of information, computation, and optimization leads to fundamentally better algorithms.
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">📐</div>
              <h3 className="text-lg font-semibold mb-3">Mathematical Rigor</h3>
              <p className="text-sm text-text-secondary">
                Our methods come with provable performance characteristics. We don&apos;t guess-and-check.
                We derive optimal solutions from first principles.
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-3">Validated Results</h3>
              <p className="text-sm text-text-secondary">
                Every claim backed by working proof-of-concept. Every performance metric measured against 
                industry standards. We show, not just tell.
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold mb-3">IP Protection</h3>
              <p className="text-sm text-text-secondary">
                We protect our innovations through strategic patent portfolios and trade secrets. 
                This ensures long-term value for licensing partners.
              </p>
            </div>

          </div>
        </section>

        {/* Team */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8">The <span className="text-gradient">Team</span></h2>
          
          <div className="card-elevated mb-6">
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Andrew Jones</h3>
                <div className="text-accent-primary mb-4">Founder & CTO</div>
                <p className="text-sm text-text-secondary mb-4">
                  Andrew leads the physics research and algorithm development at Vere Ex Nihilo. 
                  His approach combines deep theoretical understanding with practical implementation 
                  experience in computational systems.
                </p>
                <p className="text-sm text-text-secondary">
                  Background in computer science and mathematical physics, with focus on translating 
                  fundamental principles into high-performance computational methods.
                </p>
              </div>
            </div>
          </div>

          <div className="card-elevated">
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Leadership Team</h3>
                <div className="text-accent-primary mb-4">Financial & Operational Management</div>
                <p className="text-sm text-text-secondary">
                  Experienced CFO and professional director overseeing financial operations, corporate 
                  governance, and strategic partnerships. Combined decades of experience in scaling 
                  technology companies and managing IP-based licensing models.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Different */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="card-elevated bg-accent-primary/5 border border-accent-primary/20">
            <h2 className="text-2xl font-bold mb-6">Why We&apos;re <span className="text-gradient">Different</span></h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-accent-primary text-2xl">→</span>
                <div>
                  <div className="font-semibold mb-1">We Don&apos;t Follow Trends</div>
                  <p className="text-sm text-text-secondary">
                    While others chase the latest AI hype or blockchain fad, we focus on fundamental
                    computational primitives that will remain relevant for decades.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-accent-primary text-2xl">→</span>
                <div>
                  <div className="font-semibold mb-1">We Don&apos;t Compromise</div>
                  <p className="text-sm text-text-secondary">
                    Our methods are designed from first principles for optimal performance. We don&apos;t
                    make trade-offs to fit existing systems—we build systems around optimal methods.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-accent-primary text-2xl">→</span>
                <div>
                  <div className="font-semibold mb-1">We Don&apos;t Product Build</div>
                  <p className="text-sm text-text-secondary">
                    We focus on foundational IP that enables others to build great products. Licensing
                    model ensures our technology reaches maximum impact across industries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-accent-primary text-2xl">→</span>
                <div>
                  <div className="font-semibold mb-1">We Don&apos;t Rush</div>
                  <p className="text-sm text-text-secondary">
                    Deep physics research takes time. We validate rigorously. We patent strategically.
                    We license selectively. Quality over speed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="max-w-4xl mx-auto">
          <div className="card-elevated text-center">
            <h2 className="text-3xl font-bold mb-4">
              Efficiency Through <span className="text-gradient">Revolutionary Thinking</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              We&apos;re building an IP licensing empire on groundbreaking discoveries in computational physics.
              The opportunities start where conventional thinking fails.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/applications" className="btn btn-primary">
                View Applications
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}