import { createContext } from 'react'

import { List as List } from '../../interfaces'

export interface ContextProps {
  lists: List[]
}

export const ListsContext = createContext({} as ContextProps)
