import React, { useState, useRef, useEffect } from 'react';
import { useIntersectionObserver, useImageLoader } from '../hooks/useTouch';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik03NS4yNSA2Mi41SDEyNC43NUMxMjguNzE1IDYyLjUgMTMyIDY1Ljc4NSAxMzIgNjkuNzVWMTMwLjI1QzEzMiAxMzQuMjE1IDEyOC43MTUgMTM3LjUgMTI0Ljc1IDEzNy41SDc1LjI1QzcxLjI4NSAxMzcuNSA2OCAxMzQuMjE1IDY4IDEzMC4yNVY2OS43NUM2OCA2NS43ODUgNzEuMjg1IDYyLjUgNzUuMjUgNjIuNVoiIGZpbGw9IiNFNUU1RTUiLz4KPHBhdGggZD0iTTg1IDg1Qzg5LjE0MjEgODUgOTIuNSA4MS42NDIxIDkyLjUgNzcuNUM5Mi41IDczLjM1NzkgODkuMTQyMSA3MCA4NSA3MEM4MC44NTc5IDcwIDc3LjUgNzMuMzU3OSA3Ny41IDc3LjVDNzcuNSA4MS42NDIxIDgwLjg1NzkgODUgODUgODVaIiBmaWxsPSIjRDFEMUQxIi8+CjxwYXRoIGQ9Ik0xMjIuNSAxMjVMOTcuNSA5Mi41TDc3LjUgMTEyLjVWMTI1SDEyMi41WiIgZmlsbD0iI0QxRDFEMSIvPgo8L3N2Zz4K',
  onLoad,
  onError,
  priority = false
}) => {
  const [imageSrc, setImageSrc] = useState<string>(priority ? src : placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [elementRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  useEffect(() => {
    if (!priority && isIntersecting && imageSrc === placeholder) {
      setImageSrc(src);
    }
  }, [isIntersecting, priority, src, imageSrc, placeholder]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div 
      ref={elementRef}
      className={`relative overflow-hidden ${className}`}
    >
      <img
        src={imageSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded && !hasError ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
      
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-luxury-cream-100 animate-pulse flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-luxury-gold-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Error placeholder */}
      {hasError && (
        <div className="absolute inset-0 bg-luxury-cream-100 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-luxury-cream-200 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-luxury-charcoal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs text-luxury-charcoal-500">Image not available</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage; 