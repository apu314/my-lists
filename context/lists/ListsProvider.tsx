import { List, ListItem } from '../../interfaces'

import { FC, useEffect, useReducer, useState } from 'react'

import { ListsContext, listsReducer } from './'
import { listsApi } from '../../apis'

export interface ListsState {
  lists: List[]
  activeList: List | null
}

const LISTS_INITIAL_STATE: ListsState = {
  lists: [],
  activeList: null,
}

export interface ListsProviderProps {
  children: JSX.Element
}

export const ListsProvider: FC<ListsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(listsReducer, LISTS_INITIAL_STATE)

  const [isLoading, setIsloading] = useState(true)

  const refreshLists = async () => {
    const { data } = await listsApi.get<List[]>(`/lists`)

    dispatch({ type: '[Lists] - Refresh Lists ', payload: data })
    setIsloading(false)
  }

  const toggleActiveList = (list: List | null = null) => {
    dispatch({ type: '[Lists] - Toggle Active List ', payload: list })
  }

  const createList = async (list: List) => {
    const { data } = await listsApi.post<List>(`/lists`, list)

    dispatch({ type: '[Lists] - Add List ', payload: data })
  }

  const mutateList = async (list: List) => {
    try {
      const { data } = await listsApi.put<List>(`/lists/${list._id}`, list)
      console.log('[mutateList] --> ', data)

      dispatch({ type: '[Lists] - Toggle Active List ', payload: data })
      dispatch({ type: '[Lists] - Update List ', payload: data })
    } catch (error) {
      console.log('[mutateList | ERROR ] --> ', error)
    }
  }

  const mutateListItem = async (listItem: ListItem) => {
    const listToUpdate = state.lists.find((list) => list._id === state.activeList?._id)
    if (!listToUpdate) {
      console.log('List not found')
      return
    }
    const updatedListItems = listToUpdate.items.map((item) => {
      if (item._id === listItem._id) {
        return listItem
      }
      return item
    })

    const updatedList: List = {
      ...listToUpdate,
      items: updatedListItems,
    }

    mutateList(updatedList)
  }

  useEffect(() => {
    refreshLists()
  }, [])

  return (
    <ListsContext.Provider
      value={{
        ...state,
        toggleActiveList,
        createList,
        mutateList,
        mutateListItem,
        isLoading,
      }}
    >
      {children}
    </ListsContext.Provider>
  )
}
