import Head from 'next/head'
import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact | Vere Ex Nihilo</title>
        <meta name="description" content="Get in touch for licensing discussions and partnership opportunities" />
      </Head>
      
      <main className="min-h-screen px-6 py-12 bg-background text-white">
        {/* Hero */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="text-label mb-4">Get in Touch</div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl">
            We&apos;re selective about partnerships but always interested in discussions with organizations
            that value breakthrough technology and rigorous IP protection.
          </p>
        </section>

        {/* Contact Methods */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="card-elevated">
              <h2 className="text-2xl font-bold mb-6">Direct <span className="text-gradient">Contact</span></h2>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-text-tertiary uppercase tracking-wider mb-2">Email</div>
                  <a href="mailto:andrew.jones@vereexnihilo.com" className="text-lg text-accent-primary hover:underline">
                    andrew.jones@vereexnihilo.com
                  </a>
                  <p className="text-sm text-text-secondary mt-2">
                    Preferred for technical discussions and licensing inquiries.
                    Encrypted communication available upon request.
                  </p>
                </div>

                <div>
                  <div className="text-sm text-text-tertiary uppercase tracking-wider mb-2">Phone</div>
                  <a href="tel:+64212425994" className="text-lg text-accent-primary hover:underline">
                    +64 21 242 5994
                  </a>
                  <p className="text-sm text-text-secondary mt-2">
                    Available for scheduled calls. Please email first to arrange a time.
                  </p>
                </div>

                <div>
                  <div className="text-sm text-text-tertiary uppercase tracking-wider mb-2">Location</div>
                  <div className="text-lg">New Zealand</div>
                  <p className="text-sm text-text-secondary mt-2">
                    Headquarters in New Zealand with global patent strategy and international partnerships.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <h2 className="text-2xl font-bold mb-6">Inquiry <span className="text-gradient">Types</span></h2>
              
              <div className="space-y-4">
                <div className="card bg-bg-secondary">
                  <h3 className="font-semibold mb-2">🤝 Licensing Partnerships</h3>
                  <p className="text-sm text-text-secondary">
                    Exclusive or non-exclusive licensing for specific technology domains. 
                    Ideal for established companies seeking competitive differentiation.
                  </p>
                </div>

                <div className="card bg-bg-secondary">
                  <h3 className="font-semibold mb-2">📄 NDA & Technical Access</h3>
                  <p className="text-sm text-text-secondary">
                    Request NDA templates and access to detailed technical specifications, 
                    performance benchmarks, and proof-of-concept demonstrations.
                  </p>
                </div>

                <div className="card bg-bg-secondary">
                  <h3 className="font-semibold mb-2">🔬 Research Collaboration</h3>
                  <p className="text-sm text-text-secondary">
                    Joint development opportunities with academic institutions or 
                    research-focused organizations. Limited availability.
                  </p>
                </div>

                <div className="card bg-bg-secondary">
                  <h3 className="font-semibold mb-2">💼 Strategic Investment</h3>
                  <p className="text-sm text-text-secondary">
                    Discussions with strategic investors who understand deep-tech IP 
                    and long-term value creation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Process */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8">Our <span className="text-gradient">Process</span></h2>
          
          <div className="space-y-4">
            <div className="card-elevated">
              <div className="flex items-start gap-4">
                <div className="text-accent-primary font-bold text-2xl min-w-[3rem]">01</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Initial Contact</h3>
                  <p className="text-sm text-text-secondary">
                    Reach out via email with brief description of your organization and interest.
                    We respond to all serious inquiries within 48 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <div className="flex items-start gap-4">
                <div className="text-accent-primary font-bold text-2xl min-w-[3rem]">02</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Qualification Discussion</h3>
                  <p className="text-sm text-text-secondary">
                    Brief call or email exchange to understand your needs, technical requirements,
                    and determine if there&apos;s a potential fit.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <div className="flex items-start gap-4">
                <div className="text-accent-primary font-bold text-2xl min-w-[3rem]">03</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">NDA Execution</h3>
                  <p className="text-sm text-text-secondary">
                    Mutual NDA signed before any technical details or performance data shared. 
                    Standard templates available, or we can work with your legal team.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <div className="flex items-start gap-4">
                <div className="text-accent-primary font-bold text-2xl min-w-[3rem]">04</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technical Disclosure</h3>
                  <p className="text-sm text-text-secondary">
                    Access to detailed specifications, benchmark data, proof-of-concept demonstrations, 
                    and integration requirements for relevant technology domains.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <div className="flex items-start gap-4">
                <div className="text-accent-primary font-bold text-2xl min-w-[3rem]">05</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Term Sheet & Negotiation</h3>
                  <p className="text-sm text-text-secondary">
                    Discussion of licensing terms, field-of-use restrictions, payment structure,
                    and partnership framework. We&apos;re flexible but selective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expectations */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="card-elevated bg-accent-primary/5 border border-accent-primary/20">
            <h2 className="text-2xl font-bold mb-6">What We <span className="text-gradient">Look For</span></h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">In Partners</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Technical sophistication to understand and implement our methods</li>
                  <li>• Established market presence with distribution capabilities</li>
                  <li>• Long-term strategic thinking, not just quick wins</li>
                  <li>• Respect for IP protection and trade secret protocols</li>
                  <li>• Willingness to collaborate on optimization and improvements</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">In Discussions</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• Clear articulation of technical challenges and business needs</li>
                  <li>• Understanding that breakthrough technology requires investment</li>
                  <li>• Patience with thorough due diligence on both sides</li>
                  <li>• Openness to non-standard licensing structures</li>
                  <li>• Commitment to confidentiality and professional conduct</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Confidentiality Notice */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="card-elevated text-center">
            <h2 className="text-xl font-bold mb-4">Confidentiality & Security</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              All correspondence is treated in strict confidence. We never share partner identities, 
              discussion details, or business terms without explicit permission. Encrypted communication 
              channels available for sensitive discussions.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto">
          <div className="card-elevated text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to <span className="text-gradient">explore</span> opportunities?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Reach out to start the conversation. We&apos;re selective, but we&apos;re always interested
              in working with exceptional organizations.
            </p>
            <a href="mailto:andrew.jones@vereexnihilo.com" className="btn btn-primary">
              Send an Email →
            </a>
          </div>
        </section>
      </main>
    </Layout>
  )
}