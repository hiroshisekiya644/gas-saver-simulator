import React from 'react'

export const Button = ({ children, disabled, className, ...props }) => (
  <button
    className={`px-4 py-2 font-semibold rounded-md transition ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'} ${className}`}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
)
