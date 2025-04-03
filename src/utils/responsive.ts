/**
 * Responsive design utility functions and constants
 */

// Breakpoint values (matching Tailwind's default breakpoints)
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

/**
 * Check if the current viewport is mobile
 * @param width - Current viewport width
 * @returns boolean indicating if viewport is mobile
 */
export const isMobile = (width: number): boolean => width < breakpoints.md;

/**
 * Check if the current viewport is tablet
 * @param width - Current viewport width
 * @returns boolean indicating if viewport is tablet
 */
export const isTablet = (width: number): boolean => 
  width >= breakpoints.md && width < breakpoints.lg;

/**
 * Check if the current viewport is desktop
 * @param width - Current viewport width
 * @returns boolean indicating if viewport is desktop
 */
export const isDesktop = (width: number): boolean => width >= breakpoints.lg;

/**
 * Get the current device type based on viewport width
 * @param width - Current viewport width
 * @returns string representing the device type
 */
export const getDeviceType = (width: number): 'mobile' | 'tablet' | 'desktop' => {
  if (isMobile(width)) return 'mobile';
  if (isTablet(width)) return 'tablet';
  return 'desktop';
};

/**
 * Custom hook for responsive design (to be used with useEffect)
 * @example
 * useEffect(() => {
 *   const handleResize = () => {
 *     const deviceType = getDeviceType(window.innerWidth);
 *     // Do something with deviceType
 *   };
 *   
 *   window.addEventListener('resize', handleResize);
 *   handleResize(); // Initial check
 *   
 *   return () => window.removeEventListener('resize', handleResize);
 * }, []);
 */
