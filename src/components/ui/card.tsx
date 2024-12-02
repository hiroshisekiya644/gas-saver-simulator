import React from 'react'

export const Card = ({ children, className }) => (
  <div className={`rounded-lg shadow-md p-4 bg-gray-800 text-gray-100 ${className}`}>
    {children}
  </div>
)

export const CardHeader = ({ children }) => <div className="mb-4">{children}</div>
export const CardTitle = ({ children }) => <h2 className="text-xl font-bold">{children}</h2>
export const CardContent = ({ children }) => <div className="mb-4">{children}</div>
export const CardFooter = ({ children }) => <div className="mt-4">{children}</div>
