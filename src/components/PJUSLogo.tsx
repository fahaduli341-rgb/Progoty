import React from 'react';

interface PJUSLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  textColor?: string;
  subtextColor?: string;
}

export const PJUSLogo: React.FC<PJUSLogoProps> = ({
  className = '',
  size = 48,
  showText = false,
  textColor = '#0056b3',
  subtextColor = '#28a745'
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Official PJUS Emblem SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 select-none drop-shadow-2xs"
      >
        {/* Defs for gradients & filters */}
        <defs>
          <linearGradient id="pjusArrowGrad" x1="20" y1="120" x2="80" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0072ce" />
            <stop offset="100%" stopColor="#0099e6" />
          </linearGradient>

          <linearGradient id="pjusPurpleArc" x1="30" y1="100" x2="130" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5d257b" />
            <stop offset="50%" stopColor="#692888" />
            <stop offset="100%" stopColor="#7a2999" />
          </linearGradient>

          <linearGradient id="pjusHandGrad" x1="40" y1="170" x2="170" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0074c7" />
            <stop offset="60%" stopColor="#008ce3" />
            <stop offset="100%" stopColor="#00a0f0" />
          </linearGradient>

          <linearGradient id="pjusLeafMain" x1="140" y1="90" x2="165" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3b9d29" />
            <stop offset="100%" stopColor="#5bb935" />
          </linearGradient>

          <linearGradient id="pjusLeafLeft" x1="120" y1="70" x2="140" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#43a52c" />
            <stop offset="100%" stopColor="#6ac53c" />
          </linearGradient>

          <linearGradient id="pjusLeafRight" x1="150" y1="80" x2="190" y2="55" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3d9f29" />
            <stop offset="100%" stopColor="#5cbb34" />
          </linearGradient>
        </defs>

        {/* 1. Purple Concentric Arc (Inner circular progress ring) */}
        <path
          d="M 36 102 C 34 76 50 49 76 40 C 98 33 123 37 139 52 C 137 57 131 56 123 51 C 104 40 76 43 58 60 C 47 71 42 86 42 102 C 42 105 38 106 36 102 Z"
          fill="url(#pjusPurpleArc)"
        />

        {/* 2. Outer Blue Sweeping Arrow (Development & upward momentum) */}
        <path
          d="M 22 105 C 22 75 36 50 58 35 C 64 30 73 26 80 23 L 73 14 L 98 16 L 94 41 L 87 32 C 77 37 66 45 58 55 C 41 73 34 94 36 117 C 36 122 28 122 26 116 C 23 112 22 109 22 105 Z"
          fill="url(#pjusArrowGrad)"
        />

        {/* 3. Supportive Caring Hand (Royal Blue palm cradling community from below) */}
        {/* Palm base swooping around the bottom */}
        <path
          d="M 26 115 C 29 146 54 175 88 181 C 122 186 156 168 171 137 C 176 127 179 116 179 104 C 179 101 174 101 173 104 C 170 119 160 134 148 143 C 132 154 110 159 92 153 C 78 148 66 138 58 125 C 70 138 88 145 106 145 C 117 145 129 141 138 135 C 143 132 139 123 133 124 C 119 126 103 122 93 114 C 84 107 77 96 74 85 C 73 82 69 83 69 86 C 69 98 75 110 84 119 C 76 117 68 111 63 105 C 57 97 53 87 51 77 C 50 74 46 75 46 78 C 45 93 47 108 54 121 C 41 106 33 87 34 67 C 34 64 29 64 29 67 C 27 83 25 100 26 115 Z"
          fill="url(#pjusHandGrad)"
        />

        {/* 4. Three Vibrant Green Leaves (Sprouting life, agriculture & sustainable growth) */}
        {/* Left Leaf */}
        <path
          d="M 136 65 C 127 57 122 47 124 37 C 126 28 136 26 142 32 C 148 38 152 48 149 57 C 147 62 142 66 136 65 Z"
          fill="url(#pjusLeafLeft)"
        />
        {/* Left Leaf Vein */}
        <path
          d="M 134 63 Q 138 48 135 34"
          stroke="#a3e352"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Center Main Tall Leaf */}
        <path
          d="M 148 76 C 141 61 142 42 152 26 C 158 16 167 12 170 15 C 173 19 176 34 171 49 C 166 63 158 74 148 76 Z"
          fill="url(#pjusLeafMain)"
        />
        {/* Center Leaf Vein */}
        <path
          d="M 148 75 Q 160 48 167 18"
          stroke="#b0f058"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Right Leaf */}
        <path
          d="M 152 69 C 163 67 175 67 186 61 C 193 57 197 49 193 45 C 188 41 176 44 167 50 C 158 55 153 62 152 69 Z"
          fill="url(#pjusLeafRight)"
        />
        {/* Right Leaf Vein */}
        <path
          d="M 153 68 Q 172 58 190 47"
          stroke="#a3e352"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Plant Stem / Sprout Anchor connecting into the hand */}
        <path
          d="M 142 67 C 146 76 148 87 146 98 C 145 104 140 109 137 114 C 135 116 138 118 140 116 C 145 110 149 103 150 95 C 152 83 149 71 144 65 Z"
          fill="#3b9d29"
        />

        {/* 5. Center Bengali Typography "প্রগতি" and "পিজেইউএস" */}
        {/* "প্রগতি" in signature vibrant green */}
        <g transform="translate(100, 108)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fontFamily="'Hind Siliguri', 'Noto Sans Bengali', system-ui, sans-serif"
            fontWeight="800"
            fontSize="34"
            fill="#349c2a"
            letterSpacing="-0.5"
          >
            প্রগতি
          </text>
          {/* "পিজেইউএস" underneath in matching green */}
          <text
            x="0"
            y="23"
            textAnchor="middle"
            fontFamily="'Hind Siliguri', 'Noto Sans Bengali', system-ui, sans-serif"
            fontWeight="700"
            fontSize="18"
            fill="#3a962d"
            letterSpacing="0.2"
          >
            পিজেইউএস
          </text>
        </g>
      </svg>

      {/* Optional Horizontal Text Companion */}
      {showText && (
        <div className="leading-tight">
          <div className="flex items-baseline gap-1.5">
            <span className="font-extrabold text-xl tracking-tight" style={{ color: textColor }}>
              PRAGATI
            </span>
            <span className="font-bold text-xl tracking-tight" style={{ color: subtextColor }}>
              PJUS
            </span>
          </div>
          <div className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase -mt-0.5">
            প্রগতি পিজেইউএস · <span className="text-slate-700">pjus-bd.org</span>
          </div>
        </div>
      )}
    </div>
  );
};
