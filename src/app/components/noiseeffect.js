export default function NoiseEffect({opacity}) {
  return (
    <>
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 50,
          isolation: 'isolate' 
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: '100%',
            height: '100%'
          }}
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="noise-filter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="4.42"
                numOctaves="3"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0"/>
            </filter>
          </defs>
          <rect 
            width="100%" 
            height="100%" 
            filter="url(#noise-filter)"
            opacity={opacity}
          />
        </svg>
      </div>
    </>
  );
}