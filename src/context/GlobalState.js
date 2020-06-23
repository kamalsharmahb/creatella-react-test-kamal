import React, { useReducer } from "react";
import produce from "immer";
import _ from "lodash";
import { fetchData } from "../route";

const GlobalStateContext = React.createContext({});

const { Provider } = GlobalStateContext;

const initialState = produce(
  {
    error: false,
    isFetching: false,
    newData : [],
    data : fetchData(),
    hasMore: true,
    category: 'id'
  },
  _.identity
);

function setHasMoreData(appState, value){
  return produce(appState, (draftState) => {
    draftState.hasMore = value
  })
}

function setIsFetching(appState, value){
  return produce(appState, (draftState) => {
    draftState.isFetching = value
  })
}

function setError(appState, value){
  return produce(appState, (draftState) => {
    draftState.error = value
  })
}

function setCategory(appState, value){
  return produce(appState, (draftState) => {
    draftState.category = value
  })
}

function loadDataOnScroll(appState, page, sort) {
  return produce(appState, (draftState) => {
    draftState.newData = fetchData(page, sort)
  });
}

function sortData(appState, category) {
  return produce(appState, (draftState) => {
    draftState.data = fetchData('', category.toLowerCase())
  });
}

const ACTIONS = {
  loadDataOnScroll,
  sortData,
  setCategory,
  setIsFetching,
  setHasMoreData,
  setError
};

function reducer(state, action) {
  let actionReducer = ACTIONS[action.type];
  if (actionReducer) {
    return actionReducer.apply(null, [state].concat(action.payload));
  } else {
    return state;
  }
}

const appStateRef = { current: null };

GlobalStateContext.Provider = ({ children }) => {
  const [appState, dispatch] = useReducer(reducer, initialState);
  appStateRef.current = appState;

  const actions = _.reduce(
    ACTIONS,
    (acc, val, k) => {
      acc[k] = function () {
        let args = [];
        for (let i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        dispatch({ type: k, payload: args });
      };
      return acc;
    },
    {}
  );

  return (
    <Provider
      value={{
        ...appState,
        getCurrent: () => {
          return appStateRef.current;
        },
        actions: actions,
      }}
    >
      {children}
    </Provider>
  );
};

export default GlobalStateContext;
