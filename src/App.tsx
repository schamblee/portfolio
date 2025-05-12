import AboutMeCard from './components/AboutMeCard.tsx'
import Event from './components/Event.tsx'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Timeline from './components/Timeline.tsx'

import resume from './data/resume.json'

function App() {
  return (
    <main className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center mb-35 sm:mb-20">
          <Header />
          <AboutMeCard />
          <Timeline heading="Work Experience">
            {resume['experience'].map((e) => (
              <Event
                startDate={new Date(e['startDate'])}
                endDate={new Date(e['endDate'])}
                company={e['company']}
                title={e['title']}
                highlights={e['highlights']}
              />
            ))}
          </Timeline>
          <Timeline heading="Education">
            {resume['education'].map((e) => (
              <Event
                startDate={new Date(e['startDate'])}
                endDate={new Date(e['endDate'])}
                title={e['degree']}
                highlights={[e['institution']]}
              />
            ))}
          </Timeline>
          <Timeline heading="Certifications">
            {resume['certifications'].map((e) => (
              <Event
                startDate={new Date(e['startDate'])}
                endDate={new Date(e['endDate'])}
                title={e['title']}
                highlights={[e['provider']]}
              />
            ))}
          </Timeline>
          <Timeline heading="Projects">
            {resume['projects'].map((e) => (
              <Event
                company={e['organization']}
                startDate={new Date(e['startDate'])}
                endDate={new Date(e['endDate'])}
                title={e['title']}
                highlights={[e['description']]}
              />
            ))}
          </Timeline>
          <Timeline heading="Conference Talks">
            {resume['publications'].map((e) => (
              <Event
                startDate={new Date(e['startDate'])}
                endDate={new Date(e['endDate'])}
                title={e['title']}
                highlights={e['events']}
              />
            ))}
          </Timeline>
          <Footer />
        </div>
      </div>
    </main>
  )
}

export default App
