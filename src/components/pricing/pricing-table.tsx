import { GradientButton } from '../ui/gradient-button';

const tiers = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for testing and small projects',
    features: [
      '10,000 API calls per month',
      '1GB storage',
      'Basic support',
      'API key access',
      'Usage dashboard',
      'Community access'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    name: 'Starter',
    price: '10',
    description: 'For growing applications',
    features: [
      '100,000 API calls per month',
      '10GB storage',
      'Priority support',
      'Multiple API keys',
      'Advanced analytics',
      'Usage alerts'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Pro',
    price: '50',
    description: 'For production applications',
    features: [
      '1M API calls per month',
      '100GB storage',
      '24/7 support',
      'Team access',
      'Custom analytics',
      'SLA guarantee'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

export function PricingTable() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`relative rounded-2xl ${
            tier.highlighted
              ? 'bg-gradient-to-b from-blue-600 to-purple-600'
              : 'bg-gray-800'
          } p-px`}
        >
          <div className={`h-full rounded-2xl ${
            tier.highlighted ? 'bg-gray-900' : 'bg-gray-800'
          } p-8`}>
            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-3">
                <span className="text-4xl font-bold text-white">${tier.price}</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="text-gray-400">{tier.description}</p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-auto">
              <GradientButton
                href={tier.name === 'Pro' ? '/contact' : '/signup'}
                variant={tier.highlighted ? 'default' : 'outline'}
                className="w-full"
              >
                {tier.cta}
              </GradientButton>
            </div>
          </div>

          {/* Highlight effect */}
          {tier.highlighted && (
            <div className="absolute -inset-[2px] bg-gradient-to-b from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-50" />
          )}
        </div>
      ))}
    </div>
  );
}
