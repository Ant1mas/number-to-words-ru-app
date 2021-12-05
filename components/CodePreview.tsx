import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { stackoverflowLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export default function CodePreview(props) {
  return (
    <>
      <SyntaxHighlighter
        language="javascript"
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

CodePreview.propTypes = {
  code: PropTypes.string,
  language: PropTypes.string,
}

CodePreview.defaultProps = {}
