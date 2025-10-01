import Head from 'next/head'
import Layout from '../components/Layout'

export default function Applications() {
  return (
    <Layout>
      <Head>
        <title>Applications | Vere Ex Nihilo</title>
        <meta name="description" content="Physics-driven computational methods with demonstrated performance across multiple domains" />
      </Head>
      
      <main className="min-h-screen px-6 py-12 bg-background text-white">
        {/* Hero */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="text-label mb-4">Technology Applications</div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Physics-Driven <span className="text-gradient">Performance</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl">
            We translate fundamental physics principles into practical computational methods.
            The results speak for themselves.
          </p>
        </section>

        {/* Application Cards */}
        <section className="max-w-6xl mx-auto space-y-8">
          
          {/* Real-Time Data Processing */}
          <div className="card-elevated">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold">📊 Real-Time Data Processing</h2>
              <span className="text-xs bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full">Validated</span>
            </div>
            <p className="text-text-secondary mb-6">
              State estimation algorithms that preserve geometric consistency while integrating data from 
              multiple asynchronous sensors. Derived from physics principles of how systems maintain consistency 
              despite measurement uncertainties.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">10× Accuracy</span>
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">&lt;5ms Latency</span>
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">1.6mW Power</span>
            </div>
            <div className="text-sm text-text-tertiary">
              <strong>Markets:</strong> Autonomous vehicles • Robotics • Consumer electronics • Aerospace navigation
            </div>
          </div>

          {/* Advanced Compression */}
          <div className="card-elevated">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold">💾 Advanced Data Compression</h2>
              <span className="text-xs bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full">Validated</span>
            </div>
            <p className="text-text-secondary mb-6">
              Topologically-informed compression algorithms that exploit mathematical structure in data. 
              Methods informed by information theory and geometric principles from physics.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">37× Compression</span>
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">Lossless</span>
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">Real-Time</span>
            </div>
            <div className="text-sm text-text-tertiary">
              <strong>Markets:</strong> Cloud storage • Video streaming • Scientific data • Blockchain systems
            </div>
          </div>

          {/* Predictive Analytics */}
          <div className="card-elevated">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold">⚠️ Predictive Analytics</h2>
              <span className="text-xs bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full">Validated</span>
            </div>
            <p className="text-text-secondary mb-6">
              Early warning systems that detect approaching critical thresholds. Based on understanding 
              of phase transitions and critical phenomena in physical systems.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">2-10 Min Warning</span>
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">Low False Positive</span>
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">Universal</span>
            </div>
            <div className="text-sm text-text-tertiary">
              <strong>Markets:</strong> Financial trading • Network infrastructure • Manufacturing QC • Healthcare monitoring
            </div>
          </div>

          {/* Video Encoding */}
          <div className="card-elevated">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold">🎥 High-Efficiency Video Encoding</h2>
              <span className="text-xs bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full">Validated</span>
            </div>
            <p className="text-text-secondary mb-6">
              Lightweight codec designed from optimization principles. Achieves competitive compression 
              with dramatically reduced computational requirements.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">4-28× Compression</span>
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">&lt;20ms Latency</span>
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">MCU-Ready</span>
            </div>
            <div className="text-sm text-text-tertiary">
              <strong>Markets:</strong> IoT devices • Security systems • Automotive cameras • Mobile devices
            </div>
          </div>

          {/* Materials Optimization */}
          <div className="card-elevated">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold">🏭 Materials Process Optimization</h2>
              <span className="text-xs bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full">Validated</span>
            </div>
            <p className="text-text-secondary mb-6">
              Process control using precisely-controlled acoustic frequencies and thermal profiles. 
              Direct application of physics to reduce defect formation in materials manufacturing.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">70% Defect Reduction</span>
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">35% Performance Gain</span>
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">Cost Savings</span>
            </div>
            <div className="text-sm text-text-tertiary">
              <strong>Markets:</strong> Semiconductor fab • Superconductor manufacturing • Advanced materials • Pharmaceuticals
            </div>
          </div>

          {/* Database Systems */}
          <div className="card-elevated">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold">🗄️ High-Performance Databases</h2>
              <span className="text-xs bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full">Validated</span>
            </div>
            <p className="text-text-secondary mb-6">
              Novel indexing structures leveraging mathematical principles to maintain performance at scale. 
              Data organization inspired by hierarchical structures in physical systems.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">20-50× Speedup</span>
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">Scalable</span>
              <span className="px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-lg font-semibold">Reduced Storage</span>
            </div>
            <div className="text-sm text-text-tertiary">
              <strong>Markets:</strong> Enterprise data warehouses • Real-time analytics • E-commerce • Financial systems
            </div>
          </div>

        </section>

        {/* Physics Principles */}
        <section className="max-w-5xl mx-auto mt-20 mb-16">
          <div className="text-label mb-4">The Foundation</div>
          <h2 className="text-3xl font-bold mb-8">From Physics to <span className="text-gradient">Performance</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold mb-3">⚡ Optimization Principles</h3>
              <p className="text-sm text-text-secondary">
                Understanding how physical systems naturally find optimal states informs 
                algorithms that converge faster and achieve better results.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-3">🔄 Phase Transitions</h3>
              <p className="text-sm text-text-secondary">
                Knowledge of critical phenomena enables early detection of system state changes, 
                powering predictive analytics across domains.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-3">📊 Information Theory</h3>
              <p className="text-sm text-text-secondary">
                Physics-derived information theory principles lead to compression methods 
                that achieve higher ratios while maintaining integrity.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-3">🎯 Geometric Consistency</h3>
              <p className="text-sm text-text-secondary">
                Maintaining geometric consistency in state estimation yields dramatic 
                improvements in sensor fusion accuracy and stability.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto mt-20">
          <div className="card-elevated text-center">
            <h2 className="text-3xl font-bold mb-4">
              Licensing <span className="text-gradient">Opportunities</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Detailed technical specifications, performance benchmarks, and integration guidance 
              available to qualified partners under NDA.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="/ip-access" className="btn btn-secondary">
                IP Portfolio
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
