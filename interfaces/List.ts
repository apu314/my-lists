export interface List {
  _id: string
  name: string
  items: IListItem[]
  status: ListStatus
  createdAt: number
}

export type ListStatus = 'open' | 'closed'

export interface IListItem {
  _id: string
  name: string
  quantity: number
  isCompleted: boolean
}
