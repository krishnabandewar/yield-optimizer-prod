'use client'

import { useEffect, useState } from 'react'

interface YieldDisplayProps {
  userDeposits: number
  selectedStrategy: 'low' | 'high'
}

export default function YieldDisplay({ userDeposits, selectedStrategy }: YieldDisplayProps) {
  const [projectedYield, setProjectedYield] = useState(0)
  const [currentYield, setCurrentYield] = useState(0)

  useEffect(() => {
    const apy = selectedStrategy === 'low' ? 0.0427 : 0.0845
    const dailyRate = apy / 365
    setProjectedYield(userDeposits * apy)
    setCurrentYield(userDeposits * dailyRate)
  }, [userDeposits, selectedStrategy])

  const stats = [
    {
      label: 'Total Deposited',
      value: `$${userDeposits.toFixed(2)}`,
      change: null,
      icon: '💰'
    },
    {
      label: 'Current APY',
      value: selectedStrategy === 'low' ? '4.27%' : '8.45%',
      change: '+0.12%',
      icon: '📈'
    },
    {
      label: 'Daily Yield',
      value: `$${currentYield.toFixed(4)}`,
      change: '+2.3%',
      icon: '⚡'
    },
    {
      label: 'Projected Annual',
      value: `$${projectedYield.toFixed(2)}`,
      change: '+5.7%',
      icon: '🎯'
    }
  ]

  return (
    <div className="card">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Yield Analytics
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{stat.icon}</span>
              {stat.change && (
                <span className="text-sm text-green-600 font-medium">
                  {stat.change}
                </span>
              )}
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-primary-50 to-purple-50 p-6 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          Strategy Performance
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="text-sm text-gray-600 mb-2">Active Strategy</div>
            <div className="text-xl font-bold text-primary-600">
              {selectedStrategy === 'low' ? 'Aave Low Risk' : 'Pendle High Risk'}
            </div>
          </div>
          
          <div>
            <div className="text-sm text-gray-600 mb-2">Market Trend</div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-orange-600">Downtrend</span>
              <span className="text-sm text-gray-500">
                (AI optimizing for current conditions)
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-white rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Next AI Analysis</div>
          <div className="text-sm font-medium text-gray-900">
            Scheduled for next market cycle (≈ 4 hours)
          </div>
        </div>
      </div>
    </div>
  )
}