import Head from 'next/head'
import Layout from '../components/Layout'

export default function OrdinalTime() {
  return (
    <Layout>
      <Head>
        <title>Ordinal Time | Vere Ex Nihilo</title>
        <meta name="description" content="Understanding causality without arbitrary intervals" />
      </Head>
      
      <main className="min-h-screen px-6 py-12 bg-background text-white">
        {/* Hero */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="text-label mb-4">Conceptual Framework</div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Ordinal <span className="text-gradient">Time</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl">
            Time is not a ticking variable. It is structured emergence—the logical ordering 
            of events without reliance on external clocking or arbitrary intervals.
          </p>
        </section>

        {/* Core Concept */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="card-elevated">
            <h2 className="text-2xl font-bold mb-6">Beyond <span className="text-gradient">Clock Time</span></h2>
            <div className="space-y-6 text-text-secondary">
              <p>
                Conventional computing assumes time as an external, uniformly-ticking parameter. 
                Events happen "at time t." State updates occur "every Δt." This model works, but 
                it's fundamentally arbitrary.
              </p>
              <p>
                Ordinal Time represents a different approach: events are ordered by causality, 
                not by clock ticks. What matters is the sequence—what happened before, what happens 
                after, what must precede what.
              </p>
              <p>
                This isn't just philosophical. It has practical implications for how we design 
                systems that maintain consistency, handle asynchronous updates, and reason about 
                state without assuming synchronized clocks.
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8">Core <span className="text-gradient">Principles</span></h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="card">
              <div className="text-3xl mb-3">→</div>
              <h3 className="text-lg font-semibold mb-3">Justified Sequence</h3>
              <p className="text-sm text-text-secondary">
                Events are ordered by logical necessity, not arbitrary timestamps. 
                If A causes B, then A precedes B. No external clock required.
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">⊕</div>
              <h3 className="text-lg font-semibold mb-3">Causal Consistency</h3>
              <p className="text-sm text-text-secondary">
                Systems maintain integrity through causality tracking rather than synchronized clocks. 
                State updates respect dependency order automatically.
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">∞</div>
              <h3 className="text-lg font-semibold mb-3">Asynchronous by Nature</h3>
              <p className="text-sm text-text-secondary">
                No assumption of simultaneity. Events happen when their causal preconditions are met, 
                not when a global clock reaches a certain value.
              </p>
            </div>

            <div className="card">
              <div className="text-3xl mb-3">⊂</div>
              <h3 className="text-lg font-semibold mb-3">Structural Integrity</h3>
              <p className="text-sm text-text-secondary">
                The ordering itself carries information. Causality structure is preserved 
                through updates without retrofitting or reconciliation.
              </p>
            </div>

          </div>
        </section>

        {/* Applications */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8">Practical <span className="text-gradient">Applications</span></h2>
          
          <div className="space-y-6">
            
            <div className="card-elevated">
              <div className="flex items-start gap-4">
                <div className="text-accent-primary text-3xl">📊</div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Distributed Systems</h3>
                  <p className="text-sm text-text-secondary mb-3">
                    Traditional distributed systems struggle with clock synchronization. Ordinal Time 
                    enables systems to maintain consistency through causal ordering rather than 
                    synchronized timestamps.
                  </p>
                  <p className="text-xs text-text-tertiary">
                    Example: Sensor fusion without clock synchronization, distributed databases with 
                    causal consistency, event sourcing systems with logical clocks.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <div className="flex items-start gap-4">
                <div className="text-accent-primary text-3xl">⚡</div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Real-Time Processing</h3>
                  <p className="text-sm text-text-secondary mb-3">
                    Instead of processing "every 10ms," systems react when causal conditions are met. 
                    This reduces latency and improves responsiveness without sacrificing correctness.
                  </p>
                  <p className="text-xs text-text-tertiary">
                    Example: Event-driven architectures, reactive systems, stream processing with 
                    causal dependencies.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elevated">
              <div className="flex items-start gap-4">
                <div className="text-accent-primary text-3xl">🔄</div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">State Management</h3>
                  <p className="text-sm text-text-secondary mb-3">
                    State transitions happen in causal order, not clock order. This eliminates race 
                    conditions and synchronization overhead while maintaining strict consistency.
                  </p>
                  <p className="text-xs text-text-tertiary">
                    Example: Concurrent updates in collaborative systems, version control with 
                    causal history, conflict-free replicated data types.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Implications */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="card-elevated bg-accent-primary/5 border border-accent-primary/20">
            <h2 className="text-2xl font-bold mb-6">Design <span className="text-gradient">Implications</span></h2>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                <strong className="text-white">No assumptions:</strong> Systems designed with Ordinal Time 
                don't assume synchronized clocks, uniform tick rates, or global time. They work correctly 
                even when components operate at different speeds or with unpredictable latencies.
              </p>
              
              <p>
                <strong className="text-white">No retrofits:</strong> State updates happen in the right order 
                from the start. There's no need to reconcile conflicting timestamps, merge divergent histories, 
                or resolve synchronization conflicts after the fact.
              </p>
              
              <p>
                <strong className="text-white">Only integrity:</strong> The system maintains consistency through 
                causality. If event B depends on event A, the system ensures A precedes B in the logical order. 
                The structure itself guarantees correctness.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="card-elevated">
            <h2 className="text-2xl font-bold mb-6">Why It <span className="text-gradient">Matters</span></h2>
            
            <div className="space-y-6 text-text-secondary">
              <p>
                Ordinal Time forms the backbone of our approach to system design. It's not about 
                eliminating clocks entirely—practical systems still need timestamps for logging, 
                monitoring, and user interfaces.
              </p>
              
              <p>
                It's about recognizing that the fundamental ordering of events comes from causality, 
                not from clock ticks. When we design from this principle, we build systems that are 
                naturally more robust, more scalable, and more correct.
              </p>
              
              <p>
                This is first principles thinking applied to time itself. We don't accept "time is 
                a uniformly-ticking parameter" just because that's how most systems work. We ask: 
                what is time, really? What properties must an ordering have to preserve causality? 
                What can we eliminate without losing correctness?
              </p>
              
              <p>
                The answer: Ordinal Time. Structured emergence through justified sequence.
              </p>
            </div>
          </div>
        </section>

        {/* Connection to Work */}
        <section className="max-w-4xl mx-auto">
          <div className="card-elevated text-center">
            <h2 className="text-2xl font-bold mb-4">
              Part of Our <span className="text-gradient">Foundation</span>
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Ordinal Time is one example of how we think differently about fundamental concepts. 
              This same approach—questioning assumptions, starting from principles, building from 
              justified foundations—permeates all our work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/applications" className="btn btn-primary">
                See Applications
              </a>
              <a href="/who" className="btn btn-secondary">
                Our Approach
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}