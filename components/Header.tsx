// components/Header.tsx
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  const isActive = (path: string) => router.pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-secondary/95 backdrop-blur-xl border-b border-border-medium">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-2xl font-bold tracking-tighter">
              <span className="text-gradient">Vere Ex Nihilo</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
            >
              Home
            </Link>
            <Link
              href="/ordinal-time"
              className={`nav-link ${isActive('/ordinal-time') ? 'nav-link-active' : ''}`}
            >
              Ordinal Time
            </Link>
            <Link
              href="/applications"
              className={`nav-link ${isActive('/applications') ? 'nav-link-active' : ''}`}
            >
              Applications
            </Link>
            <Link
              href="/ip-access"
              className={`nav-link ${isActive('/ip-access') ? 'nav-link-active' : ''}`}
            >
              IP Access
            </Link>
            <Link
              href="/who"
              className={`nav-link ${isActive('/who') ? 'nav-link-active' : ''}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="btn btn-primary text-sm py-2 px-4"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}