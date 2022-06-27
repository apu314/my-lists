import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { List } from '../../../interfaces'
import { ListModel } from '../../../models'

type Data = { message: string } | List[] | List | null

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'POST':
      return createList(req, res)

    case 'GET':
      return getAllLists(req, res)

    default:
      res.status(405).json({ message: 'Method Not Allowed' })
  }
}

const createList = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const list = req.body as List

  try {
    const newList = new ListModel(list)

    await db.connect()
    const savedList = await newList.save()
    await db.disconnect()

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
