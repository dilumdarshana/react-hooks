import React, {
  Fragment,
  useCallback,
  useReducer,
  useContext,
  useEffect
} from "react";
import CouterContext from "../../contexts/couter";
import SiteDataContext from "../../contexts/siteData";

const Home = props => {
  const initialStates = { count: 10 };

  // If use reducer, then no need to think of useEffect hook
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };

  const counterContext = useContext(CouterContext);
  const siteDataContext = useContext(SiteDataContext);
  const [state, dispatch] = useReducer(reducer, initialStates);

  useEffect(() => {
    siteDataContext.setPageTitle("Home");
  });
  // useCallback prevent function call on each render
  const clickMe = useCallback(() => {
    counterContext.increaseCounter(state.count);
  }, [counterContext, state]);

  const navigateUsers = useCallback(() => {
    props.history.push("/users");
  }, [props]);

  return (
    <Fragment>
      <p>My count is {state.count}</p>
      <button onClick={clickMe}>Click Me</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={navigateUsers}>Users</button>
    </Fragment>
  );
};

export default Home;
