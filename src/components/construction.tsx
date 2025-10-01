import { useState, useEffect } from 'react';
import { Box, Typography, Fade, Zoom } from '@mui/material';
import { Construction, Refresh } from '@mui/icons-material';

export const UnderConstructionOverlay = () => {
  //   const [show, setShow] = useState(true);
  const [floatingElements, setFloatingElements] = useState<
    { id: number; size: number; x: number; y: number; duration: number; delay: number; color: string }[]
  >([]);

  // Light scheme colors
  const colors = {
    lightBlue: '#758BFD',
    periwinkle: '#AEB8FE',
    pink: '#F25491',
    orange: '#FF8600',
    offwhite: '#fffcf2'
  };

  useEffect(() => {
    // Generate random floating elements
    const elements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 40,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      color: [colors.lightBlue, colors.periwinkle, colors.pink, colors.orange][Math.floor(Math.random() * 4)]
    }));
    setFloatingElements(elements);
  }, []);

  return (
    <Fade in={true} timeout={800}>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          background: `linear-gradient(135deg, ${colors.offwhite} 0%, #fff 50%, ${colors.offwhite} 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Floating background elements */}
        {floatingElements.map((el) => (
          <Box
            key={el.id}
            sx={{
              position: 'absolute',
              width: `${el.size}px`,
              height: `${el.size}px`,
              borderRadius: '50%',
              background: `radial-gradient(circle at 30% 30%, ${el.color}33, ${el.color}11)`,
              left: `${el.x}%`,
              top: `${el.y}%`,
              animation: `float ${el.duration}s ease-in-out infinite`,
              animationDelay: `${el.delay}s`,
              '@keyframes float': {
                '0%, 100%': {
                  transform: 'translate(0, 0) scale(1)'
                },
                '33%': {
                  transform: 'translate(30px, -30px) scale(1.1)'
                },
                '66%': {
                  transform: 'translate(-20px, 20px) scale(0.9)'
                }
              }
            }}
          />
        ))}

        {/* Main content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            maxWidth: '600px',
            padding: 4
          }}
        >
          {/* Animated construction icons */}
          <Box sx={{ position: 'relative', height: '200px', marginBottom: 4 }}>
            <Zoom in={true} timeout={1000} style={{ transitionDelay: '200ms' }}>
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <Construction
                  sx={{
                    fontSize: '120px',
                    color: colors.pink,
                    filter: 'drop-shadow(0 10px 30px rgba(242, 84, 145, 0.3))',
                    animation: 'bounce 2s ease-in-out infinite',
                    '@keyframes bounce': {
                      '0%, 100%': {
                        transform: 'translateY(0) rotate(-10deg)'
                      },
                      '50%': {
                        transform: 'translateY(-20px) rotate(-10deg)'
                      }
                    }
                  }}
                />
              </Box>
            </Zoom>

            <Zoom in={true} timeout={1000} style={{ transitionDelay: '400ms' }}>
              <Box
                sx={{
                  position: 'absolute',
                  left: '30%',
                  top: '30%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <Refresh
                  sx={{
                    fontSize: '60px',
                    color: colors.lightBlue,
                    animation: 'spin 3s linear infinite',
                    '@keyframes spin': {
                      '0%': {
                        transform: 'rotate(0deg)'
                      },
                      '100%': {
                        transform: 'rotate(360deg)'
                      }
                    }
                  }}
                />
              </Box>
            </Zoom>

            <Zoom in={true} timeout={1000} style={{ transitionDelay: '600ms' }}>
              <Box
                sx={{
                  position: 'absolute',
                  left: '70%',
                  top: '70%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <Box
                  sx={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${colors.orange}, ${colors.pink})`,
                    animation: 'pulse 2s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': {
                        transform: 'scale(1)',
                        opacity: 1
                      },
                      '50%': {
                        transform: 'scale(1.2)',
                        opacity: 0.8
                      }
                    }
                  }}
                />
              </Box>
            </Zoom>
          </Box>

          {/* Text content */}
          <Fade in={true} timeout={1000} style={{ transitionDelay: '800ms' }}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${colors.lightBlue}, ${colors.pink})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                We're Building Something Great
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: '#666',
                  fontWeight: 400,
                  marginBottom: 3,
                  fontSize: { xs: '1rem', md: '1.25rem' }
                }}
              >
                Our site is currently under construction
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 1,
                  marginTop: 4
                }}
              >
                {[colors.lightBlue, colors.periwinkle, colors.pink, colors.orange].map((color, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: color,
                      animation: 'wave 1.5s ease-in-out infinite',
                      animationDelay: `${i * 0.15}s`,
                      '@keyframes wave': {
                        '0%, 100%': {
                          transform: 'translateY(0)'
                        },
                        '50%': {
                          transform: 'translateY(-15px)'
                        }
                      }
                    }}
                  />
                ))}
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: '#999',
                  marginTop: 4,
                  fontStyle: 'italic'
                }}
              >
                We'll be back online soon!
              </Typography>
            </Box>
          </Fade>
        </Box>
      </Box>
    </Fade>
  );
};

// export default UnderConstructionOverlay;
