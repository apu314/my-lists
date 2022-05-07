import { List as List, ListItem } from '../../interfaces'
import { ListsState } from './'

type ListsActionType =
  | { type: '[Lists] - Refresh Lists '; payload: List[] }
  | { type: '[Lists] - Toggle Active List '; payload: List | null }
  | { type: '[Lists] - Add List '; payload: List }
  | { type: '[Lists] - Update List '; payload: List }

export const listsReducer = (state: ListsState, action: ListsActionType): ListsState => {
  switch (action.type) {
    case '[Lists] - Refresh Lists ':
      return {
        ...state,
        lists: [...action.payload],
      }

    case '[Lists] - Toggle Active List ':
      console.log(action.payload)
      return {
        ...state,
        activeList: action.payload,
      }

    case '[Lists] - Add List ':
      return {
        ...state,
        lists: [...state.lists, action.payload],
      }

    case '[Lists] - Update List ':
      console.log('[Lists] - Update List ', { ...action.payload })
      return {
        ...state,
        lists: mutateList(state, action),
      }

    default:
      return state
  }
}

const mutateList = (state: ListsState, action: { type: '[Lists] - Update List '; payload: List }): List[] => {
  console.log('action.payload', { ...action.payload })
  const { lists } = state

  const updatedLists = lists.map((list) => {
    if (list._id === action.payload._id) {
      return {
        ...action.payload,
      }
    }
    return list
  })

  console.log('updatedLists --> ', updatedLists)

  return updatedLists

  /* return state.lists.map(list => {
    if (list._id === action.payload._id) {
      return action.payload
    }
    return list
  }) */
}
