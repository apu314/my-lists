export interface ShoppingList {
  _id: string;
  name: string;
  items: ShoppingListItem[]
  status: ShoppingListStatus;
  createdAt: number;
}

export type ShoppingListStatus = 'open' | 'closed';

export interface ShoppingListItem {
  name: string;
  quantity: number;
  isCompleted: boolean;
}