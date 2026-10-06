import React from 'react';

interface StartmetLogoProps {
  variant?: 'full' | 'compact' | 'mark-only' | 'hero';
  className?: string;
  showSubtitle?: boolean;
}

export const StartmetMark: React.FC<{ size?: number; className?: string }> = ({ size = 38, className = "" }) => {
  return (
    <svg 
      viewBox="0 0 500 500" 
      width={size} 
      height={size} 
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="markGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#101844" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#050819" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="250" cy="250" r="235" fill="url(#markGlow)" />
      
      <g transform="translate(250, 250)">
        {/* Arm 1: Green (0 deg) */}
        <g transform="rotate(0)">
          <path d="M 0,-42 A 52 52 0 0 1 50,-16" stroke="#00DF59" strokeWidth="13" strokeLinecap="round" fill="none" />
          <path d="M 0,-74 A 84 84 0 0 1 80,-26" stroke="#00DF59" strokeWidth="13" strokeLinecap="round" fill="none" />
          <path d="M 0,-106 A 116 116 0 0 1 112,-36" stroke="#00DF59" strokeWidth="13" strokeLinecap="round" fill="none" />
          <circle cx="124" cy="-24" r="6.5" fill="#00DF59" />
          <circle cx="138" cy="-10" r="4.5" fill="#00DF59" />
        </g>
        {/* Arm 2: Purple (60 deg) */}
        <g transform="rotate(60)">
          <path d="M 0,-42 A 52 52 0 0 1 50,-16" stroke="#6819F7" strokeWidth="13" strokeLinecap="round" fill="none" />
          <path d="M 0,-74 A 84 84 0 0 1 80,-26" stroke="#6819F7" strokeWidth="13" strokeLinecap="round" fill="none" />
          <path d="M 0,-106 A 116 116 0 0 1 112,-36" stroke="#6819F7" strokeWidth="13" strokeLinecap="round" fill="none" />
          <circle cx="124" cy="-24" r="6.5" fill="#6819F7" />
          <circle cx="138" cy="-10" r="4.5" fill="#6819F7" />
        </g>
        {/* Arm 3: Green (120 deg) */}
        <g transform="rotate(120)">
          <path d="M 0,-42 A 52 52 0 0 1 50,-16" stroke="#00DF59" strokeWidth="13" strokeLinecap="round" fill="none" />
          <path d="M 0,-74 A 84 84 0 0 1 80,-26" stroke="#00DF59" strokeWidth="13" strokeLinecap="round" fill="none" />
          <path d="M 0,-106 A 116 116 0 0 1 112,-36" stroke="#00DF59" strokeWidth="13" strokeLinecap="round" fill="none" />
          <circle cx="124" cy="-24" r="6.5" fill="#00DF59" />
          <circle cx="138" cy="-10" r="4.5" fill="#00DF59" />
        </g>
        {/* Arm 4: Purple (180 deg) */}
        <g transform="rotate(180)">
          <path d="M 0,-42 A 52 52 0 0 1 50,-16" stroke="#6819F7" strokeWidth="13" strokeLinecap="round" fill="none" />
          <path d="M 0,-74 A 84 84 0 0 1 80,-26" stroke="#6819F7" strokeWidth="13" strokeLinecap="round" fill="none" />
          <path d="M 0,-106 A 116 116 0 0 1 112,-36" stroke="#6819F7" strokeWidth="13" strokeLinecap="round" fill="none" />
          <circle cx="124" cy="-24" r="6.5" fill="#6819F7" />
          <circle cx="138" cy="-10" r="4.5" fill="#6819F7" />
        </g>
        {/* Arm 5: Green (240 deg) */}
        <g transform="rotate(240)">
          <path d="M 0,-42 A 52 52 0 0 1 50,-16" stroke="#00DF59" strokeWidth="13" strokeLinecap="round" fill="none" />
          <path d="M 0,-74 A 84 84 0 0 1 80,-26" stroke="#00DF59" strokeWidth="13" strokeLinecap="round" fill="none" />
          <path d="M 0,-106 A 116 116 0 0 1 112,-36" stroke="#00DF59" strokeWidth="13" strokeLinecap="round" fill="none" />
          <circle cx="124" cy="-24" r="6.5" fill="#00DF59" />
          <circle cx="138" cy="-10" r="4.5" fill="#00DF59" />
        </g>
        {/* Arm 6: Purple (300 deg) */}
        <g transform="rotate(300)">
          <path d="M 0,-42 A 52 52 0 0 1 50,-16" stroke="#6819F7" strokeWidth="13" strokeLinecap="round" fill="none" />
          <path d="M 0,-74 A 84 84 0 0 1 80,-26" stroke="#6819F7" strokeWidth="13" strokeLinecap="round" fill="none" />
          <path d="M 0,-106 A 116 116 0 0 1 112,-36" stroke="#6819F7" strokeWidth="13" strokeLinecap="round" fill="none" />
          <circle cx="124" cy="-24" r="6.5" fill="#6819F7" />
          <circle cx="138" cy="-10" r="4.5" fill="#6819F7" />
        </g>
      </g>
    </svg>
  );
};

export const StartmetLogo: React.FC<StartmetLogoProps> = ({ 
  variant = 'compact', 
  className = "",
  showSubtitle = true 
}) => {
  if (variant === 'mark-only') {
    return <StartmetMark size={36} className={className} />;
  }

  if (variant === 'hero') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <StartmetMark size={96} className="mb-4 drop-shadow-[0_0_28px_rgba(0,223,89,0.25)]" />
        <div className="flex items-center gap-1.5">
          <span className="font-display font-black text-4xl sm:text-5xl tracking-[0.14em] text-white">
            STARTMET
          </span>
          <span className="text-[10px] sm:text-xs font-semibold px-1 py-0.5 border border-slate-700 rounded text-slate-400 self-start mt-1">
            TM
          </span>
        </div>
        {showSubtitle && (
          <p className="mt-2 text-xs sm:text-sm font-bold tracking-[0.25em] text-[#00DF59]">
            IDEA <span className="text-slate-600 mx-1">|</span> DEVELOPMENT <span className="text-slate-600 mx-1">|</span> LAUNCH
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <StartmetMark size={34} className="transition-transform duration-500 hover:rotate-45" />
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1 leading-none">
          <span className="font-display font-extrabold text-xl tracking-[0.12em] text-white">
            STARTMET
          </span>
          <span className="text-[9px] font-bold text-slate-400 border border-slate-700/60 rounded px-1 py-0.2">
            TM
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] font-bold tracking-[0.16em] text-[#00DF59] mt-0.5 uppercase">
            IDEA <span className="text-slate-600 font-normal">|</span> DEVELOPMENT <span className="text-slate-600 font-normal">|</span> LAUNCH
          </span>
        )}
      </div>
    </div>
  );
};
