'use client'

import { useState } from 'react'
import ConnectWallet from './ConnectWallet'

export default function Hero() {
  const [isConnected, setIsConnected] = useState(false)

  return (
    <section className="gradient-bg text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            AI-Driven Yield
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Optimization
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-up">
            Maximize your USDC yields with intelligent AI-powered strategy selection 
            and automated fund allocation across DeFi protocols.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <ConnectWallet 
              isConnected={isConnected} 
              setIsConnected={setIsConnected} 
            />
            <button className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20">
              Learn More
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">4.27%</div>
              <div className="text-blue-200">Current Low Risk APY</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">$2.5M+</div>
              <div className="text-blue-200">Total Value Locked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-blue-200">AI Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}