import Link from 'next/link';
import PageLayout from './components/PageLayout';
import ImageCarousel from './components/ImageCarousel';
import Typewriter from './components/Typewriter';

export default function Home() {
  return (
    <PageLayout>
      <main>
        <section className="hero container">
          <div className='hero-grid'>
            <div>
              <Typewriter />
              <h1>I build useful digital experiences that <span>look good</span> and work well.</h1>
              <p className="intro">I'm a software developer focused on modern applications, APIs, databases, and clean user experiences.</p>
              <p className="intro">I also work on mobile applications as well</p>
              <div className="actions">
                <Link className="button primary" href="/pages/projects">View my work</Link>
                <Link className="button" href="/pages/about">Let's talk</Link>
              </div>
            </div>
            <ImageCarousel />
          </div>

        </section>

      </main>
    </PageLayout>
  )
}
