import React, { useReducer } from "react";
const initialState = ()=>({
    count: 0
})
const ACTIONS = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET: "RESET"
}
const reducer = (state = initialState(), action = {}) => {
    console.log(state)
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
        if(state.count>=1){
            return { count: state.count - 1 };
        }
    break;

    default:
      return state
  }
};
export const Main = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };
  const SchemmaMain = () => {
    return (
      <body>
        <div className="g-container one-column">
        <small className="txt-title">{state.count}</small>
          <div className="two-columns">
            <button className="button-increment green-c" onClick={()=>{increment()}}>
              <small className="txt-btn">Incrementar</small>
            </button>
            <button className="button-increment red-c"  onClick={()=>{decrement()}}>
              <small className="txt-btn">Decrementar</small>
            </button>
          </div>
        </div>
      </body>
    );
  };
  return SchemmaMain();
};
