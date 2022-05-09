import { List, ListItem } from 'interfaces'
import type { NextApiRequest, NextApiResponse } from 'next'

import { db } from '../../../database'
import { ListModel } from '../../../models'

type Data = { message: string } | List[] | List | any

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getListsByStatus(req, res)

    case 'PUT':
      return updateList(req, res)

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

const updateList = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query as { id: string }
  if (!id) return res.status(400).json({ message: 'Bad Request. Id not valid' })

  const body = req.body as ListItem

  try {
    const { _id, ...dataToUpdate } = body
    console.log('dataToUpdate --> ', dataToUpdate)
    console.log('_id --> ', _id)

    db.connect()
    const updatedList = await ListModel.findOneAndUpdate(
      {
        _id: id,
        items: {
          $elemMatch: {
            _id: _id,
          },
        },
      },
      {
        $set: {
          'items.$.name': dataToUpdate.name,
          'items.$.quantity': dataToUpdate.quantity,
          'items.$.isCompleted': dataToUpdate.isCompleted,
        },
      },
      {
        new: true,
        upsert: false,
      }
    )

    db.disconnect()

    if (!updatedList) return res.status(404).json({ message: 'Not Found' })

    return res.status(200).json(updatedList.toJSON())
  } catch (error) {
    return res.status(500).json(error)
  }
}
