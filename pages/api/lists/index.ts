import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { ShoppingList } from '../../../interfaces';
import { ShoppingListModel } from '../../../models';

type Data =
  | { message: string }
  | ShoppingList[]
  | ShoppingList

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch (req.method) {
    case 'GET':
      getAllLists(req, res)
      break;
  
    default:
      // Method Not Allowed
      res.status(405).end()
  }
}


const getAllLists = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect()
  const lists = await ShoppingListModel.find<ShoppingList>()
  await db.disconnect()

  return res.status(200).json(lists)
}
