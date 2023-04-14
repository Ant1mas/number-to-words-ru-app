import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

import { GTM_ID } from 'lib/constants/googleTagManager'

export default function Root() {
  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID })
  }, [])

  return <></>
}
