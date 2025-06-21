'use client'

import { useState, useEffect } from 'react'
import DepositForm from './DepositForm'
import StrategySelector from './StrategySelector'
import YieldDisplay from './YieldDisplay'

export default function Dashboard() {
  const [userDeposits, setUserDeposits] = useState(0)
  const [selectedStrategy, setSelectedStrategy] = useState<'low' | 'high'>('low')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Yield Dashboard
          </h2>
          <p className="text-xl text-gray-600">
            Manage your deposits, select strategies, and track your yields
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <DepositForm 
              userDeposits={userDeposits}
              setUserDeposits={setUserDeposits}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
            <StrategySelector 
              selectedStrategy={selectedStrategy}
              setSelectedStrategy={setSelectedStrategy}
            />
          </div>
          
          <YieldDisplay 
            userDeposits={userDeposits}
            selectedStrategy={selectedStrategy}
          />
        </div>
      </div>
    </section>
  )
}