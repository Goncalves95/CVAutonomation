'use client'

import { useState } from 'react'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { CVDocument } from '@/lib/cv-pdf'
import { CVData } from '@/lib/types'

const COFFEE_URL = 'https://www.buymeacoffee.com/imfernandodev'

function DownloadModal({ data, onClose }: { data: CVData; onClose: () => void }) {
  const fileName = `${(data.personal.name || 'CV').replace(/\s+/g, '_')}_CV.pdf`

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm flex flex-col overflow-hidden animate-in">

        {/* Top: generating state */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-8 pt-8 pb-6 flex flex-col items-center gap-4 text-white text-center">
          {/* Animated document icon */}
          <div className="relative">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          <div>
            <h2 className="text-lg font-bold">Your CV is ready!</h2>
            <p className="text-blue-100 text-sm mt-1">Click the button below to download your PDF.</p>
          </div>

          {/* Download button inside modal */}
          <PDFDownloadLink document={<CVDocument data={data} />} fileName={fileName}>
            {({ loading }) => (
              <button
                disabled={loading}
                onClick={() => setTimeout(onClose, 1200)}
                className="w-full bg-white hover:bg-blue-50 disabled:bg-white/50 text-blue-700 disabled:text-blue-400 font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-lg"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Preparing your PDF…
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </>
                )}
              </button>
            )}
          </PDFDownloadLink>
        </div>

        {/* Bottom: coffee support */}
        <div className="px-8 py-6 flex flex-col items-center gap-3 text-center bg-amber-50 border-t border-amber-100">
          <span className="text-2xl">☕</span>
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">Enjoyed the tool?</span> This is 100% free and always will be. If it helped you land an interview, a coffee keeps me going and helps me build more tools like this!
          </p>
          <a
            href={COFFEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-amber-400 hover:bg-amber-300 text-amber-900 font-bold py-2.5 px-4 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
          >
            ☕ Buy me a coffee
          </a>
          <button
            onClick={onClose}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            No thanks, close
          </button>
        </div>

      </div>
    </div>
  )
}

export function PDFDownloadButton({ data }: { data: CVData }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download PDF
      </button>

      {showModal && <DownloadModal data={data} onClose={() => setShowModal(false)} />}
    </>
  )
}

export function PDFPreviewPane({ data }: { data: CVData }) {
  return (
    <PDFViewer width="100%" height="100%" showToolbar={false}>
      <CVDocument data={data} />
    </PDFViewer>
  )
}
