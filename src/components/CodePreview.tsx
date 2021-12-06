import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { stackoverflowLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

interface props {
  code: string,
  language: string
}

export default function CodePreview(props: props) {
  return (
    <>
      <SyntaxHighlighter
        language={props.language}
        style={stackoverflowLight}
        customStyle={{
          padding: '1rem',
        }}
      >
        {props.code}
      </SyntaxHighlighter>
    </>
  )
}

CodePreview.defaultProps = {}
