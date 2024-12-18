import React,{Children, createContet,createContext,useContext,useState} from 'react';

const StateContext = createContext();

const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    Notification: false,

}

export const ContextProvider = ({children}) => {
    const [activeMenu,setActiveMenu] = useState(true);
    return (
        <StateContext.Provider value ={{activeMenu,setActiveMenu,}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);