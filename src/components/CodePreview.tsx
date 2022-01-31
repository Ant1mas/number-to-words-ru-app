import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import stackoverflowLight from 'react-syntax-highlighter/dist/cjs/styles/hljs/stackoverflow-light'

interface props {
  code: string,
  language: string
}

export function CodePreview(props: props) {
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

export default CodePreview
