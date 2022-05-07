import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { List } from '../../../interfaces'
import { ListItemModel, ListModel } from '../../../models'

type Data = { message: string } | List[] | List | null

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'POST':
      return createList(req, res)

    case 'GET':
      return getAllLists(req, res)

    default:
      // Method Not Allowed
      res.status(405).json({ message: 'Method Not Allowed' })
  }
}

const createList = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // const {items, ...rest} = req.body as List
  const { items, ...rest } = req.body as List

  try {
    // list.items = items.map(item => new ListItemModel(item))
    // const list = new ListModel(rest)
    // list.items = [...items]
    const list = new ListModel(req.body)
    db.connect()
    // const list = await ListModel.create(body)
    const savedList = await list.save()
    db.disconnect()

    return res.status(200).json(savedList)
  } catch (error) {
    // return res.status(500).json(error)
    console.log(error)
    if (error instanceof ErrorResponse) {
      return res.status(500).json({ message: error.message })
    }
  }
}

const getAllLists = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    await db.connect()
    const lists = await ListModel.find<List>()
    await db.disconnect()

    return res.status(200).json(lists)
  } catch (error: any) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}

// ERRORS
export class ErrorResponse {
  constructor(public message: string, public status: number) {}
}
