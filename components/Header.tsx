// components/Header.tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-[#1a1a1a] border-b border-port shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex gap-10 text-base text-gray-50 font-semibold tracking-wide">
        <Link href="/" className="hover:text-[#bb3e56] hover:underline">Home</Link>
        <Link href="/ordinal-time" className="hover:text-[#bb3e56] hover:underline">Ordinal Time</Link>
        <Link href="/applications" className="hover:text-[#bb3e56] hover:underline">Applications</Link>
        <Link href="/ip-access" className="hover:text-[#bb3e56] hover:underline">IP Access</Link>
        <Link href="/contact" className="hover:text-[#bb3e56] hover:underline">Contact</Link>
        <Link href="/who" className="hover:text-[#bb3e56] hover:underline">Who Are We</Link>
      </nav>
    </header>
  )
}