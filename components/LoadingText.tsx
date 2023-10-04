import React from 'react'

import SkeletonText from '@/components/SkeletonText'

type Props = {
  text?: string
  loadingState?: string
  skeletonWidth?: number
  skeletonHeight?: number
}

export default function LoadingText({
  text,
  loadingState = '[[LOADING]]',
  skeletonWidth,
  skeletonHeight,
}: Props) {
  if (text === loadingState) {
    return <SkeletonText width={skeletonWidth} height={skeletonHeight} />
  } else {
    return <>{text}</>
  }
}
