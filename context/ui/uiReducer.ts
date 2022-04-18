import { UIState } from './'


type UIActionType =
  | { type: '[UI] - Toggle Dark mode', payload: boolean }



export const uiReducer = (state: UIState, action: UIActionType): UIState => {

  switch (action.type) {
    // case '[UI] - Toggle Dark mode':
    //   return {
    //     ...state,
    //     isDarkMode: action.payload
    //   }

    default:
      return state
  }

}
