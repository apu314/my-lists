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
      name: 'Lista 1',
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
      status: 'open',
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
        {
          name: 'Dock displayLink dual monitor',
          quantity: 1,
          isCompleted: true,
        },
      ],
      status: 'open',
      createdAt: Date.now(),
    },
    {
      name: 'Libros',
      items: [
        {
          name: 'El líder que no tenía cargo - Robin Sharma',
          quantity: 1,
          isCompleted: false,
        },
      ],
      status: 'open',
      createdAt: Date.now(),
    },
    {
      name: 'Compra casa',
      items: [
        {
          name: 'Agua 8 Litros',
          quantity: 2,
          isCompleted: false,
        },
        {
          name: 'Galletas Belvita',
          quantity: 1,
          isCompleted: true,
        },
        {
          name: 'Calabacín',
          quantity: 4,
          isCompleted: false,
        },
        {
          name: 'Cous Cous',
          quantity: 1,
          isCompleted: false,
        },
        {
          name: 'Huevos',
          quantity: 6,
          isCompleted: false,
        },
        {
          name: 'Inés Rosales',
          quantity: 1,
          isCompleted: false,
        },
        {
          name: 'Aguacates',
          quantity: 4,
          isCompleted: false,
        },
        {
          name: 'Bolsas de basura',
          quantity: 1,
          isCompleted: false,
        },
        {
          name: 'Heets teak',
          quantity: 1,
          isCompleted: false,
        },
      ],
      status: 'open',
      createdAt: Date.now(),
    },
  ],
}
