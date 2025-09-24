import React, { useState, useEffect, useRef } from 'react';

const LazyBackground = ({ imageUrl, children, ...rest }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // این مقدار باعث میشه عکس کمی زودتر بارگذاری بشه
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const style = isVisible
    ? {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {};

  return (
    <div ref={containerRef} style={style} {...rest}>
      {!isVisible && (
        <div
          style={{
            background: 'linear-gradient(45deg, #f0f0f0, #e0e0e0)',
            width: '100%',
            height: '100%'
          }}
        ></div>
      )}
      {children}
    </div>
  );
};

export default LazyBackground;