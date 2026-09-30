"use client";

import React from "react";

interface AmbientMountainsProps {
  variant?: "1" | "2" | "3" | "4" | "5" | "minimal";
  className?: string;
}

export default function AmbientCircles({
  variant = "1",
  className = "",
}: AmbientMountainsProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* ================= VARIANT 1: Authentic Layered Mountain Panorama (Matching Reference Artwork) ================= */}
      {variant === "1" && (
        <div className="absolute -bottom-1 left-0 right-0 h-44 sm:h-64 lg:h-76 w-full opacity-80 transition-opacity duration-700">
          <svg
            viewBox="0 0 1440 380"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              {/* Layer 1: Distant Misty Peaks (Light Theme Sage) */}
              <linearGradient id="v1-mnt-1" x1="720" y1="80" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8EB486" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#8EB486" stopOpacity="0.03" />
              </linearGradient>

              {/* Layer 2: Midground Mountain Range (Classic Theme Sage) */}
              <linearGradient id="v1-mnt-2" x1="720" y1="160" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7A9F73" stopOpacity="0.13" />
                <stop offset="100%" stopColor="#8EB486" stopOpacity="0.05" />
              </linearGradient>

              {/* Layer 3: Closer Ridges & Prominent Right Triangular Peak (Sage-Taupe Blend) */}
              <linearGradient id="v1-mnt-3" x1="720" y1="240" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6E8E67" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#997C70" stopOpacity="0.06" />
              </linearGradient>

              {/* Layer 4: Foreground Rolling Foothills (Grounding Warm Earth Sage) */}
              <linearGradient id="v1-mnt-4" x1="720" y1="300" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#5D7A55" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#685752" stopOpacity="0.06" />
              </linearGradient>
            </defs>

            {/* Layer 1: Furthest Distant Mountain Peaks (Left Peak, Grand Summit, Right Peak) */}
            <path
              d="M0 270 
                 C100 260 170 230 240 180 
                 C275 155 315 130 350 125 
                 C385 130 425 170 480 215 
                 C520 235 565 240 610 220 
                 C670 195 725 150 780 115 
                 C820 90 855 85 885 90 
                 C920 100 965 140 1015 185 
                 C1060 225 1105 230 1145 205 
                 C1185 180 1220 165 1255 165 
                 C1290 170 1330 200 1375 225 
                 C1405 235 1425 240 1440 242 
                 L1440 380 L0 380 Z"
              fill="url(#v1-mnt-1)"
            />

            {/* Layer 2: Mid-Distance Mountains & Slopes */}
            <path
              d="M0 265 
                 C80 255 150 235 220 210 
                 C290 220 370 255 450 280 
                 C530 290 610 265 690 220 
                 C750 185 800 180 850 195 
                 C910 225 970 265 1040 265 
                 C1110 250 1175 215 1245 210 
                 C1315 220 1380 250 1440 260 
                 L1440 380 L0 380 Z"
              fill="url(#v1-mnt-2)"
            />

            {/* Layer 3: Closer Mountain Ridges with Iconic Triangular Accent Peak on Right */}
            <path
              d="M0 305 
                 C90 295 170 280 250 265 
                 C330 275 410 305 490 315 
                 C575 315 660 295 745 270 
                 C820 275 890 305 970 315 
                 C1030 305 1080 265 1125 250 
                 C1165 245 1205 275 1250 305 
                 C1315 320 1380 325 1440 322 
                 L1440 380 L0 380 Z"
              fill="url(#v1-mnt-3)"
            />

            {/* Layer 4: Foreground Rolling Foothills */}
            <path
              d="M0 335 
                 C95 320 190 310 280 318 
                 C370 330 455 345 545 342 
                 C635 335 725 325 815 330 
                 C905 342 995 352 1085 345 
                 C1170 330 1250 315 1330 322 
                 C1385 330 1415 338 1440 340 
                 L1440 380 L0 380 Z"
              fill="url(#v1-mnt-4)"
            />
          </svg>
        </div>
      )}

      {/* ================= VARIANT 2: Alpine Twin Peaks & Flowing Slopes ================= */}
      {variant === "2" && (
        <div className="absolute -bottom-1 left-0 right-0 h-44 sm:h-64 lg:h-76 w-full opacity-80 transition-opacity duration-700">
          <svg
            viewBox="0 0 1440 380"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="v2-mnt-1" x1="720" y1="80" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8EB486" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#8EB486" stopOpacity="0.03" />
              </linearGradient>
              <linearGradient id="v2-mnt-2" x1="720" y1="160" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7A9F73" stopOpacity="0.13" />
                <stop offset="100%" stopColor="#8EB486" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="v2-mnt-3" x1="720" y1="240" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6E8E67" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#997C70" stopOpacity="0.06" />
              </linearGradient>
              <linearGradient id="v2-mnt-4" x1="720" y1="300" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#5D7A55" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#685752" stopOpacity="0.06" />
              </linearGradient>
            </defs>

            {/* Distant Peaks: Dominant Left-Center Peak */}
            <path
              d="M0 250 
                 C80 230 160 190 235 155 
                 C295 130 350 100 410 95 
                 C470 105 525 150 580 200 
                 C640 230 710 220 770 180 
                 C830 145 885 125 940 120 
                 C1000 130 1060 180 1120 220 
                 C1190 240 1260 215 1330 185 
                 C1380 195 1415 220 1440 240 
                 L1440 380 L0 380 Z"
              fill="url(#v2-mnt-1)"
            />

            {/* Midground Ridge Range */}
            <path
              d="M0 270 
                 C100 260 180 240 260 210 
                 C330 220 400 255 480 280 
                 C560 280 635 245 710 215 
                 C780 225 850 255 930 265 
                 C1010 250 1080 210 1150 205 
                 C1225 225 1300 260 1440 275 
                 L1440 380 L0 380 Z"
              fill="url(#v2-mnt-2)"
            />

            {/* Closer Rolling Mountain Ridge */}
            <path
              d="M0 310 
                 C90 295 180 280 270 275 
                 C355 290 435 320 520 325 
                 C610 320 695 290 780 280 
                 C860 295 935 320 1020 315 
                 C1100 295 1165 270 1225 265 
                 C1295 285 1365 315 1440 315 
                 L1440 380 L0 380 Z"
              fill="url(#v2-mnt-3)"
            />

            {/* Foreground Foothills */}
            <path
              d="M0 340 
                 C110 330 210 320 310 330 
                 C405 345 490 355 585 345 
                 C675 330 760 325 850 335 
                 C940 350 1025 360 1115 350 
                 C1200 330 1285 320 1370 330 
                 C1405 335 1425 340 1440 345 
                 L1440 380 L0 380 Z"
              fill="url(#v2-mnt-4)"
            />
          </svg>
        </div>
      )}

      {/* ================= VARIANT 3: Wide Rolling Valley & Alpine Ridgeline ================= */}
      {variant === "3" && (
        <div className="absolute -bottom-1 left-0 right-0 h-44 sm:h-64 lg:h-76 w-full opacity-80 transition-opacity duration-700">
          <svg
            viewBox="0 0 1440 380"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="v3-mnt-1" x1="720" y1="80" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8EB486" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#8EB486" stopOpacity="0.03" />
              </linearGradient>
              <linearGradient id="v3-mnt-2" x1="720" y1="160" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7A9F73" stopOpacity="0.13" />
                <stop offset="100%" stopColor="#8EB486" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="v3-mnt-3" x1="720" y1="240" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6E8E67" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#997C70" stopOpacity="0.06" />
              </linearGradient>
              <linearGradient id="v3-mnt-4" x1="720" y1="300" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#5D7A55" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#685752" stopOpacity="0.06" />
              </linearGradient>
            </defs>

            {/* Distant Mountain Range */}
            <path
              d="M0 240 
                 C70 215 140 175 210 145 
                 C270 125 325 135 385 165 
                 C450 205 520 220 590 195 
                 C665 155 730 115 795 105 
                 C855 115 915 160 975 205 
                 C1045 235 1115 215 1180 175 
                 C1240 145 1300 150 1365 185 
                 C1405 210 1425 230 1440 240 
                 L1440 380 L0 380 Z"
              fill="url(#v3-mnt-1)"
            />

            {/* Midground Mountain Layer */}
            <path
              d="M0 275 
                 C80 255 165 235 250 230 
                 C330 250 410 285 490 285 
                 C570 265 645 220 720 200 
                 C800 215 870 255 950 270 
                 C1030 260 1105 220 1180 215 
                 C1260 235 1340 270 1440 270 
                 L1440 380 L0 380 Z"
              fill="url(#v3-mnt-2)"
            />

            {/* Closer Undulating Foothills */}
            <path
              d="M0 315 
                 C90 300 185 285 275 285 
                 C360 305 440 330 525 330 
                 C615 315 700 280 785 270 
                 C865 285 940 315 1025 320 
                 C1110 305 1185 275 1255 275 
                 C1325 295 1385 320 1440 325 
                 L1440 380 L0 380 Z"
              fill="url(#v3-mnt-3)"
            />

            {/* Foreground Base Hills */}
            <path
              d="M0 345 
                 C100 330 200 325 300 335 
                 C390 350 475 360 565 350 
                 C655 335 745 325 835 335 
                 C925 350 1010 360 1100 350 
                 C1190 335 1275 325 1360 335 
                 C1400 340 1420 345 1440 345 
                 L1440 380 L0 380 Z"
              fill="url(#v3-mnt-4)"
            />
          </svg>
        </div>
      )}

      {/* ================= VARIANT 4: Staggered Mountain Ridges & Highland Pass ================= */}
      {variant === "4" && (
        <div className="absolute -bottom-1 left-0 right-0 h-44 sm:h-64 lg:h-76 w-full opacity-80 transition-opacity duration-700">
          <svg
            viewBox="0 0 1440 380"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="v4-mnt-1" x1="720" y1="80" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8EB486" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#8EB486" stopOpacity="0.03" />
              </linearGradient>
              <linearGradient id="v4-mnt-2" x1="720" y1="160" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7A9F73" stopOpacity="0.13" />
                <stop offset="100%" stopColor="#8EB486" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="v4-mnt-3" x1="720" y1="240" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6E8E67" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#997C70" stopOpacity="0.06" />
              </linearGradient>
              <linearGradient id="v4-mnt-4" x1="720" y1="300" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#5D7A55" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#685752" stopOpacity="0.06" />
              </linearGradient>
            </defs>

            {/* Distant Mountains */}
            <path
              d="M0 260 
                 C90 235 180 185 260 145 
                 C330 115 390 120 460 160 
                 C530 200 600 230 670 215 
                 C740 185 810 135 880 115 
                 C945 105 1010 140 1070 185 
                 C1140 225 1210 220 1280 175 
                 C1340 150 1395 180 1440 215 
                 L1440 380 L0 380 Z"
              fill="url(#v4-mnt-1)"
            />

            {/* Midground Ridges */}
            <path
              d="M0 280 
                 C100 265 190 235 280 225 
                 C360 240 440 275 520 280 
                 C605 265 685 225 765 210 
                 C845 225 920 265 1000 275 
                 C1080 260 1155 220 1230 220 
                 C1310 240 1380 270 1440 275 
                 L1440 380 L0 380 Z"
              fill="url(#v4-mnt-2)"
            />

            {/* Closer Foothill Contours */}
            <path
              d="M0 315 
                 C95 305 195 285 290 280 
                 C380 295 465 325 550 325 
                 C635 310 720 285 805 275 
                 C890 290 970 320 1050 320 
                 C1135 305 1210 280 1285 280 
                 C1350 295 1405 315 1440 320 
                 L1440 380 L0 380 Z"
              fill="url(#v4-mnt-3)"
            />

            {/* Foreground Base */}
            <path
              d="M0 345 
                 C105 335 210 325 315 330 
                 C410 345 500 355 595 345 
                 C685 335 775 325 865 335 
                 C955 350 1040 360 1130 350 
                 C1215 335 1300 325 1385 335 
                 C1415 340 1430 345 1440 345 
                 L1440 380 L0 380 Z"
              fill="url(#v4-mnt-4)"
            />
          </svg>
        </div>
      )}

      {/* ================= VARIANT 5: Majestic Grand Mountain Horizon (Wide Scenic Sections) ================= */}
      {variant === "5" && (
        <div className="absolute -bottom-1 left-0 right-0 h-48 sm:h-72 lg:h-84 w-full opacity-80 transition-opacity duration-700">
          <svg
            viewBox="0 0 1440 380"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="v5-mnt-1" x1="720" y1="60" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8EB486" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#8EB486" stopOpacity="0.03" />
              </linearGradient>
              <linearGradient id="v5-mnt-2" x1="720" y1="140" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7A9F73" stopOpacity="0.13" />
                <stop offset="100%" stopColor="#8EB486" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="v5-mnt-3" x1="720" y1="220" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6E8E67" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#997C70" stopOpacity="0.06" />
              </linearGradient>
              <linearGradient id="v5-mnt-4" x1="720" y1="290" x2="720" y2="380" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#5D7A55" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#685752" stopOpacity="0.06" />
              </linearGradient>
            </defs>

            {/* Majestic Distant Peaks */}
            <path
              d="M0 250 
                 C80 230 160 185 240 145 
                 C310 120 365 115 425 135 
                 C490 170 550 215 620 225 
                 C690 205 750 145 810 100 
                 C865 75 920 85 975 125 
                 C1035 175 1090 220 1155 220 
                 C1220 195 1275 145 1335 135 
                 C1385 145 1420 180 1440 210 
                 L1440 380 L0 380 Z"
              fill="url(#v5-mnt-1)"
            />

            {/* Midground Mountain Ridges */}
            <path
              d="M0 270 
                 C95 255 185 225 270 210 
                 C345 225 415 265 490 275 
                 C570 260 645 215 720 195 
                 C795 210 865 250 940 265 
                 C1015 250 1085 205 1155 200 
                 C1230 220 1300 255 1440 265 
                 L1440 380 L0 380 Z"
              fill="url(#v5-mnt-2)"
            />

            {/* Closer Foothills */}
            <path
              d="M0 310 
                 C90 295 180 275 270 270 
                 C355 285 435 320 520 320 
                 C610 305 695 275 780 265 
                 C860 280 935 315 1020 315 
                 C1100 295 1170 270 1240 270 
                 C1310 285 1375 315 1440 315 
                 L1440 380 L0 380 Z"
              fill="url(#v5-mnt-3)"
            />

            {/* Foreground Soft Foothills */}
            <path
              d="M0 340 
                 C100 325 200 320 300 330 
                 C390 345 475 355 565 345 
                 C655 330 745 325 835 335 
                 C925 350 1010 360 1100 350 
                 C1190 335 1275 325 1360 335 
                 C1400 340 1420 345 1440 345 
                 L1440 380 L0 380 Z"
              fill="url(#v5-mnt-4)"
            />
          </svg>
        </div>
      )}

      {/* ================= MINIMAL VARIANT: Subtle Dual-Layer Foothills ================= */}
      {variant === "minimal" && (
        <div className="absolute -bottom-1 left-0 right-0 h-36 sm:h-52 w-full opacity-70 transition-opacity duration-700">
          <svg
            viewBox="0 0 1440 280"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="vm-mnt-1" x1="720" y1="80" x2="720" y2="280" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8EB486" stopOpacity="0.09" />
                <stop offset="100%" stopColor="#8EB486" stopOpacity="0.02" />
              </linearGradient>
              <linearGradient id="vm-mnt-2" x1="720" y1="180" x2="720" y2="280" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7A9F73" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#997C70" stopOpacity="0.04" />
              </linearGradient>
            </defs>

            {/* Back Ridge */}
            <path
              d="M0 190 
                 C120 170 230 140 340 135 
                 C440 150 530 195 630 200 
                 C730 185 820 140 910 130 
                 C1000 145 1090 190 1180 195 
                 C1280 180 1360 155 1440 160 
                 L1440 280 L0 280 Z"
              fill="url(#vm-mnt-1)"
            />

            {/* Front Gentle Hill */}
            <path
              d="M0 230 
                 C110 215 220 205 320 215 
                 C420 230 510 245 610 240 
                 C710 225 800 210 900 220 
                 C1000 235 1090 245 1190 235 
                 C1280 220 1360 215 1440 225 
                 L1440 280 L0 280 Z"
              fill="url(#vm-mnt-2)"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

// Export AmbientMountains as an alias
export { AmbientCircles as AmbientMountains };
