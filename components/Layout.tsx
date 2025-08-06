// components/Layout.tsx
import Header from './Header'
import Watermark from './Watermark'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background min-h-screen text-white relative">
      <Watermark />
      <Header />
      <main className="relative z-10">{children}</main>
    </div>
  )
}