import * as SelectPrimitive from '@radix-ui/react-select'
import React from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'

export const Select = ({ children, onValueChange, defaultValue }: { children: React.ReactNode, onValueChange: (value: string) => void, defaultValue?: string }) => {
  return (
    <SelectPrimitive.Root onValueChange={onValueChange} defaultValue={defaultValue}>
      <SelectPrimitive.Trigger className="inline-flex items-center justify-between w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-md border border-gray-600 shadow-sm focus:ring-2 focus:ring-blue-500">
        <SelectPrimitive.Value placeholder="Select an option" />
        <ChevronDownIcon className="w-4 h-4 ml-2" />
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content className="bg-gray-800 text-gray-100 rounded-md shadow-lg">
        <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  )
}

export const SelectTrigger = SelectPrimitive.Trigger
export const SelectValue = SelectPrimitive.Value
export const SelectContent = SelectPrimitive.Content
export const SelectItem = ({ value, children }: { value: string; children: React.ReactNode }) => (
  <SelectPrimitive.Item
    value={value}
    className="px-4 py-2 rounded-md cursor-pointer focus:bg-blue-500 focus:text-white"
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
)
