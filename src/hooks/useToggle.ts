import { useCallback, useState } from 'react';

const useToggle = (initValue = false) => {
  const [value, setValue] = useState(initValue);

  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, toggle, setTrue, setFalse, setValue];
};

export default useToggle;
