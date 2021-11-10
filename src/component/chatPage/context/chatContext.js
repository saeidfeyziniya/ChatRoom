import React from "react";

var ChatStateContext = React.createContext();
var ChatDispatchContext = React.createContext();

function chatReducer(state, action) {
  switch (action.type) {
    case "JoinChat":
      return {...state, chatBoxState: "passwordChat"};
    case "MobileState":
      return {...state, mobileState: action.payload};
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    } 
  }
}

function ChatProvider({children}) {
  var [state, dispatch] = React.useReducer(chatReducer, {
    chatBoxState:"empty",
    mobileState:"groups"
    
  });
  return (
    <ChatStateContext.Provider value={state}>
      <ChatDispatchContext.Provider value={dispatch}>
        {children}
      </ChatDispatchContext.Provider>
    </ChatStateContext.Provider>
  );
}

function useChatState() {
  var context = React.useContext(ChatStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function useChatDispatch() {
  var context = React.useContext(ChatDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

export { ChatProvider, useChatState, useChatDispatch,setJoinToChat,setMobileState
          
        };

// ###########################################################
function setJoinToChat(dispatch , val) {
  dispatch({
    type: "JoinChat",
    payload:val
  });
  
}
function setMobileState(dispatch , val) {
  dispatch({
    type: "MobileState",
    payload:val
  });
  
}

