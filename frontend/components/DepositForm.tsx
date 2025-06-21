'use client'

import { useState } from 'react'

interface DepositFormProps {
  userDeposits: number
  setUserDeposits: (amount: number) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export default function DepositForm({ 
  userDeposits, 
  setUserDeposits, 
  isLoading, 
  setIsLoading 
}: DepositFormProps) {
  const [depositAmount, setDepositAmount] = useState('')
  const [withdrawAmount, setWithdrawAmount] = useState('')
  const [activeTab, setActiveTab] = useState<'deposit' | 'withdraw'>('deposit')

  const handleDeposit = async () => {
    if (!depositAmount || parseFloat(depositAmount) <= 0) return
    
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setUserDeposits(userDeposits + parseFloat(depositAmount))
      setDepositAmount('')
    } catch (error) {
      console.error('Deposit failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleWithdraw = async () => {
    if (!withdrawAmount || parseFloat(withdrawAmount) <= 0) return
    if (parseFloat(withdrawAmount) > userDeposits) return
    
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setUserDeposits(userDeposits - parseFloat(withdrawAmount))
      setWithdrawAmount('')
    } catch (error) {
      console.error('Withdrawal failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="card">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Manage Funds
      </h3>
      
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('deposit')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'deposit'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Deposit
        </button>
        <button
          onClick={() => setActiveTab('withdraw')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'withdraw'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Withdraw
        </button>
      </div>

      <div className="mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Your Balance</div>
          <div className="text-2xl font-bold text-gray-900">
            {userDeposits.toFixed(2)} USDC
          </div>
        </div>
      </div>

      {activeTab === 'deposit' ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deposit Amount (USDC)
            </label>
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="0.00"
              className="input"
              disabled={isLoading}
            />
          </div>
          <button
            onClick={handleDeposit}
            disabled={isLoading || !depositAmount || parseFloat(depositAmount) <= 0}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Processing...' : 'Deposit USDC'}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Withdraw Amount (USDC)
            </label>
            <input
              type="number"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              placeholder="0.00"
              max={userDeposits}
              className="input"
              disabled={isLoading}
            />
          </div>
          <button
            onClick={handleWithdraw}
            disabled={
              isLoading || 
              !withdrawAmount || 
              parseFloat(withdrawAmount) <= 0 || 
              parseFloat(withdrawAmount) > userDeposits
            }
            className="btn-danger w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Processing...' : 'Withdraw USDC'}
          </button>
        </div>
      )}
    </div>
  )
}