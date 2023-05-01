import React, { useEffect, useRef, useState } from 'react';

const useCount = (start = 0, end = 100, timer = 30) => {
  const [state, setState] = useState(start);
  const ref = useRef(start);

  const accumulator = end / 200;

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result >= end) return setState(end);
      setState(result);
      ref.current = result;
    }
    setTimeout(updateCounterState, timer);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCounterState();
    }

    return () => (isMounted = false);
  }, [end, start]);
  return state;
};

export default useCount;
