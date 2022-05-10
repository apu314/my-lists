import { List as List, ListItem } from '../../interfaces'

import { createContext } from 'react'

export interface ContextProps {
  lists: List[]
  activeList: List | null
  isLoading: boolean

  toggleActiveList: (list?: List) => void
  createList: (list: List) => void

  mutateList: (list: List) => void
  mutateListItem: (listId: string, listItem: ListItem) => void
}

export const ListsContext = createContext({} as ContextProps)
