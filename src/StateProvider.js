// Setup data layer :  We need this to track the basket

import React, { createContext, useContext, useReducer } from "react"

// CREATE EMPTY DATA LAYER: (i.e. the 'context')
export const StateContext = createContext();

// CREATE PROVIDER: 
export const StateProvider = ({reducer, initialState, children}) => (
    
    // StateContext provider takes hook useReducer: use a data layer to store data; reducer is the hook, initialState is the empty data layer
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

    // This is how we use StateProvider inside a component
    export const useStateValue = () => useContext(StateContext)
