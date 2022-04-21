interface SeedData {
  Lists: List[]
}

export interface List {
  name: string
  items: ListItem[]
  status: string
  createdAt: number
}

export interface ListItem {
  name: string
  quantity: number
  isCompleted: boolean
}

export const seedData: SeedData = {
  Lists: [
    {
      name: 'Lista compra Casa',
      items: [
        {
          name: 'Agua 8 Litros',
          quantity: 2,
          isCompleted: true,
        },
        {
          name: 'Galletas Belvita',
          quantity: 1,
          isCompleted: false,
        },
        {
          name: 'Fuet',
          quantity: 2,
          isCompleted: true,
        },
      ],
      status: 'open', // 'open' or 'closed'
      createdAt: Date.now(),
    },
    {
      name: 'Libros',
      items: [
        {
          name: 'El líder que no tenía cargo - Robin Sharma',
          quantity: 1,
          isCompleted: true,
        },
      ],
      status: 'open', // 'open' or 'closed'
      createdAt: Date.now(),
    },
    {
      name: 'WorkStation',
      items: [
        {
          name: 'Monitor 27" Vertical',
          quantity: 1,
          isCompleted: false,
        },
        {
          name: 'Alfombrilla ratón XL',
          quantity: 1,
          isCompleted: false,
        },
      ],
      status: 'open', // 'open' or 'closed'
      createdAt: Date.now(),
    },
  ],
}
