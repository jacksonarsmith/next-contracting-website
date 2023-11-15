import Link from 'next/link'

function Nav() {
  return (
    <div className='navbar'>
        <div className='container'>
            <Link href="/">Home</Link>
            <ul className='navbar-sections'>
                <li>
                    <Link href="/about" scroll={true}>About Us</Link>
                </li>
                <li>
                    <Link href="/services">Services</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/testimonials">Testimonials</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Nav