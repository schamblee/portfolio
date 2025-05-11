interface EventProps {
  startDate: Date
  endDate: Date
  title: string
  highlights: Array<string>
}

function Event({ startDate, endDate, title, highlights }: EventProps) {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 group-odd:bg-sky-300 group-even:bg-emerald-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-white">
        {startDate.toLocaleDateString()}
      </time>
      <span className="text-sm font-normal text-gray-600 dark:text-white">–</span>
      <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-white">
        {endDate.toLocaleDateString()}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <ul>
        {highlights.map((highlight, i) => (
          <li className="mb-4 text-base font-normal text-gray-600 dark:text-white" key={i}>
            {highlight}
          </li>
        ))}
      </ul>
    </li>
  )
}

export default Event
