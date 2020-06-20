import React, { createContext, useReducer, useEffect, useContext } from "react";
import { reducer, initialState } from "./reducers";
import { useActions } from "./actions";
import { FormFields } from "./constants";

export const StoreContext = createContext();
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);
  /*eslint-disable */
  useEffect(() => {
    actions.quote(
      state.form[FormFields.amount].value,
      state.form[FormFields.duration].value
    );
  }, []);
  /*eslint-enable */
  return (
    <StoreContext.Provider value={{ state, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

export function useStore() {
  const context = useContext(StoreContext);
  return context;
}
