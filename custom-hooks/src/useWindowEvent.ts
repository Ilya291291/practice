import { useEffect } from 'react';

// type useWindowEvent = {
//   type: string;
//   listener: Function;
//   options?: AddEventListenerOptions
// }

export function useWindowEvent (type: string, listener: (event: Event) => void, options? : AddEventListenerOptions) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener]);
}