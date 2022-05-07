export interface List {
  _id: string
  name: string
  items: ListItem[]
  status: ListStatus
  createdAt: number
}

export type ListStatus = 'open' | 'closed'

export interface ListItem {
  _id: string
  name: string
  quantity: number
  isCompleted: boolean
}
