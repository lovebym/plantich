import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Plantich'
  const subtitle = searchParams.get('subtitle') || 'The Sacred Alchemy of Plants'
 
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fefcf9',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(131, 147, 120, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(184, 155, 94, 0.1) 0%, transparent 50%)',
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            fontSize: '120px',
            opacity: 0.1,
          }}
        >
          🌿
        </div>
        
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            fontSize: '100px',
            opacity: 0.1,
          }}
        >
          ✨
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '60px',
            maxWidth: '1000px',
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              fontSize: '32px',
              fontWeight: '600',
              color: '#839378',
              marginBottom: '20px',
              fontFamily: 'Cormorant Garamond, serif',
            }}
          >
            Plantich
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '64px',
              fontWeight: '600',
              color: '#1A1A1A',
              marginBottom: '20px',
              lineHeight: 1.2,
              fontFamily: 'Cormorant Garamond, serif',
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '32px',
              fontWeight: '400',
              color: '#839378',
              marginBottom: '40px',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {subtitle}
          </div>

          {/* Decorative line */}
          <div
            style={{
              width: '200px',
              height: '2px',
              backgroundColor: '#B89B5E',
              marginBottom: '40px',
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: '24px',
              fontWeight: '400',
              color: '#1A1A1A',
              fontFamily: 'Inter, sans-serif',
              opacity: 0.8,
            }}
          >
            Ancient wisdom, modern clarity
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}

