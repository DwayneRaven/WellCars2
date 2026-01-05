import { useState, useEffect, RefObject } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {}

const useIntersectionObserver = (
  ref: RefObject<Element>,
  options: IntersectionObserverOptions
): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fallback for browsers that don't support IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver is not supported by this browser.');
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when observer callback fires
        setIsVisible(entry.isIntersecting);
      },
      options
    );

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [ref, JSON.stringify(options)]); // Use JSON.stringify to prevent re-runs on object reference change

  return isVisible;
};

export default useIntersectionObserver;
