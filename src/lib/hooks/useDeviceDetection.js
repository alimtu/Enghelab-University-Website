import { useState, useEffect } from 'react';

const breakpoints = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  xlarge: 1280,
};

export const useDeviceDetection = () => {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setDevice({
        isMobile: width < breakpoints.mobile,
        isTablet: width >= breakpoints.mobile && width < breakpoints.tablet,
        isDesktop:
          (width >= breakpoints.tablet && width < breakpoints.desktop) ||
          width >= breakpoints.xlarge,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
};
