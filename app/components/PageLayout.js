import Navbar from './Navbar'
import Footer from './Footer'
import PageTransition from './PageTransition'

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <PageTransition>
        {children}
      </PageTransition>
      <Footer />
    </>
  )
}
