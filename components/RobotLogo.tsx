'use client';

import { useState } from 'react';

interface RobotLogoProps {
  src: string;
  alt: string;
  className?: string;
  isDark?: boolean;
}

export default function RobotLogo({ src, alt, className = "", isDark = false }: RobotLogoProps) {
  const [clicks, setClicks] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const newClicks = clicks + 1;
    setClicks(newClicks);

    if (newClicks >= 5 && !isSpinning) {
      setIsSpinning(true);
      setClicks(0);

      // Stop spinning after animation completes
      setTimeout(() => {
        setIsSpinning(false);
      }, 2000);
    }

    // Reset click counter after 2 seconds of inactivity
    setTimeout(() => {
      setClicks(0);
    }, 2000);
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${isSpinning ? 'animate-spin-dance' : ''} cursor-pointer`}
      onClick={handleClick}
      style={{
        transition: 'transform 0.3s ease',
        animation: isSpinning ? 'spin-dance 2s ease-in-out' : 'none',
      }}
    />
  );
}
