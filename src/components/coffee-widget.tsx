'use client'

import { useState } from 'react'

export function CoffeeWidget() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Card */}
      <div className="group bg-white border border-amber-200 rounded-2xl shadow-lg shadow-amber-100/50 overflow-hidden max-w-[260px]">
        {/* Dismiss */}
        <div className="flex justify-end px-3 pt-2">
          <button
            onClick={() => setDismissed(true)}
            className="text-gray-300 hover:text-gray-500 transition-colors text-lg leading-none"
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="px-4 pb-4 flex flex-col items-center text-center gap-3">
          <div className="text-3xl animate-bounce" style={{ animationDuration: '2s' }}>☕</div>
          <p className="text-xs text-gray-600 leading-relaxed">
            This tool is <span className="font-semibold text-gray-800">100% free</span>. If it helped you land an interview, consider supporting me so I can keep building free tools!
          </p>
          <a
            href="https://www.buymeacoffee.com/imfernandodev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold text-xs py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-1.5"
          >
            ☕ Buy me a coffee
          </a>
        </div>
      </div>
    </div>
  )
}
