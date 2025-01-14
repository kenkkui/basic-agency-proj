function debouncer(cb: Function, delay: number = 1000) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: any) => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function throttle(cb: Function, delay: number = 1000) {
  let shouldWait = false;
  let waitingArgs: any;

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args: any) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
}

export { debouncer, throttle };
