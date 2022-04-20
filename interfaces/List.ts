export interface List {
  _id: string;
  name: string;
  items: ListItem[]
  status: ListStatus;
  createdAt: number;
}

export type ListStatus = 'open' | 'closed';

export interface ListItem {
  name: string;
  quantity: number;
  isCompleted: boolean;
}