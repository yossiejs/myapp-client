import React, { createContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  user: {
    displayName: 'anonymous'
  },
  count: 0,
  hoge: 'hoge',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'user':
      return { ...state, user: action.payload };
    case 'count':
      return { ...state, count: action.payload };
    default:
      return initialState;
  }
};

const AppContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider}
