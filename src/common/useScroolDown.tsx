import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions: Record<string, number> = {};

export function useScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const savedPosition = scrollPositions[path] || 0;

    window.scrollTo({ top: 0, behavior: "auto" });

    const timeoutId = setTimeout(() => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTo = Math.min(savedPosition, maxScroll);

      if (scrollTo > 0) {
        window.scrollTo({ top: scrollTo, behavior: "smooth" });
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      scrollPositions[path] = window.scrollY;
    };
  }, [location]);
}
