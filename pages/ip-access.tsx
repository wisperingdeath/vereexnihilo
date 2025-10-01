import Head from 'next/head'
import Link from 'next/link'
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
          <p className="text-xl text-text-secondary max-w-3xl mb-4">
            We develop and protect computational methods derived from fundamental physics principles. 
            Our licensing model enables partners to commercialize breakthrough technology across multiple sectors.
          </p>
          
          {/* Patent Status Notice */}
          <div className="bg-accent-primary/10 border border-accent-primary/30 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-accent-primary text-xl">📋</span>
              <div>
                <div className="font-semibold text-accent-primary mb-1">Patent Submissions: Early October 2025</div>
                <p className="text-sm text-text-secondary">
                  Our initial patent applications covering six core computational methods are scheduled for submission 
                  in early October. Once filed and designated <strong className="text-white">patent pending</strong>, 
                  we will engage openly with researchers, partners, and potential licensees. Academic validation and 
                  independent review will follow immediately—no NDAs required for filed innovations.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">100+</div>
              <div className="text-xs text-text-tertiary uppercase tracking-wider">Patents Planned</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">6</div>
              <div className="text-xs text-text-tertiary uppercase tracking-wider">October Filings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">Global</div>
              <div className="text-xs text-text-tertiary uppercase tracking-wider">PCT Strategy</div>
            </div>
          </div>
        </section>

        {/* October Filing Wave */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8">October <span className="text-gradient">2025 Filings</span></h2>
          <p className="text-text-secondary mb-8">
            Six core methods with demonstrated performance and clear commercial applications. Once patent pending, 
            these methods will be available for open discussion and independent validation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="card">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">Real-Time Data Processing</h3>
                <span className="text-xs bg-accent-primary/20 text-accent-primary px-2 py-1 rounded">Oct 2025</span>
              </div>
              <p className="text-sm text-text-secondary mb-3">
                Asynchronous sensor fusion achieving 10× accuracy improvement with geometric consistency guarantees.
              </p>
              <div className="text-xs text-text-tertiary">
                <strong>Applications:</strong> Autonomous vehicles, robotics, consumer electronics
              </div>
            </div>

            <div className="card">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">Topological Compression</h3>
                <span className="text-xs bg-accent-primary/20 text-accent-primary px-2 py-1 rounded">Oct 2025</span>
              </div>
              <p className="text-sm text-text-secondary mb-3">
                Mathematical structure exploitation achieving 37× compression ratios with lossless encoding.
              </p>
              <div className="text-xs text-text-tertiary">
                <strong>Applications:</strong> Cloud storage, video streaming, scientific data
              </div>
            </div>

            <div className="card">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">Phase Transition Detection</h3>
                <span className="text-xs bg-accent-primary/20 text-accent-primary px-2 py-1 rounded">Oct 2025</span>
              </div>
              <p className="text-sm text-text-secondary mb-3">
                Critical threshold identification providing 2-10 minute early warning for system state changes.
              </p>
              <div className="text-xs text-text-tertiary">
                <strong>Applications:</strong> Financial markets, network infrastructure, manufacturing
              </div>
            </div>

            <div className="card">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">Lightweight Video Codec</h3>
                <span className="text-xs bg-accent-primary/20 text-accent-primary px-2 py-1 rounded">Oct 2025</span>
              </div>
              <p className="text-sm text-text-secondary mb-3">
                MCU-compatible encoding achieving 4-28× compression with sub-20ms latency.
              </p>
              <div className="text-xs text-text-tertiary">
                <strong>Applications:</strong> IoT devices, edge computing, automotive systems
              </div>
            </div>

            <div className="card">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">Materials Process Control</h3>
                <span className="text-xs bg-accent-primary/20 text-accent-primary px-2 py-1 rounded">Oct 2025</span>
              </div>
              <p className="text-sm text-text-secondary mb-3">
                Acoustic-assisted crystal growth reducing defects by 70% in superconductor manufacturing.
              </p>
              <div className="text-xs text-text-tertiary">
                <strong>Applications:</strong> Semiconductor fab, advanced materials production
              </div>
            </div>

            <div className="card">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">Database Optimization</h3>
                <span className="text-xs bg-accent-primary/20 text-accent-primary px-2 py-1 rounded">Oct 2025</span>
              </div>
              <p className="text-sm text-text-secondary mb-3">
                Hierarchical indexing structures achieving 20-50× query performance improvements.
              </p>
              <div className="text-xs text-text-tertiary">
                <strong>Applications:</strong> Enterprise data warehouses, real-time analytics
              </div>
            </div>

          </div>
        </section>

        {/* Post-Filing Plans */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="card-elevated bg-gradient-to-br from-accent-primary/10 to-accent-primary/5 border border-accent-primary/30">
            <h2 className="text-2xl font-bold mb-4">After <span className="text-gradient">Patent Pending</span></h2>
            <p className="text-text-secondary mb-6">
              Following October filings, we will pursue open validation and engagement with the research community:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-accent-primary text-xl">✓</span>
                <div>
                  <div className="font-semibold mb-1">Academic Validation</div>
                  <p className="text-sm text-text-secondary">
                    Independent review by physicists and mathematicians specializing in relevant domains
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-primary text-xl">✓</span>
                <div>
                  <div className="font-semibold mb-1">Open Technical Discussions</div>
                  <p className="text-sm text-text-secondary">
                    No NDA required for filed methods—researchers free to evaluate and provide feedback
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-primary text-xl">✓</span>
                <div>
                  <div className="font-semibold mb-1">Conference Presentations</div>
                  <p className="text-sm text-text-secondary">
                    Present methods at academic and industry conferences for broader evaluation
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-primary text-xl">✓</span>
                <div>
                  <div className="font-semibold mb-1">Licensing Discussions</div>
                  <p className="text-sm text-text-secondary">
                    Engage potential partners openly with patent protection in place
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expanded Technology Domains */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-4">Expanded <span className="text-gradient">Portfolio</span></h2>
          <p className="text-text-secondary mb-8">
            Following initial filings, we will expand coverage across additional domains and applications:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="card">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold mb-2">Data Processing Variants</h3>
              <p className="text-sm text-text-secondary">
                Extensions covering stream processing, distributed computing, and real-time optimization
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">💾</div>
              <h3 className="text-lg font-semibold mb-2">Encoding Methods</h3>
              <p className="text-sm text-text-secondary">
                Additional compression approaches for structured data, scientific datasets, blockchain
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">⚠️</div>
              <h3 className="text-lg font-semibold mb-2">Predictive Systems</h3>
              <p className="text-sm text-text-secondary">
                Expanded applications in healthcare monitoring, quality control, network management
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">🏭</div>
              <h3 className="text-lg font-semibold mb-2">Manufacturing Processes</h3>
              <p className="text-sm text-text-secondary">
                Additional materials processing methods, quality control systems, yield optimization
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-lg font-semibold mb-2">Business Analytics</h3>
              <p className="text-sm text-text-secondary">
                Resource allocation, risk modeling, supply chain optimization, decision support
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-lg font-semibold mb-2">Computing Architecture</h3>
              <p className="text-sm text-text-secondary">
                Specialized processor designs, memory hierarchies, hardware acceleration methods
              </p>
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
                  Application-level methods and implementations. Priority dates established, 20-year exclusive rights.
                </p>
              </div>
              <div>
                <div className="text-accent-primary font-semibold mb-2">Trade Secrets</div>
                <p className="text-sm text-text-secondary">
                  Core physics derivations and theoretical foundations. Perpetual protection, never disclosed publicly.
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
                  Integration expertise and optimization techniques. Value-added services for licensees.
                </p>
              </div>
            </div>
          </div>

          <div className="card-elevated">
            <h3 className="text-xl font-semibold mb-4">Development Timeline</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-accent-primary font-bold text-sm w-32">Oct 2025</div>
                <div className="flex-1 text-sm text-text-secondary">
                  <strong className="text-white">Initial Filing:</strong> Submit provisional applications for six core methods, establish priority dates, achieve patent pending status
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-accent-primary font-bold text-sm w-32">Nov-Dec 2025</div>
                <div className="flex-1 text-sm text-text-secondary">
                  <strong className="text-white">Academic Validation:</strong> Engage researchers for independent review, present at conferences, seek peer feedback
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-accent-primary font-bold text-sm w-32">Q1 2026</div>
                <div className="flex-1 text-sm text-text-secondary">
                  <strong className="text-white">Portfolio Expansion:</strong> File additional patents based on validated methods, convert provisionals to PCT applications
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-accent-primary font-bold text-sm w-32">Ongoing</div>
                <div className="flex-1 text-sm text-text-secondary">
                  <strong className="text-white">Continuation Development:</strong> Additional applications, improvements, domain-specific implementations
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
                Single licensee per vertical. Technology leaders seeking competitive differentiation.
              </p>
              <div className="text-xs text-text-tertiary">
                Joint development • Full access • Protected rights
              </div>
            </div>

            <div className="card-elevated text-center">
              <h3 className="text-lg font-semibold mb-3">Non-Exclusive</h3>
              <p className="text-sm text-text-secondary mb-4">
                Multiple licensees per market. Established companies seeking efficiency gains.
              </p>
              <div className="text-xs text-text-tertiary">
                Standard terms • Limited access • Defined field
              </div>
            </div>

            <div className="card-elevated text-center">
              <h3 className="text-lg font-semibold mb-3">OEM Integration</h3>
              <p className="text-sm text-text-secondary mb-4">
                Embedded licensing. Device manufacturers and platform providers.
              </p>
              <div className="text-xs text-text-tertiary">
                Volume pricing • Integration support • Updates
              </div>
            </div>
          </div>

          <div className="card-elevated">
            <h3 className="text-xl font-semibold mb-4">Value Proposition</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <div>
                  <strong className="text-white">Validated Performance:</strong>
                  <span className="text-text-secondary"> Methods reviewed by independent researchers, benchmarked against industry standards</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <div>
                  <strong className="text-white">Patent Protection:</strong>
                  <span className="text-text-secondary"> Freedom to operate backed by filed patents, competitive exclusivity available</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <div>
                  <strong className="text-white">Proven Implementations:</strong>
                  <span className="text-text-secondary"> Working POCs demonstrating real-world applicability and performance</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <div>
                  <strong className="text-white">Integration Support:</strong>
                  <span className="text-text-secondary"> Technical consultation, optimization guidance, ongoing development</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Current Availability */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="card-elevated bg-accent-primary/5 border border-accent-primary/20">
            <h2 className="text-2xl font-bold mb-4">Current <span className="text-gradient">Status</span></h2>
            <p className="text-text-secondary mb-6">
              Patent applications are being finalized for October 2025 submission. We welcome inquiries from potential 
              partners interested in early licensing discussions. Following patent pending designation, full technical 
              disclosure and academic validation will proceed immediately.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="font-semibold mb-2">Available Now</div>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• General technology overview and applications</li>
                  <li>• Performance metrics and benchmark comparisons</li>
                  <li>• Market analysis and licensing structures</li>
                  <li>• Preliminary partnership discussions</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-2">After Patent Pending (Oct 2025)</div>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Complete technical specifications</li>
                  <li>• Academic validation and peer review</li>
                  <li>• Detailed POC demonstrations</li>
                  <li>• Open licensing negotiations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto">
          <div className="card-elevated text-center">
            <h2 className="text-3xl font-bold mb-4">
              Early <span className="text-gradient">October</span> 2025
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Patent pending status expected early October. Open validation and licensing discussions will follow immediately. 
              Reach out now for preliminary partnership conversations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
              <Link href="/applications" className="btn btn-secondary">
                View Applications
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
