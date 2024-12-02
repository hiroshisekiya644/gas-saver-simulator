'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function GasSaverSimulator() {
  const [formData, setFormData] = useState({
    chainId: '1', // Ethereum 
    fromAddress: '',
    tokenIn: '',
    tokenOut: '',
    amountIn: '',
    feeReceiver: '',
    disableRFQs: false,
  })
  const [response, setResponse] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? e.target.checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setResponse(null)

    try {
      const response = await fetch(`${API_BASE_URL}/api/simulate-swap`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to simulate swap')
      }

      const data = await response.json()
      setResponse(data.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-8 px-4">
      <Card className="max-w-2xl mx-auto bg-gray-800 text-gray-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Gas Saver Simulator</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fromAddress">From Address:</Label>
              <Input
                type="text"
                id="fromAddress"
                name="fromAddress"
                value={formData.fromAddress}
                onChange={handleInputChange}
                placeholder="0x..."
                className="bg-gray-700 text-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tokenIn">Token In (Contract Address):</Label>
              <Input
                type="text"
                id="tokenIn"
                name="tokenIn"
                value={formData.tokenIn}
                onChange={handleInputChange}
                placeholder="0x..."
                className="bg-gray-700 text-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tokenOut">Token Out (Contract Address):</Label>
              <Input
                type="text"
                id="tokenOut"
                name="tokenOut"
                value={formData.tokenOut}
                onChange={handleInputChange}
                placeholder="0x..."
                className="bg-gray-700 text-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amountIn">Amount In:</Label>
              <Input
                type="text"
                id="amountIn"
                name="amountIn"
                value={formData.amountIn}
                onChange={handleInputChange}
                placeholder="1.0"
                className="bg-gray-700 text-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="feeReceiver">Fee Receiver:</Label>
              <Input
                type="text"
                id="feeReceiver"
                name="feeReceiver"
                value={formData.feeReceiver}
                onChange={handleInputChange}
                placeholder="0x..."
                className="bg-gray-700 text-gray-100"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="disableRFQs"
                name="disableRFQs"
                checked={formData.disableRFQs}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, disableRFQs: checked as boolean }))}
              />
              <Label htmlFor="disableRFQs">Disable RFQs</Label>
            </div>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? 'Simulating...' : 'Simulate Swap'}
            </Button>
          </form>
        </CardContent>

        {error && (
          <CardContent>
            <div className="bg-red-900 text-red-100 p-4 rounded-md">
              <h2 className="font-bold mb-2">Error:</h2>
              <p>{error}</p>
            </div>
          </CardContent>
        )}

        {response && (
          <CardContent>
            <div className="bg-gray-700 p-4 rounded-md">
              <h2 className="font-bold mb-2">Simulation Results:</h2>
              <p>Gas Cost: {response.gasCost}</p>
              <p>Gas Cost in ETH: {response.gasCostInEth}</p>
              <p>Amount Out: {response.amountOut}</p>
              <p>Price Impact: {response.priceImpact}%</p>
            </div>
          </CardContent>
        )}

        <CardFooter className="justify-center">
            <p className="text-sm text-gray-400">
                Powered by the <a href="https://api-docs.enso.finance/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Enso Network API</a>.
                Built by <a href="https://hummusonrails.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">hummusonrails</a>.
            </p>
        </CardFooter>
      </Card>
    </div>
  )
}
