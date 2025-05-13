import daisy from '../assets/daisy.jpg'

function AboutMeCard() {
  return (
    <div id="AboutMe" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row dark:border-gray-700 dark:bg-gray-800 my-12">
      <img
        className="brightness-85 object-cover w-full rounded-t-lg h-120 md:h-auto md:w-60 md:rounded-none md:rounded-s-lg"
        src={daisy}
        alt="my dog, Daisy"
      />
      <div className="flex flex-col justify-between leading-normal sm:py-0 py-4">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="font-normal text-gray-700 dark:text-white px-4 pb-2">
          A little about myself outside of work: I'm a new dog owner to Daisy (see{' '}
          <span className="hidden sm:inline">left</span>
          <span className="sm:hidden">above</span>), a sweet pitbull mix who I've been spending most
          of my time with lately. I'm also into board games, video games, puzzles, and other nerdy
          stuff 😁.
        </p>
        <p className="font-normal text-gray-700 dark:text-white px-4 pb-2">
          I'm currently looking for my next opportunity as a senior engineer where I can continue to
          grow while helping a team ship well-crafted software.
        </p>
        <h2 className="text-gray-700 font-semibold text-lg dark:text-white">
          Let's work together!
        </h2>
        <p className="font-normal text-gray-700 dark:text-white px-4 pb-2">
          Email me at <a
              href="mailto:stephaniejoychamblee@gmail.com?subject=Let's Schedule an Interview!"
              className="underline text-sky-700/90 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-500"
          >stephaniejoychamblee@gmail.com</a>.
        </p>
      </div>
    </div>
  )
}

export default AboutMeCard
