// components/Watermark.tsx
export default function Watermark() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Multiple psi symbols scattered across the page */}
      <div className="absolute top-1/4 left-1/4 text-port/70 text-8xl rotate-12 select-none">
        ψ
      </div>
      <div className="absolute top-3/4 right-1/4 text-port/65 text-6xl -rotate-12 select-none">
        ψ
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-port/60 text-9xl rotate-45 select-none">
        ψ
      </div>
      <div className="absolute top-1/6 right-1/3 text-port/70 text-5xl rotate-6 select-none">
        ψ
      </div>
      <div className="absolute bottom-1/4 left-1/6 text-port/65 text-7xl -rotate-6 select-none">
        ψ
      </div>
      <div className="absolute bottom-1/6 right-1/6 text-port/70 text-6xl rotate-12 select-none">
        ψ
      </div>
    </div>
  )
}
