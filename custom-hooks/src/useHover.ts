import { useState, useRef, useCallback, useEffect } from 'react';

function useHover() {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)

  const handleMouseEnter = useCallback(() => setHovered(true), [])
  const handleMouseLeave = useCallback(() =>setHovered(false), [])

  useEffect(() => {
    const node = ref.current
    if (node) {
      (node as HTMLElement).addEventListener('mouseenter', handleMouseEnter);
      (node as HTMLElement).addEventListener('mouseleave', handleMouseLeave)

      return () => {
        (node as HTMLElement).removeEventListener('mouseenter', handleMouseEnter);
        (node as HTMLElement).removeEventListener('mouseleave', handleMouseLeave)
      };
    }
  }, [])

  return { hovered, ref }
}

export { useHover }