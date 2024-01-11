import { useState, useTransition } from 'react';

const count = 20000;

const Transition = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.currentTarget.value);

    startTransition(() => {
      const l = [];
      for (let i = 0; i < count; i++) {
        l.push(e.target.value);
      }
      setList(l);
    })
  }
  
  return (
    <div className="app-separator">
      <input type="text" value={input} onChange={handleChange} />
      { isPending ? 'Pending...' :
        list.map((l, index) => {
          return (<div key={index}>{l}</div>)
        })
      }
    </div>
  );
}

export default Transition;
