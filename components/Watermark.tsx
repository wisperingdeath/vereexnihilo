// components/Watermark.tsx
import Image from 'next/image'

export default function Watermark() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
      {/* Single centered psi image taking up 60% of vertical space */}
      <div className="relative w-auto h-[60vh] opacity-15">
        <Image
          src="/psi-watermark.svg"
          alt=""
          fill
          style={{ objectFit: 'contain' }}
          className="select-none"
          priority={false}
        />
      </div>
    </div>
  )
}
