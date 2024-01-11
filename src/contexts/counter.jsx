import { createContext, useState } from 'react';

const CounterContext = createContext({
  counter: 0,
  increaseCounter: () => {}
});

export const CounterProvider = props => {
  const [counter, setCounter] = useState(30);

  const values = {
    counter,
    increaseCounter: counter => {
      setCounter(counter);
    }
  };

  return (
    <CounterContext.Provider value={values}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
