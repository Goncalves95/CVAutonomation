'use client'

import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { CVDocument } from '@/lib/cv-pdf'
import { CVData } from '@/lib/types'

export function PDFDownloadButton({ data }: { data: CVData }) {
  const fileName = `${(data.personal.name || 'CV').replace(/\s+/g, '_')}_CV.pdf`

  return (
    <PDFDownloadLink document={<CVDocument data={data} />} fileName={fileName}>
      {({ loading }) => (
        <button
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              A gerar PDF…
            </>
          ) : (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descarregar PDF
            </>
          )}
        </button>
      )}
    </PDFDownloadLink>
  )
}

export function PDFPreviewPane({ data }: { data: CVData }) {
  return (
    <PDFViewer width="100%" height="100%" showToolbar={false}>
      <CVDocument data={data} />
    </PDFViewer>
  )
}
