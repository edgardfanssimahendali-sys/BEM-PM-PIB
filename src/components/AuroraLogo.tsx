import React from 'react';

interface AuroraLogoProps {
  className?: string;
  showText?: boolean;
  textSize?: 'sm' | 'md' | 'lg';
}

export default function AuroraLogo({ className = 'w-10 h-10', showText = false, textSize = 'md' }: AuroraLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${showText ? '' : ''}`}>
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} shrink-0 drop-shadow-[0_0_16px_rgba(217,70,239,0.45)]`}
      >
        <defs>
          {/* Outer glowing magenta rim */}
          <linearGradient id="magentaRim" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="45%" stopColor="#d946ef" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          {/* Central Red Flame */}
          <linearGradient id="centerRedFlame" x1="250" y1="30" x2="250" y2="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff4d4d" />
            <stop offset="50%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#be123c" />
          </linearGradient>

          {/* Orange Inner Flames */}
          <linearGradient id="orangeFlameLeft" x1="180" y1="90" x2="230" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="orangeFlameRight" x1="320" y1="90" x2="270" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>

          {/* Yellow Outer Wings */}
          <linearGradient id="yellowWingLeft" x1="70" y1="120" x2="200" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
          <linearGradient id="yellowWingRight" x1="430" y1="120" x2="300" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>

          {/* Royal Purple Crown */}
          <linearGradient id="purpleCrown" x1="250" y1="145" x2="250" y2="265" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="35%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#6b21a8" />
          </linearGradient>

          {/* Green Swirls */}
          <linearGradient id="greenSwirlLeft" x1="100" y1="210" x2="230" y2="330" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="60%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <linearGradient id="greenSwirlRight" x1="400" y1="210" x2="270" y2="330" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="60%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          {/* Blue Swirls */}
          <linearGradient id="blueSwirlLeft" x1="130" y1="260" x2="240" y2="370" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="60%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id="blueSwirlRight" x1="370" y1="260" x2="260" y2="370" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="60%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>

          {/* Center Teardrop Blue Jewel */}
          <linearGradient id="centerBlueJewel" x1="250" y1="270" x2="250" y2="400" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>

          {/* Inner Disc Shadow */}
          <radialGradient id="discShading" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="#020108" />
            <stop offset="95%" stopColor="#08031a" />
            <stop offset="100%" stopColor="#160833" />
          </radialGradient>
        </defs>

        {/* Outer Circular Ring with Glowing Stroke */}
        <circle cx="250" cy="250" r="225" fill="url(#discShading)" stroke="url(#magentaRim)" strokeWidth="18" />

        {/* ================= TOP FLAMES / LEAVES ================= */}
        {/* Outermost Yellow Wings */}
        <path
          d="M 68 120 C 100 160, 160 190, 205 195 C 170 170, 140 135, 120 100 C 95 105, 78 112, 68 120 Z"
          fill="url(#yellowWingLeft)"
        />
        <path
          d="M 432 120 C 400 160, 340 190, 295 195 C 330 170, 360 135, 380 100 C 405 105, 422 112, 432 120 Z"
          fill="url(#yellowWingRight)"
        />

        {/* Orange Inner Flames */}
        <path
          d="M 160 92 C 175 145, 205 185, 235 200 C 220 160, 200 120, 175 80 C 168 84, 163 88, 160 92 Z"
          fill="url(#orangeFlameLeft)"
        />
        <path
          d="M 340 92 C 325 145, 295 185, 265 200 C 280 160, 300 120, 325 80 C 332 84, 337 88, 340 92 Z"
          fill="url(#orangeFlameRight)"
        />

        {/* Top Center Ruby Red Flame */}
        <path
          d="M 250 42 C 228 95, 222 140, 250 182 C 278 140, 272 95, 250 42 Z"
          fill="url(#centerRedFlame)"
        />
        {/* Flame core highlight */}
        <path
          d="M 250 58 C 238 98, 235 130, 250 156 C 265 130, 262 98, 250 58 Z"
          fill="#fca5a5"
          opacity="0.35"
        />

        {/* ================= CENTER ROYAL CROWN ================= */}
        <path
          d="M 180 178
             L 190 220
             L 218 190
             L 250 148
             L 282 190
             L 310 220
             L 320 178
             C 328 178, 334 184, 334 192
             C 334 200, 325 210, 320 238
             C 290 262, 210 262, 180 238
             C 175 210, 166 200, 166 192
             C 166 184, 172 178, 180 178 Z"
          fill="url(#purpleCrown)"
        />
        {/* Crown Trefoil / Balls at points */}
        <circle cx="250" cy="146" r="10" fill="#e9d5ff" />
        <circle cx="180" cy="178" r="8" fill="#e9d5ff" />
        <circle cx="320" cy="178" r="8" fill="#e9d5ff" />
        <circle cx="218" cy="188" r="6" fill="#e9d5ff" />
        <circle cx="282" cy="188" r="6" fill="#e9d5ff" />
        {/* Crown Base Curved Trim */}
        <path
          d="M 195 240 C 230 252, 270 252, 305 240 C 275 258, 225 258, 195 240 Z"
          fill="#d8b4fe"
        />

        {/* ================= BOTTOM GREEN SWIRLS ================= */}
        <path
          d="M 112 210
             C 90 240, 92 285, 125 310
             C 155 330, 200 315, 215 285
             C 218 275, 210 268, 200 270
             C 180 275, 150 282, 135 262
             C 122 245, 128 225, 140 215
             C 130 210, 120 208, 112 210 Z"
          fill="url(#greenSwirlLeft)"
        />
        <path
          d="M 388 210
             C 410 240, 408 285, 375 310
             C 345 330, 300 315, 285 285
             C 282 275, 290 268, 300 270
             C 320 275, 350 282, 365 262
             C 378 245, 372 225, 360 215
             C 370 210, 380 208, 388 210 Z"
          fill="url(#greenSwirlRight)"
        />

        {/* ================= BOTTOM BLUE SWIRLS ================= */}
        <path
          d="M 148 268
             C 132 295, 140 330, 170 348
             C 200 365, 235 345, 240 318
             C 242 308, 234 300, 225 302
             C 210 306, 182 312, 172 295
             C 165 282, 172 268, 180 260
             C 168 258, 155 260, 148 268 Z"
          fill="url(#blueSwirlLeft)"
        />
        <path
          d="M 352 268
             C 368 295, 360 330, 330 348
             C 300 365, 265 345, 260 318
             C 258 308, 266 300, 275 302
             C 290 306, 318 312, 328 295
             C 335 282, 328 268, 320 260
             C 332 258, 345 260, 352 268 Z"
          fill="url(#blueSwirlRight)"
        />

        {/* ================= CENTER BLUE DROP JEWEL ================= */}
        <path
          d="M 250 282
             C 230 315, 228 355, 250 405
             C 272 355, 270 315, 250 282 Z"
          fill="url(#centerBlueJewel)"
        />
        {/* Inner jewel reflection */}
        <path
          d="M 250 298
             C 238 322, 237 350, 250 382
             C 263 350, 262 322, 250 298 Z"
          fill="#bae6fd"
          opacity="0.45"
        />
      </svg>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-display font-black tracking-wider text-white ${textSize === 'lg' ? 'text-xl' : textSize === 'sm' ? 'text-sm' : 'text-base'}`}>
            AURORA IMPERIUM
          </span>
          <span className="text-[10px] text-violet-300 font-mono tracking-widest uppercase">
            BEM PM Politeknik Internasional Bali
          </span>
        </div>
      )}
    </div>
  );
}
