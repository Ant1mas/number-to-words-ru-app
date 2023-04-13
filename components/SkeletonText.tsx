type Props = {
  width?: number
  height?: number
}

export default function SkeletonText({ width = 120, height = 16 }: Props) {
  return (
    <div
      className="bg-gray-200 rounded-full animate-pulse dark:bg-gray-700"
      style={{ width, height }}
    ></div>
  )
}
