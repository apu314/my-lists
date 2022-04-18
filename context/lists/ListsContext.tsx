import { createContext } from 'react'

import { ShoppingList as List } from '../../interfaces'


export interface ContextProps {
  lists: List[]
}


export const ListsContext = createContext({} as ContextProps)
