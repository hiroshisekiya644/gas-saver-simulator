import React from 'react'

export const Input = ({ className, ...props }) => (
  <input
    className={`w-full px-4 py-2 rounded-md border border-gray-500 bg-gray-800 text-gray-100 ${className}`}
    {...props}
  />
)
