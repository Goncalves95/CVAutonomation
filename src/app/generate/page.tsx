'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState, useCallback } from 'react'
import { CVForm } from '@/components/cv-form'
import { CVData } from '@/lib/types'
import { defaultCVData } from '@/lib/default-data'

const PDFDownloadButton = dynamic(
  () => import('@/components/pdf-download-button').then(m => m.PDFDownloadButton),
  { ssr: false, loading: () => <div className="h-11 bg-gray-100 rounded-lg animate-pulse" /> }
)

const PDFPreviewPane = dynamic(
  () => import('@/components/pdf-download-button').then(m => m.PDFPreviewPane),
  { ssr: false, loading: () => <div className="flex items-center justify-center h-full text-gray-400 text-sm">Loading preview…</div> }
)

export default function GeneratePage() {
  const [cvData, setCvData] = useState<CVData>(defaultCVData)
  const [showPreview, setShowPreview] = useState(true)

  const handleChange = useCallback((data: CVData) => {
    setCvData({ ...data })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-gray-400 hover:text-gray-700 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="font-bold text-gray-900 text-base">CV Generator</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowPreview(p => !p)}
            className="text-sm text-gray-600 hover:text-gray-900 font-medium hidden md:block"
          >
            {showPreview ? 'Hide preview' : 'Show preview'}
          </button>
          <div className="w-48">
            <PDFDownloadButton data={cvData} />
          </div>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden" style={{ height: 'calc(100vh - 73px)' }}>
        <div className={`overflow-y-auto bg-white border-r border-gray-200 transition-all ${showPreview ? 'w-full md:w-[480px] lg:w-[520px]' : 'w-full'}`}>
          <div className="p-6 max-w-2xl mx-auto">
            <CVForm onChange={handleChange} />
          </div>
        </div>

        {showPreview && (
          <div className="hidden md:flex flex-1 flex-col bg-gray-100">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-200 text-xs text-gray-500 font-medium uppercase tracking-wide">
              <span>PDF Preview</span>
              <span className="text-gray-400">updates as you type</span>
            </div>
            <div className="flex-1 p-4">
              <PDFPreviewPane data={cvData} />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
