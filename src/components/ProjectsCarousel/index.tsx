import React, { useState, useRef, useEffect } from 'react';
import { Projects } from '../../data/projects';
import './styles.css';

const ProjectsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<HTMLDivElement>(null);

  const totalCards = Math.min(10, Projects.length);
  const displayProjects = Projects.slice(0, totalCards);

  const colors = [
    'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
    'linear-gradient(135deg, #F97316 0%, #EF4444 100%)',
    'linear-gradient(135deg, #06B6D4 0%, #0EA5E9 100%)',
    'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
    'linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)',
    'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
    'linear-gradient(135deg, #14B8A6 0%, #5EEAD4 100%)',
    'linear-gradient(135deg, #F43F5E 0%, #FB7185 100%)',
    'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
    'linear-gradient(135deg, #EF4444 0%, #06B6D4 100%)'
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalCards);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleCardClick = (clickedIndex: number) => {
    const relativeIndex = (clickedIndex - currentIndex + totalCards) % totalCards;
    
    if (relativeIndex === 0) {
      // Если клик на центральной карточке - ничего не делаем
      return;
    } else if (relativeIndex === 1) {
      // Если клик на правой карточке - идем к ней
      goToSlide(clickedIndex);
    } else if (relativeIndex === totalCards - 1) {
      // Если клик на левой карточке - идем к ней
      goToSlide(clickedIndex);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, 200);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const element = observerRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const getCardPosition = (index: number) => {
    const relativeIndex = (index - currentIndex + totalCards) % totalCards;
    
    if (relativeIndex === 0) return 'center';
    if (relativeIndex === 1) return 'right';
    if (relativeIndex === totalCards - 1) return 'left';
    return 'hidden';
  };

  return (
    <div ref={observerRef} className={`projects-carousel ${isVisible ? 'visible' : ''}`}>
      <div className="carousel-header">
        <h1>ШАРМ - ЦЕ</h1>
        <p>Ознайомтесь з цінностями шарму</p>
      </div>
      
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-track">
          {displayProjects.map((project, index) => {
            const position = getCardPosition(index);
            return (
              <div
                key={project.id}
                className={`project-card ${position} ${isAnimating ? 'animating' : ''}`}
                style={{ background: colors[index % colors.length] }}
                onClick={() => handleCardClick(index)}
              >
                <div className="card-content">
                  <h3>{project.title.toUpperCase()}</h3>
                </div>
              </div>
            );
          })}
        </div>
        
        <button className="carousel-btn prev" onClick={prevSlide} disabled={isAnimating}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button className="carousel-btn next" onClick={nextSlide} disabled={isAnimating}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="carousel-dots">
        {displayProjects.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
          />
        ))}
      </div>
      
      <div className="carousel-instructions">
        <p>Використовуйте стрілки клавіатури ← → або кнопки для навігації</p>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
