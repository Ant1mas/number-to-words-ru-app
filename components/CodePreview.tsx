import SyntaxHighlighter from 'react-syntax-highlighter'
import stackoverflowLight from 'react-syntax-highlighter/dist/cjs/styles/hljs/stackoverflow-light'

type Props = {
  code: string
  language: string
}

export default function CodePreview({ language, code }: Props) {
  return (
    <>
      <SyntaxHighlighter
        language={language}
        style={stackoverflowLight}
        customStyle={{
          padding: '1rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </>
  )
}
