import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { List } from '../../../interfaces'
import { ListModel } from '../../../models'

type Data = { message: string } | List[] | List | null

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      getAllLists(req, res)
      break

    case 'PUT':
      updateList(req, res)
      break

    default:
      // Method Not Allowed
      res.status(405).end()
  }
}

const getAllLists = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    await db.connect()
    const lists = await ListModel.find<List>()
    await db.disconnect()

    return res.status(200).json(lists)
  } catch (error) {
    console.log(error)
    // return res.status(500).json({ message: error.message })
  }
}

const updateList = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect()
  const updatedList = await ListModel.findByIdAndUpdate<List>(
    req.query.id,
    req.body
  )
  await db.disconnect()

  return res.status(200).json(updatedList)
}
