import { useState, useEffect } from "react";

interface Bubble {
  id: number;
  left: number;
  size: number;
  duration: number;
  popping?: boolean;
  color?: { start: string; mid: string; end: string };
  startDelay?: number;
}

const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [nextBubbleId, setNextBubbleId] = useState(0);

  useEffect(() => {
    const bubbleInterval = setInterval(() => {
      setBubbles(prev => {
        // Максимум 20 пузырьков
        if (prev.length >= 20) {
          return prev;
        }
        
        const colors = [
          { start: 'rgba(93, 63, 211, 0.8)', mid: 'rgba(157, 78, 221, 0.8)', end: 'rgba(200, 100, 255, 0.6)' },
          { start: 'rgba(147, 51, 234, 0.8)', mid: 'rgba(168, 85, 247, 0.8)', end: 'rgba(196, 181, 253, 0.6)' },
          { start: 'rgba(168, 85, 247, 0.8)', mid: 'rgba(192, 132, 250, 0.8)', end: 'rgba(233, 213, 255, 0.6)' },
          { start: 'rgba(139, 92, 246, 0.8)', mid: 'rgba(167, 139, 250, 0.8)', end: 'rgba(218, 188, 255, 0.6)' },
          { start: 'rgba(124, 58, 255, 0.8)', mid: 'rgba(165, 120, 255, 0.8)', end: 'rgba(221, 214, 254, 0.6)' },
          { start: 'rgba(109, 40, 217, 0.8)', mid: 'rgba(140, 70, 240, 0.8)', end: 'rgba(186, 145, 255, 0.6)' },
          { start: 'rgba(99, 102, 241, 0.8)', mid: 'rgba(129, 140, 248, 0.8)', end: 'rgba(199, 210, 254, 0.6)' },
          { start: 'rgba(88, 28, 135, 0.8)', mid: 'rgba(126, 34, 206, 0.8)', end: 'rgba(167, 139, 250, 0.6)' },
          { start: 'rgba(75, 0, 130, 0.8)', mid: 'rgba(138, 43, 226, 0.8)', end: 'rgba(186, 85, 211, 0.6)' },
          { start: 'rgba(106, 17, 203, 0.8)', mid: 'rgba(147, 51, 234, 0.8)', end: 'rgba(191, 64, 191, 0.6)' },
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        const newBubble: Bubble = {
          id: nextBubbleId,
          left: Math.random() * 90 + 5,
          size: Math.random() * 40 + 20,
          duration: Math.random() * 6 + 10,
          color: randomColor,
          startDelay: Math.random() * 2
        };
        return [...prev, newBubble];
      });
      setNextBubbleId(prev => prev + 1);
    }, 500);

    return () => clearInterval(bubbleInterval);
  }, [nextBubbleId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setBubbles(prev => prev.filter(bubble => !bubble.popping));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  const popBubble = (id: number) => {
    setBubbles(prev =>
      prev.map(bubble =>
        bubble.id === id ? { ...bubble, popping: true } : bubble
      )
    );
  };

  return (
    <>
      <style>
        {`
          @keyframes rise {
            0% {
              bottom: -50px;
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              bottom: 100vh;
              opacity: 0;
            }
          }
          
          @keyframes pop {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(0);
              opacity: 0;
            }
          }
          
          @keyframes glow {
            0%, 100% {
              filter: blur(1px) drop-shadow(0 0 8px rgba(93, 63, 211, 0.8));
            }
            50% {
              filter: blur(1px) drop-shadow(0 0 16px rgba(93, 63, 211, 0.8));
            }
          }
          
          .bubble-background {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            pointer-events: none;
            z-index: -5;
          }
          
          .bubble {
            position: absolute;
            bottom: -50px;
            border-radius: 50%;
            cursor: pointer;
            pointer-events: auto;
          }
          
          .bubble.normal {
            animation: rise linear forwards, glow 3s ease-in-out infinite;
          }
          
          .bubble.popping {
            animation: pop 0.5s ease-out forwards;
          }
        `}
      </style>
      
      <div className="bubble-background">
        {bubbles.map(bubble => {
          const colorGradient = bubble.color 
            ? `linear-gradient(135deg, ${bubble.color.start} 0%, ${bubble.color.mid} 50%, ${bubble.color.end} 100%)`
            : `linear-gradient(135deg, rgba(93, 63, 211, 0.8) 0%, rgba(157, 78, 221, 0.8) 50%, rgba(200, 100, 255, 0.6) 100%)`;
          
          return (
            <div
              key={bubble.id}
              className={`bubble ${bubble.popping ? 'popping' : 'normal'}`}
              style={{
                left: `${bubble.left}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                background: colorGradient,
                boxShadow: `0 0 30px rgba(93, 63, 211, 0.8)`,
                animationDuration: bubble.popping ? '0.5s' : `${bubble.duration}s`,
                animationDelay: bubble.popping ? '0s' : `${bubble.startDelay || 0}s`
              }}
              onClick={() => popBubble(bubble.id)}
            />
          );
        })}
      </div>
    </>
  );
};

export default BubbleBackground;
