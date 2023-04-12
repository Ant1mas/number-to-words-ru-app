type Props = {
  maxWidth?: number
}

export default function SkeletonText({ maxWidth = 120 }: Props) {
  return (
    <div
      className="h-4 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700"
      style={{ maxWidth: maxWidth }}
    ></div>
  )
}
