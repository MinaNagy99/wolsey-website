import { useEffect, useState } from "react";

function useCountUp(target, start = false, duration = 5000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // Only start counting when "start" is true

    let startCount = 0;
    const increment = target / (duration / 10); // Increment per 10ms
    const counter = setInterval(() => {
      startCount += increment;
      if (startCount >= target) {
        startCount = target;
        clearInterval(counter);
      }
      setCount(Math.floor(startCount));
    }, 10);

    return () => clearInterval(counter); // Cleanup on unmount
  }, [target, duration, start]);

  return count;
}

export default useCountUp;
