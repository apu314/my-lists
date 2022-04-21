import { List as List } from '../../interfaces'

import { FC, useEffect, useReducer } from 'react'

import { ListsContext, listsReducer } from './'
import { listsApi } from '../../apis'

export interface ListsState {
  lists: List[]
}

const LISTS_INITIAL_STATE: ListsState = {
  lists: [],
}

export interface ListsProviderProps {
  children: JSX.Element
}

export const ListsProvider: FC<ListsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(listsReducer, LISTS_INITIAL_STATE)

  const refreshLists = async () => {
    const { data } = await listsApi.get<List[]>(`/lists`)

    dispatch({ type: '[Lists] - Refresh Lists ', payload: data })
  }

  useEffect(() => {
    refreshLists()
  }, [])

  return (
    <ListsContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </ListsContext.Provider>
  )
}
