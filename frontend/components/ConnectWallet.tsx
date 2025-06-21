'use client'

import { useState } from 'react'

interface ConnectWalletProps {
  isConnected: boolean
  setIsConnected: (connected: boolean) => void
}

export default function ConnectWallet({ isConnected, setIsConnected }: ConnectWalletProps) {
  const [isConnecting, setIsConnecting] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const connectWallet = async () => {
    setIsConnecting(true)
    
    try {
      if (typeof window !== 'undefined' && window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        })
        
        if (accounts.length > 0) {
          setWalletAddress(accounts[0])
          setIsConnected(true)
        }
      } else {
        alert('Please install MetaMask to connect your wallet')
      }
    } catch (error) {
      console.error('Error connecting wallet:', error)
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setWalletAddress('')
  }

  if (isConnected) {
    return (
      <div className="flex items-center gap-3">
        <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/20">
          <span className="text-sm text-blue-200">Connected:</span>
          <span className="ml-2 font-mono text-sm">
            {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </span>
        </div>
        <button 
          onClick={disconnectWallet}
          className="btn bg-red-500/20 text-red-200 border border-red-500/30 hover:bg-red-500/30"
        >
          Disconnect
        </button>
      </div>
    )
  }

  return (
    <button 
      onClick={connectWallet}
      disabled={isConnecting}
      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isConnecting ? 'Connecting...' : 'Connect Wallet'}
    </button>
  )
}