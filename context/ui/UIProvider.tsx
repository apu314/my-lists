import { FC, useReducer } from 'react'
import { UIContext, uiReducer } from './'


export interface UIState {
  // isDarkMode: boolean
}

const UI_INITIAL_STATE: UIState = {
  // isDarkMode: true
}

export interface UIProviderProps {
  children: JSX.Element
}

export const UIProvider: FC<UIProviderProps> = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  
  // const setIsDarkMode = (isDark: boolean) => dispatch({ type: '[UI] - Toggle Dark mode', payload: isDark })


  return (
    <UIContext.Provider
      value={{
        ...state,
        // setIsDarkMode
      }}
    >
     {children}
   </UIContext.Provider>
  )
}
