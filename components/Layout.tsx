// components/Layout.tsx
import Header from './Header'
import Watermark from './Watermark'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-bg-primary min-h-screen text-text-primary relative">
      <Watermark />
      <Header />
      <main className="relative z-10 pt-16 lg:pt-20">{children}</main>
    </div>
  )
}