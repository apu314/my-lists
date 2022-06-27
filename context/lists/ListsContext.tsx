import { List as IList, IListItem } from '../../interfaces'

import { createContext } from 'react'

export interface ContextProps {
  lists: IList[]
  activeList?: IList
  isLoading: boolean

  toggleActiveList: (list?: IList) => void
  createList: (list: IList) => void

  mutateList: (list: IList) => void
  mutateListItem: (istItem: IListItem) => void

  updateActiveListItem: (listItem: IListItem) => void
}

export const ListsContext = createContext({} as ContextProps)
