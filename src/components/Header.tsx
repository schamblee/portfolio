import headshot from '../assets/headshot.jpeg'

function Header() {
  return (
    <header>
      <img className="rounded-full w-50 h-50 mx-auto" src={headshot} alt="" />
      <h1 className="mb-2 sm:mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
        Hello, I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Steph Chamblee
        </span>
        !
      </h1>
      <p className="text-lg font-normal text-gray-600 lg:text-xl dark:text-white mb-12">
        Welcome to my resume 👋.
      </p>
    </header>
  )
}

export default Header
