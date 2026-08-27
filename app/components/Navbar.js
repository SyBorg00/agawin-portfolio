import Link from 'next/link'
import { House, Briefcase, User, FileText, Mail } from 'lucide-react'
export default function Navbar() {
  return (
    <nav className="nav container">
      <Link className="logo" href="/">Portfolio</Link>
      <div className="navlinks">
        <Link href="/" className='flex item-center gap-2'><House size={30} />Home</Link>
        <Link href="/pages/about" className='flex item-center gap-2'><User size={30} /> About</Link>
        <Link href="/pages/projects" className='flex item-center gap-2'> <Briefcase size={30} /> Projects</Link>
        <Link href="/pages/resume" className='flex item-center gap-2'><FileText size={30} />Resume</Link>
      </div>
    </nav>
  )
}
