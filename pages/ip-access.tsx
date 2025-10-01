import Head from 'next/head'
import Layout from '../components/Layout'

export default function IPAccess() {
  return (
    <Layout>
      <Head>
        <title>IP Portfolio | Vere Ex Nihilo</title>
        <meta name="description" content="Intellectual property portfolio covering physics-derived computational methods" />
      </Head>
      
      <main className="min-h-screen px-6 py-12 bg-background text-white">
        {/* Hero */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="text-label mb-4">Intellectual Property</div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Physics-Led <span className="text-gradient">IP Portfolio</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mb-8">
            We develop and protect computational methods derived from fundamental physics principles. 
            Our licensing model enables partners to commercialize breakthrough technology across multiple sectors.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">100+</div>
              <div className="text-xs text-text-tertiary uppercase tracking-wider">Patents Planned</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">6</div>
              <div className="text-xs text-text-tertiary uppercase tracking-wider">Core Domains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">$5B+</div>
              <div className="text-xs text-text-tertiary uppercase tracking-wider">Market Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">Global</div>
              <div className="text-xs text-text-tertiary uppercase tracking-wider">PCT Coverage</div>
            </div>
          </div>
        </section>

        {/* Technology Domains */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8">Core <span className="text-gradient">Technology Domains</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="card">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold mb-2">Data Processing & Optimization</h3>
              <p className="text-sm text-text-secondary mb-3">
                High-performance methods addressing fundamental bottlenecks in data-intensive computing.
              </p>
              <div className="text-xs text-text-tertiary">
                Real-time processing • Stream optimization • Distributed computing
              </div>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">💾</div>
              <h3 className="text-lg font-semibold mb-2">Compression & Encoding</h3>
              <p className="text-sm text-text-secondary mb-3">
                Novel compression approaches exploiting mathematical structure in data.
              </p>
              <div className="text-xs text-text-tertiary">
                Video codecs • Lossless compression • Structured data
              </div>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">⚠️</div>
              <h3 className="text-lg font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-sm text-text-secondary mb-3">
                Early detection of critical thresholds and phase transitions in complex systems.
              </p>
              <div className="text-xs text-text-tertiary">
                Market prediction • Network monitoring • Quality control
              </div>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">🏭</div>
              <h3 className="text-lg font-semibold mb-2">Materials & Manufacturing</h3>
              <p className="text-sm text-text-secondary mb-3">
                Physics-based process optimization for advanced materials production.
              </p>
              <div className="text-xs text-text-tertiary">
                Crystal growth • Defect reduction • Process control
              </div>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-lg font-semibold mb-2">Business Process Methods</h3>
              <p className="text-sm text-text-secondary mb-3">
                Algorithmic approaches to resource allocation and operational optimization.
              </p>
              <div className="text-xs text-text-tertiary">
                Supply chain • Risk modeling • Decision support
              </div>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-lg font-semibold mb-2">Computing Architecture</h3>
              <p className="text-sm text-text-secondary mb-3">
                Processor designs and computational structures optimized for specific problem classes.
              </p>
              <div className="text-xs text-text-tertiary">
                Specialized processors • Memory hierarchies • Hardware acceleration
              </div>
            </div>

          </div>
        </section>

        {/* IP Strategy */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8">Protection <span className="text-gradient">Strategy</span></h2>
          
          <div className="card-elevated mb-8">
            <h3 className="text-xl font-semibold mb-4">Multi-Layered Approach</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-accent-primary font-semibold mb-2">Patent Protection</div>
                <p className="text-sm text-text-secondary">
                  Core algorithmic methods and implementations. 20-year exclusive rights providing licensing foundation.
                </p>
              </div>
              <div>
                <div className="text-accent-primary font-semibold mb-2">Trade Secrets</div>
                <p className="text-sm text-text-secondary">
                  Physics insights and implementation optimizations. Indefinite protection maintaining competitive advantage.
                </p>
              </div>
              <div>
                <div className="text-accent-primary font-semibold mb-2">Software Copyright</div>
                <p className="text-sm text-text-secondary">
                  Reference implementations and tools. Code-level protection for specific embodiments.
                </p>
              </div>
              <div>
                <div className="text-accent-primary font-semibold mb-2">Know-How</div>
                <p className="text-sm text-text-secondary">
                  Integration expertise and optimization techniques. Value-added services strengthening partnerships.
                </p>
              </div>
            </div>
          </div>

          <div className="card-elevated">
            <h3 className="text-xl font-semibold mb-4">Filing Timeline</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-accent-primary font-bold text-sm w-32">Phase 1</div>
                <div className="flex-1 text-sm text-text-secondary">
                  <strong className="text-white">Months 1-3:</strong> Foundational patents covering data processing, compression, predictive analytics
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-accent-primary font-bold text-sm w-32">Phase 2</div>
                <div className="flex-1 text-sm text-text-secondary">
                  <strong className="text-white">Months 3-6:</strong> Materials processing and manufacturing applications
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-accent-primary font-bold text-sm w-32">Phase 3</div>
                <div className="flex-1 text-sm text-text-secondary">
                  <strong className="text-white">Months 6-12:</strong> Business process and hardware architecture patents
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-accent-primary font-bold text-sm w-32">Phase 4</div>
                <div className="flex-1 text-sm text-text-secondary">
                  <strong className="text-white">Ongoing:</strong> Continuation applications and improvements based on commercial feedback
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Licensing Model */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8">Licensing <span className="text-gradient">Model</span></h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="card-elevated text-center">
              <h3 className="text-lg font-semibold mb-3">Exclusive Field-of-Use</h3>
              <p className="text-sm text-text-secondary mb-4">
                Single licensee per vertical market. Technology leaders seeking competitive differentiation.
              </p>
              <div className="text-xs text-text-tertiary">
                Joint development • Full access • Protected rights
              </div>
            </div>

            <div className="card-elevated text-center">
              <h3 className="text-lg font-semibold mb-3">Non-Exclusive</h3>
              <p className="text-sm text-text-secondary mb-4">
                Multiple licensees in same market. Established companies seeking efficiency improvements.
              </p>
              <div className="text-xs text-text-tertiary">
                Standard terms • Limited access • Defined field
              </div>
            </div>

            <div className="card-elevated text-center">
              <h3 className="text-lg font-semibold mb-3">OEM Integration</h3>
              <p className="text-sm text-text-secondary mb-4">
                Embedded licensing for hardware/software products. Device manufacturers and platforms.
              </p>
              <div className="text-xs text-text-tertiary">
                Volume pricing • Integration support • Ongoing updates
              </div>
            </div>
          </div>

          <div className="card-elevated">
            <h3 className="text-xl font-semibold mb-4">Value Proposition</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <div>
                  <strong className="text-white">Performance Improvements:</strong>
                  <span className="text-text-secondary"> Demonstrated efficiency gains backed by physics principles</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <div>
                  <strong className="text-white">Cost Reduction:</strong>
                  <span className="text-text-secondary"> Lower computational requirements and improved operational efficiency</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <div>
                  <strong className="text-white">Competitive Differentiation:</strong>
                  <span className="text-text-secondary"> Proprietary methods unavailable to competitors</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <div>
                  <strong className="text-white">Time-to-Market:</strong>
                  <span className="text-text-secondary"> Proven implementations reduce development cycles</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <div>
                  <strong className="text-white">Risk Mitigation:</strong>
                  <span className="text-text-secondary"> Patent protection provides freedom to operate</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Validation */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8">Technology <span className="text-gradient">Validation</span></h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold mb-3">Proof-of-Concept Demonstrations</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Performance benchmarking vs. industry standards</li>
                <li>• Reference implementations showing reduction to practice</li>
                <li>• Independent validation available under NDA</li>
                <li>• Real-world testing on representative datasets</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-3">Technical Rigor</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Methods grounded in physics and mathematics</li>
                <li>• Deterministic performance with complexity analysis</li>
                <li>• Clear scope of applicability and limitations</li>
                <li>• Reproducible benchmarks and validation protocols</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Confidentiality */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="card-elevated bg-accent-primary/5 border border-accent-primary/20">
            <h2 className="text-2xl font-bold mb-4">Confidentiality & <span className="text-gradient">Access</span></h2>
            <p className="text-text-secondary mb-6">
              Our research and technical documentation is available to qualified partners under NDA. 
              We maintain strict protocols for protecting proprietary information:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="font-semibold mb-2">Pre-Filing Protection</div>
                <p className="text-sm text-text-secondary">
                  Innovations remain confidential until patent applications filed
                </p>
              </div>
              <div>
                <div className="font-semibold mb-2">NDA Requirements</div>
                <p className="text-sm text-text-secondary">
                  Technical demonstrations require executed non-disclosure agreements
                </p>
              </div>
              <div>
                <div className="font-semibold mb-2">Segmented Disclosure</div>
                <p className="text-sm text-text-secondary">
                  Information shared on need-to-know basis appropriate to discussions
                </p>
              </div>
              <div>
                <div className="font-semibold mb-2">Trade Secret Protection</div>
                <p className="text-sm text-text-secondary">
                  Core physics insights maintained as perpetual trade secrets
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto">
          <div className="card-elevated text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to <span className="text-gradient">explore</span> licensing opportunities?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Detailed technical specifications, performance data, and integration guidance 
              available to qualified partners.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn btn-primary">
                Request NDA Access
              </a>
              <a href="/applications" className="btn btn-secondary">
                View Applications
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
