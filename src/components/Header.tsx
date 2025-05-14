import headshot from '../assets/headshot.jpeg'

function Header() {
  return (
    <header>
      <img className="rounded-full w-50 h-50 mx-auto" src={headshot} alt="" />
      <h1 className="mb-2 sm:mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
        Hello, I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Steph Chamblee
        </span> 👋!
      </h1>
      <div className='mb-12'>
        <p className="text-base font-normal text-gray-700 dark:text-white block relative mb-4">
          I'm a senior software engineer with over seven years of experience building secure,
          scalable web applications that are genuinely useful. I care a lot about clean
          architecture, accessibility, and reducing friction through thoughtful collaboration and
          problem-solving. <a className="underline text-sky-700/90 hover:text-sky-800 text-sm dark:text-sky-400 dark:hover:text-sky-500" href="#AboutMe">
            More about me
          </a>
        </p>
      </div>
    </header>
  )
}

export default Header
