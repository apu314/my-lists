import { List as List } from '../../interfaces'
import { ListsState } from './'

type ListsActionType = { type: '[Lists] - Refresh Lists '; payload: List[] }

export const listsReducer = (
  state: ListsState,
  action: ListsActionType
): ListsState => {
  switch (action.type) {
    case '[Lists] - Refresh Lists ':
      return {
        ...state,
        lists: [...action.payload],
      }

    default:
      return state
  }
}
