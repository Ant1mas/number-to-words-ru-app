import React from 'react';
import PropTypes from 'prop-types';
import Prism from 'prismjs';

// import styles from "./CodePreview.module.sass";

const CodePreview = ( props ) => {
  React.useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <pre>
        <code id='prism-js-code' className={props.language}>
          {props.code}
        </code>
      </pre>
    </>
  )
}

CodePreview.propTypes = {
  code: PropTypes.string,
  language: PropTypes.string,
};

CodePreview.defaultProps = {
  
};

export default CodePreview;
