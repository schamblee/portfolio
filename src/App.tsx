import Timeline from './components/Timeline.tsx'
import Event from './components/Event.tsx'
import resume from './data/resume.json'
import headshot from './assets/headshot.jpeg'
import daisy from './assets/daisy.jpg'

function App() {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <img className="rounded-full w-50 h-50 mx-auto" src={headshot} alt="image description" />
          <h1 className="mb-2 sm:mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
            Hello, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Steph Chamblee
            </span>
            !
          </h1>
          <p className="text-lg font-normal text-gray-600 lg:text-xl dark:text-gray-400 mb-12">
            Welcome to my resume 👋.
          </p>

          <div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-12'>
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-s-lg" src={daisy} alt="my dog Daisy" />
            <div className="flex flex-col justify-between leading-normal">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About Me</h2>
              <p className="mb-3 font-normal text-base text-gray-700 dark:text-gray-400 px-4">
                I'm a senior full-stack engineer with over seven years of experience building secure, scalable web applications that are genuinely useful. I care a lot about clean architecture, accessibility, and reducing friction through thoughtful collaboration and problem-solving.
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400 px-4 pb-2">
                Outside of work, I'm a new dog parent to Daisy (see left), a sweet pitbull mix who I've been spending most of my time with lately. I'm also into board games, video games, puzzles, and other nerdy stuff 😁.
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400 px-4 pb-2">
                I’m currently looking for my next opportunity as a senior engineer where I can continue to grow while helping a team ship high-quality, well-crafted software.
              </p>
            </div>
          </div>

          <Timeline heading="Work Experience">
            {resume['experience'].map((e) => (
              <Event
                startDate={new Date(e['startDate'])}
                endDate={new Date(e['endDate'])}
                title={e['title']}
                highlights={e['highlights']} />
            ))}
          </Timeline>
          <Timeline heading="Education">
            {resume['education'].map((e) => (
              <Event
                startDate={new Date(e['startDate'])}
                endDate={new Date(e['endDate'])}
                title={e['degree']}
                highlights={[e['institution']]} />
            ))}
          </Timeline>
          <Timeline heading="Certifications">
            {resume['certifications'].map((e) => (
              <Event
                startDate={new Date(e['startDate'])}
                endDate={new Date(e['endDate'])}
                title={e['title']}
                highlights={[e['provider']]} />
            ))}
          </Timeline>
          <Timeline heading="Projects">
            {resume['projects'].map((e) => (
              <Event
                startDate={new Date(e['startDate'])}
                endDate={new Date(e['endDate'])}
                title={e['title']}
                highlights={[e['organization'], e['description']]} />
            ))}
          </Timeline>
          <Timeline heading="Conference Talks">
            {resume['publications'].map((e) => (
              <Event
                startDate={new Date(e['startDate'])}
                endDate={new Date(e['endDate'])}
                title={e['title']}
                highlights={e['events']} />
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  )
}

export default App
