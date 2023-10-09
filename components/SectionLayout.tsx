type Props = {
  title: string
  children: React.ReactElement | React.ReactElement[]
}

export default function SectionLayout({ title, children }: Props) {
  return (
    <div className="flex flex-col items-center p-4">
      <h4 className="my-2 flex w-full justify-center text-center text-4xl">
        {title}
      </h4>
      {children}
    </div>
  )
}
