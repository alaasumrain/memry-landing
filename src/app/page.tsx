import Link from 'next/link';
import { DynamicHero, DynamicCodeBlock, DynamicErrorBoundary } from '@/components/client-wrapper';
import { FeatureCard } from '@/components/features/feature-card';
import { PricingTable } from '@/components/pricing/pricing-table';
import { GradientButton } from '@/components/ui/gradient-button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0">
          <DynamicErrorBoundary>
            <DynamicHero />
          </DynamicErrorBoundary>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
            The Memory Layer for AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Enable your AI agents to remember context, learn from interactions, and deliver personalized experiences at scale.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <GradientButton href="/docs" size="lg">
              Get Started
            </GradientButton>
            <GradientButton href="/demo" variant="outline" size="lg">
              Try Demo
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Integrate in Minutes
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Add persistent memory to your AI applications with just a few lines of code. Support for all major languages and frameworks.
              </p>
              <div className="flex gap-4">
                <Link href="/docs" className="text-blue-500 hover:text-blue-400">
                  View Documentation →
                </Link>
              </div>
            </div>
            <DynamicCodeBlock
              language="typescript"
              code={`import { MemryClient } from '@memry/sdk';

const memry = new MemryClient({
  apiKey: 'your_api_key'
});

// Store a memory
await memry.store({
  content: "User prefers dark mode",
  metadata: { category: "preferences" }
});

// Retrieve relevant context
const memories = await memry.retrieve({
  query: "user preferences"
});`}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Built for AI-First Applications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🧠"
              title="Contextual Memory"
              description="Enable your AI to remember past interactions and user preferences for more personalized experiences."
            />
            <FeatureCard
              icon="⚡️"
              title="High Performance"
              description="Sub-100ms response times with automatic caching and optimization for AI workloads."
            />
            <FeatureCard
              icon="🔍"
              title="Semantic Search"
              description="Find relevant memories using natural language queries powered by embeddings."
            />
            <FeatureCard
              icon="🔒"
              title="Enterprise Ready"
              description="Built-in security, monitoring, and compliance features for production deployments."
            />
            <FeatureCard
              icon="📈"
              title="Usage Analytics"
              description="Detailed insights into memory usage, performance metrics, and costs."
            />
            <FeatureCard
              icon="🌐"
              title="Global Scale"
              description="Distributed architecture that scales automatically with your usage."
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Perfect For Your Project
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                AI Assistants
              </h3>
              <p className="text-gray-400">
                Build assistants that remember user preferences and past conversations.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Customer Support
              </h3>
              <p className="text-gray-400">
                Enable support bots to maintain context across multiple interactions.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Personalization
              </h3>
              <p className="text-gray-400">
                Deliver tailored experiences based on learned user preferences.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                AI Agents
              </h3>
              <p className="text-gray-400">
                Create autonomous agents that learn and adapt from their actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Simple, Usage-Based Pricing
          </h2>
          <PricingTable />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join the growing number of companies using Memry to build smarter AI applications.
          </p>
          <GradientButton href="/signup" size="lg">
            Start Building
          </GradientButton>
        </div>
      </section>
    </main>
  );
}
