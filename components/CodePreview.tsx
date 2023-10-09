'use client'

import SyntaxHighlighter from 'react-syntax-highlighter'
import stackoverflowLight from 'react-syntax-highlighter/dist/cjs/styles/hljs/stackoverflow-light'

type Props = {
  code: string
  language: string
}

export default function CodePreview({ language, code }: Props) {
  return (
    <>
      {/* @ts-ignore */}
      <SyntaxHighlighter
        language={language}
        style={stackoverflowLight}
        customStyle={{
          padding: '1rem',
          borderRadius: 16,
        }}
        lineProps={{
          style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' },
        }}
        wrapLines={true}
        className="scrollbar"
      >
        {code}
      </SyntaxHighlighter>
    </>
  )
}
