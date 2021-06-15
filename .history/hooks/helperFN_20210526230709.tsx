import { useEffect, useState } from 'react';

export default function IsBreakpoint(): number {
  const [state, setState] = useState<number | null>(null);

  useEffect(() => {
    setState(window.innerWidth);
    const resizeHandler = debounce(
      () => setState(window.innerWidth),
      500
    );
    window.addEventListener('resize', resizeHandler);
    return () =>
      window.removeEventListener('resize', resizeHandler);
  }, []);

  return state;
}

function debounce(fn: () => void, ms: number) {
  let clearTimer: number;
  return function () {
    clearTimeout(clearTimer);
    clearTimer = window.setTimeout(function () {
      fn.apply(this, arguments);
    }, ms);
  };
}

// export default function UseWindowDimension() {
//   const [dimension, setDimension] = useState(null);
//   useEffect(() => {
//     const debouncedResizeHandler = debounce(() => {
//       console.log("***** debounced resize"); // See the cool difference in console
//       setDimension([window.innerWidth, window.innerHeight]);
//     }, 500); // 100ms
//     window.addEventListener(
//       "resize",
//       debouncedResizeHandler
//     );
//     return () =>
//       window.removeEventListener(
//         "resize",
//         debouncedResizeHandler
//       );
//   }, []); // Note this empty array. this effect should run only on mount and unmount
//   return dimension;
// }

// function debounce(fn, ms) {
//   let timer;
//   return (_) => {
//     clearTimeout(timer);
//     timer = setTimeout((_) => {
//       timer = null;
//       fn.apply(this, arguments);
//     }, ms);
//   };
// }
