import daisy from '../assets/daisy.jpg'

function AboutMeCard() {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row dark:border-gray-700 dark:bg-gray-800 mb-12">
      <img
        className="object-cover w-full rounded-t-lg h-120 md:h-auto md:w-60 md:rounded-none md:rounded-s-lg"
        src={daisy}
        alt="my dog Daisy"
      />
      <div className="flex flex-col justify-between leading-normal sm:py-0 py-4">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="mb-3 font-normal text-base text-gray-700 dark:text-white px-4">
          I'm a senior full-stack engineer with over seven years of experience building secure,
          scalable web applications that are genuinely useful. I care a lot about clean
          architecture, accessibility, and reducing friction through thoughtful collaboration and
          problem-solving.
        </p>
        <p className="font-normal text-gray-700 dark:text-white px-4 pb-2">
          Outside of work, I'm a new dog parent to Daisy (see <span className='hidden sm:inline'>left</span><span className='sm:hidden'>above</span>), a sweet pitbull mix who I've
          been spending most of my time with lately. I'm also into board games, video games,
          puzzles, and other nerdy stuff 😁.
        </p>
        <p className="font-normal text-gray-700 dark:text-white px-4 pb-2">
          I’m currently looking for my next opportunity as a senior engineer where I can continue to
          grow while helping a team ship high-quality, well-crafted software.
        </p>
      </div>
    </div>
  )
}

export default AboutMeCard
