import { useEffect, useState } from 'react';
import './liminal.css';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-dvh w-full bg-[#2a2a28] overflow-hidden relative flex flex-col">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Fluorescent flicker overlay */}
      <div className="flicker-overlay" />

      {/* Main liminal hallway */}
      <main className="flex-1 flex items-center justify-center relative">
        <div className={`hallway-container transition-all duration-[3000ms] ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* The infinite hallway */}
          <div className="hallway">
            {/* Ceiling */}
            <div className="ceiling" />

            {/* Floor */}
            <div className="floor" />

            {/* Left wall */}
            <div className="wall wall-left">
              {[...Array(8)].map((_, i) => (
                <div key={`l-${i}`} className="wall-panel" style={{ '--panel-index': i } as React.CSSProperties} />
              ))}
            </div>

            {/* Right wall */}
            <div className="wall wall-right">
              {[...Array(8)].map((_, i) => (
                <div key={`r-${i}`} className="wall-panel" style={{ '--panel-index': i } as React.CSSProperties} />
              ))}
            </div>

            {/* Vanishing point glow */}
            <div className="vanishing-point" />

            {/* Fluorescent lights on ceiling */}
            <div className="lights">
              {[...Array(6)].map((_, i) => (
                <div
                  key={`light-${i}`}
                  className="fluorescent-light"
                  style={{ '--light-index': i } as React.CSSProperties}
                />
              ))}
            </div>
          </div>

          {/* Subtle text */}
          <div className={`absolute bottom-[15%] left-1/2 -translate-x-1/2 transition-all duration-[4000ms] delay-[2000ms] ${loaded ? 'opacity-40' : 'opacity-0'}`}>
            <p className="font-display text-[#d4cfc4] text-xs md:text-sm tracking-[0.4em] uppercase text-center">
              keep walking
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`relative z-10 pb-4 md:pb-6 pt-2 text-center transition-opacity duration-[3000ms] delay-[3000ms] ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <p className="font-body text-[10px] md:text-xs text-[#5a5850] tracking-wider">
          Requested by @s1s21s21 · Built by @clonkbot
        </p>
      </footer>
    </div>
  );
}

export default App;
