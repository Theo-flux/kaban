import { useState, useEffect, useCallback } from 'react';

function usePersistState(key: string, defaultKey: string) {
  const [value, setValue] = useState(defaultKey);

  const updateValue = useCallback(
    (val: string) => {
      setValue(val);
      window?.sessionStorage.setItem(key, JSON.stringify(val));
    },
    [key]
  );

  useEffect(() => {
    const data = window?.sessionStorage.getItem(key);
    if (data !== null) updateValue(JSON.parse(data));
  }, [key, updateValue]);

  return {value, updateValue};
}

export default usePersistState;
