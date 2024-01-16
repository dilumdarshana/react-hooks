import { useState, useDeferredValue, useEffect, useMemo } from 'react';

function List ({ input }) {
  const SIZE = 20000;
  const deferredValue = useDeferredValue(input);
  
  const list = useMemo(() => {
    const list = [];

    for (let i = 0; i < SIZE; i++) {
      list.push(<div key={i}>{deferredValue}</div>);
    }

    return list;
  }, [deferredValue]);

  useEffect(() => {
    console.log('xxx', input, deferredValue);
  }, [input, deferredValue])

  return list;
}

const Debounce = () => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="app-separator">
        <input type="text" value={input} onChange={handleChange} />
        <div><List input={input} /></div>
    </div>
  );
}

export default Debounce;
