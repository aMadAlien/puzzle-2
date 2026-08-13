import React, { ReactNode } from 'react'

export default function Switcher({ isActive, children, onClick }: { isActive: boolean, children: ReactNode, onClick: () => void }) {
  return (
    <button
      type="button"
      className={`switcher mb-4 ${isActive ? 'first' : 'second'}`}
      onClick={onClick}
    >
      <span className="switcher-indicator" />
      {children}
    </button>
  )
}
