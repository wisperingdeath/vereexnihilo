// components/WatermarkSingle.tsx
export default function WatermarkSingle() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Single large centered psi symbol */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-port/55 text-[20rem] select-none font-serif">
        ψ
      </div>
    </div>
  )
}
