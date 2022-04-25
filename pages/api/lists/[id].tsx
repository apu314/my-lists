import { List } from 'interfaces'
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { ListModel } from '../../../models'

type Data = { message: string } | List[] | List | any

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      getListsByStatus(req, res)
      break

    case 'PATCH':
      updateList(req, res)
      break

    default:
      return res.status(405).json({ message: 'Method Not Allowed' })
  }
}

const getListsByStatus = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.query)
  const { status } = req.query

  switch (status) {
    case 'open':
      const openLists = await ListModel.find({ status: 'open' })
      return res.status(200).json(openLists)

    case 'closed':
      const closedLists = await ListModel.find({ status: 'closed' })
      return res.status(200).json(closedLists)

    default:
      return res.status(400).json({ message: 'Bad Request. Status not valid' })
  }
}

const updateList = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const { body } = req

  if (!id) {
    return res.status(400).json({ message: 'Bad Request. Id not valid' })
  }

  try {
    db.connect()
    const list = ListModel.findByIdAndUpdate(id, body)
    db.disconnect()

    if (!list) {
      return res.status(404).json({ message: 'Not Found' })
    }

    // Update
  } catch (error) {
    return res.status(500).json(error)
  }
}
