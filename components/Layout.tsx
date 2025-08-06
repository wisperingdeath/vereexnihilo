// components/Layout.tsx
import Header from './Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background min-h-screen text-white">
      <Header />
      <main>{children}</main>
    </div>
  )
}