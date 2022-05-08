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
      name: 'Test list 1',
      items: [
        {
          name: 'Test list item 1',
          quantity: 2,
          isCompleted: true,
        },
        {
          name: 'Test list item 2',
          quantity: 1,
          isCompleted: false,
        },
        {
          name: 'Test list item 3',
          quantity: 2,
          isCompleted: true,
        },
      ],
      status: 'open',
      createdAt: Date.now(),
    },
    {
      name: 'Test list 2',
      items: [
        {
          name: 'Test list item 1',
          quantity: 1,
          isCompleted: false,
        },
        {
          name: 'Test list item 2',
          quantity: 1,
          isCompleted: false,
        },
        {
          name: 'Test list item 3',
          quantity: 1,
          isCompleted: true,
        },
      ],
      status: 'open',
      createdAt: Date.now(),
    },
    {
      name: 'Test list 3',
      items: [
        {
          name: 'Test list item 1',
          quantity: 1,
          isCompleted: false,
        },
      ],
      status: 'open',
      createdAt: Date.now(),
    },
    {
      name: 'Test list 4',
      items: [
        {
          name: 'Test list item 1',
          quantity: 2,
          isCompleted: false,
        },
        {
          name: 'Test list item 2',
          quantity: 1,
          isCompleted: true,
        },
        {
          name: 'Test list item 3',
          quantity: 4,
          isCompleted: false,
        },
        {
          name: 'Test list item 4',
          quantity: 1,
          isCompleted: false,
        },
        {
          name: 'Test list item 5',
          quantity: 6,
          isCompleted: false,
        },
        {
          name: 'Test list item 6',
          quantity: 1,
          isCompleted: false,
        },
        {
          name: 'Test list item 7',
          quantity: 4,
          isCompleted: false,
        },
        {
          name: 'Test list item 8',
          quantity: 1,
          isCompleted: false,
        },
        {
          name: 'Test list item 9',
          quantity: 1,
          isCompleted: false,
        },
      ],
      status: 'open',
      createdAt: Date.now(),
    },
  ],
}
