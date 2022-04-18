
interface SeedData {
  shoppingLists: ShoppingList[];
}

export interface ShoppingList {
  name: string;
  items: ShoppingListItem[]
  status: string;
  createdAt: number;
}

export interface ShoppingListItem {
  name: string;
  quantity: number;
  isCompleted: boolean;
}


export const seedData: SeedData = {
  shoppingLists: [
    {
      name: 'Lista compra Casa',
      items: [
        {
          name: 'Agua 8 Litros',
          quantity: 2,
          isCompleted: false
        },
        {
          name: 'Belvita',
          quantity: 1,
          isCompleted: false
        },
        {
          name: 'Fuet',
          quantity: 2,
          isCompleted: false
        },
      ],
      status: 'open', // 'open' or 'closed'
      createdAt: Date.now()
    },
    {
      name: 'Libros',
      items: [
        {
          name: 'El líder que no tenía cargo',
          quantity: 1,
          isCompleted: false
        },
      ],
      status: 'open', // 'open' or 'closed'
      createdAt: Date.now()
    },
    {
      name: 'WorkStation',
      items: [
        {
          name: 'Monitor 27" Vertical',
          quantity: 1,
          isCompleted: false
        },
        {
          name: 'Alfombrilla ratón XL',
          quantity: 1,
          isCompleted: false
        },
      ],
      status: 'open', // 'open' or 'closed'
      createdAt: Date.now()
    },

  ]
}