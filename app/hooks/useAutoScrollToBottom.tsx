import { useEffect, useRef } from "react";

export function useScrollToBottom(dependency) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const { scrollHeight, clientHeight } = containerRef.current;
      containerRef.current.scrollTop = scrollHeight - clientHeight;
    }
  }, [dependency]);

  return containerRef;
}
