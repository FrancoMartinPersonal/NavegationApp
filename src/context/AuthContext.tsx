
import React, { createContext, useReducer } from "react"
import { AuthReducer } from './AuthReducer';



// Definir cómo luce, qué información tendré aquí
export interface AuthState {
    isLoggedIn : boolean;
    username?:string;
    favoriteIcon?:string;
}
//estado inicial
export const AuthInitialState:AuthState = {
    isLoggedIn:false,
    username:undefined,
    favoriteIcon:undefined
}
// Lo usaremos para decirle a React cómo luce y qué expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn : () => void;
    logOut: () => void; 
     changeFavoriteIcon: (iconName: string) => void;
     changeUsername:(username: string) => void;

}
// crear el contexto
export const AuthContext = createContext({} as AuthContextProps)

// Componente proveedor del estado

export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(AuthReducer, AuthInitialState)

    const signIn = () => {
        dispatch({type:'signIn'})
    }
    const changeFavoriteIcon = (iconName : string) => {
        dispatch({type:'changeFavIcon',payload:iconName})
    }
    const logOut = () => {
        dispatch({type:'logout'})
    }
    const changeUsername= (username: string) => {
        dispatch({type:'changeUsername',payload:username})
    }
    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logOut,
            changeUsername
        }}>
            {children}
        </AuthContext.Provider>
    )
}