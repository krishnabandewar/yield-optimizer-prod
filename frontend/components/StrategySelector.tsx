'use client'

interface StrategySelectorProps {
  selectedStrategy: 'low' | 'high'
  setSelectedStrategy: (strategy: 'low' | 'high') => void
}

export default function StrategySelector({ 
  selectedStrategy, 
  setSelectedStrategy 
}: StrategySelectorProps) {
  const strategies = [
    {
      id: 'low' as const,
      name: 'Low Risk Strategy',
      protocol: 'Aave',
      apy: '4.27%',
      description: 'Conservative lending strategy with stable returns',
      risk: 'Low',
      riskColor: 'text-green-600 bg-green-100',
      features: ['Stable yields', 'Low volatility', 'High liquidity']
    },
    {
      id: 'high' as const,
      name: 'High Risk Strategy',
      protocol: 'Pendle',
      apy: '8.45%',
      description: 'Higher yield potential with increased risk exposure',
      risk: 'High',
      riskColor: 'text-orange-600 bg-orange-100',
      features: ['Higher yields', 'Market exposure', 'Active management']
    }
  ]

  return (
    <div className="card">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Strategy Selection
      </h3>
      
      <div className="space-y-4">
        {strategies.map((strategy) => (
          <div
            key={strategy.id}
            onClick={() => setSelectedStrategy(strategy.id)}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedStrategy === strategy.id
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {strategy.name}
                </h4>
                <p className="text-sm text-gray-600">
                  Powered by {strategy.protocol}
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-600">
                  {strategy.apy}
                </div>
                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${strategy.riskColor}`}>
                  {strategy.risk} Risk
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-3">
              {strategy.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {strategy.features.map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-blue-600">ℹ️</span>
          <span className="font-medium text-blue-900">AI Recommendation</span>
        </div>
        <p className="text-sm text-blue-800">
          Based on current market conditions and trend analysis, the AI recommends the{' '}
          <strong>{selectedStrategy === 'low' ? 'Low Risk' : 'High Risk'}</strong> strategy 
          for optimal yield generation.
        </p>
      </div>
    </div>
  )
}