export default function Features() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Strategy Selection',
      description: 'Advanced algorithms analyze market conditions and user risk preferences to select optimal yield strategies.'
    },
    {
      icon: '🔗',
      title: 'Chainlink Automation',
      description: 'Secure, decentralized automation triggers fund allocation based on AI recommendations.'
    },
    {
      icon: '🛡️',
      title: 'Risk Management',
      description: 'Choose between low-risk (Aave) and high-risk (Pendle) strategies based on your risk appetite.'
    },
    {
      icon: '💰',
      title: 'Multi-Asset Support',
      description: 'Deposit USDC directly or swap USDY to USDC automatically through our integrated swap mechanism.'
    },
    {
      icon: '📊',
      title: 'Real-Time Analytics',
      description: 'Monitor your yields, track performance, and view detailed analytics of your investments.'
    },
    {
      icon: '🔒',
      title: 'Security First',
      description: 'Built with OpenZeppelin contracts, reentrancy protection, and comprehensive security measures.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of DeFi yield optimization with our cutting-edge AI technology 
            and battle-tested smart contracts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card hover:shadow-lg transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}