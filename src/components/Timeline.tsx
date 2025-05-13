interface TimelineProps {
  children: React.ReactNode
  heading: string
}

function Timeline({ heading, children }: TimelineProps) {
  return (
    <section className="text-left group">
      <h2 className="mb-8 text-xl font-bold leading-none tracking-tight text-gray-900 sm:text-2xl dark:text-white underline underline-offset-4 decoration-4 group-even:decoration-sky-400 group-odd:decoration-emerald-600">
        {heading}
      </h2>
      <ol className="relative border-s group-even:border-sky-400 group-odd:border-emerald-600 dark:border-gray-700 text-left">
        {children}
      </ol>
    </section>
  )
}

export default Timeline
