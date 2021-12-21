import React, { useReducer } from "react";
import { getData } from "../until/fetch";
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
        }else{
          return;
        }

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
  const testfetch = ()=>{
    const url = "http://34.125.15.216/prueba"
    getData(url).then((response)=>{
      console.log(response)
    })
  }
  const SchemmaMain = () => {
    return (
      <body>
        <div className="g-container one-column">
        <small className="txt-title">{state?state.count:0}</small>
          <div className="two-columns">
            <button className="button-increment green-c" onClick={()=>{increment()}}>
              <small className="txt-btn">Incrementar</small>
            </button>
            <button className="button-increment red-c"  onClick={()=>{decrement()}}>
              <small className="txt-btn">Decrementar</small>
            </button>
            <button className="button-increment red-c"  onClick={()=>{testfetch()}}>
              <small className="txt-btn">test</small>
            </button>
          </div>
        </div>
      </body>
    );
  };
  return SchemmaMain();
};
