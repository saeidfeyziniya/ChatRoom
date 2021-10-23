import React from "react";

var CounterStateContext = React.createContext();
var CounterDispatchContext = React.createContext();

function counterReducer(state, action) {
  switch (action.type) {
    case "Type":
      return {...state, newChatType: action.payload , showPassword: "false",created:"false",
      newGroupName: "",newGroupPassword:""};
    case "Name":
      return {...state, newGroupName: action.payload};
    case "Password":
      return {...state, newGroupPassword: action.payload};
    case "Created":
      return {...state, created: action.payload};
    case "ShowPass":
      return {...state, showPassword: action.payload};
    case "Reset":
      return {...state, showPassword: "false",created:"false",newChatType: "",
                        newGroupName: "",newGroupPassword:"",leftSection:"settings"};
    case "leftSec":
      return {...state, leftSection:action.payload};
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    } 
  }
}

function NewGroupProvider({children}) {
  var [state, dispatch] = React.useReducer(counterReducer, {
    newChatType: "",
    newGroupName: "",
    newGroupPassword:"",
    created:"false",
    showPassword:"false",
    leftSection:"settings"
  });
  return (
    <CounterStateContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
}

function useNewGroupState() {
  var context = React.useContext(CounterStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function useNewGroupDispatch() {
  var context = React.useContext(CounterDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

export { NewGroupProvider, useNewGroupState, useNewGroupDispatch,setNewGroupType,
          setNewGroupName,setNewGroupPassword,setCreatedGroup,setShowPassword,resetAddGroupStates,
          setLeftSectionState
        };

// ###########################################################
function setNewGroupType(dispatch , val) {
  dispatch({
    type: "Type",
    payload:val
  });
}
function setNewGroupName(dispatch , val) {
  dispatch({
    type: "Name",
    payload:val
  });
}
function setNewGroupPassword(dispatch , val) {
  dispatch({
    type: "Password",
    payload:val
  });
}
function setCreatedGroup(dispatch , val) {
  dispatch({
    type: "Created",
    payload:val
  });
}
function setShowPassword(dispatch , val) {
  dispatch({
    type: "ShowPass",
    payload:val
  });
}
function resetAddGroupStates(dispatch) {
  dispatch({
    type: "Reset"
  });
}
//set left side setting or create group or share section 
function setLeftSectionState(dispatch,value) {
  dispatch({
    type: "leftSec",
    payload: value
  });
}
