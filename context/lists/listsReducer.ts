import { List as List } from '../../interfaces'
import { ListsState } from './'

type ListsActionType =
  | { type: '[Lists] - Refresh Lists '; payload: List[] }
  | { type: '[Lists] - Toggle Active List '; payload?: List }
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
      return {
        ...state,
        lists: mutateList(state, action.payload),
      }

    default:
      return state
  }
}

// TODO: Accept only the list we want to update
// const mutatedIndex = state.findIndex((item) => item.id === mutatedItem.id);
const mutateList = (state: ListsState, payload: List): List[] => {
  console.log('🚀 ~ file: listsReducer.ts ~ line 47 ~ payload', { ...payload })

  const { lists } = state

  const listIndexToUpdate = lists.findIndex((item) => item._id === payload._id)

  lists[listIndexToUpdate] = payload

  /* const updatedLists = lists.map((list) => {
    if (list._id === action.payload._id) {
      return {
        ...action.payload,
      }
    }
    return list
  }) */

  console.log('🚀 ~ file: listsReducer.ts ~ line 65 ~ lists', lists)

  // return updatedLists
  return lists
}
