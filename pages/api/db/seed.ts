// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { seedData } from '../../../database/seed-data';
import { ListModel } from '../../../models'

type Data = {
  message: string;
  error?: any;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch (req.method) {
    case 'POST':
      return seed(req, res)
      
    default:
      return res.status(400).json({ message: 'The endpoint does not exist' })
    
  }   
}

const seed = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  // console.log('req --> ', req)
  const clientHost = req.headers.host

  const dbApiUser = req.headers['db-api-user']
  const dbApiPassword = req.headers['db-api-password']

  // return res.status(200).json({
  //   message: `[DEVELOPMENT] Client host: ${clientHost}`,
  // })

  if (
    dbApiUser !== process.env.DB_API_USER
    && dbApiPassword !== process.env.DB_API_PASSWORD
    && clientHost !== 'localhost:3000'
  ) {
    return res.status(401).json({ message: 'Unauthorized' })
  }


  try {
    await db.connect()
    await ListModel.deleteMany() // Delete all entries
    await ListModel.insertMany(seedData.Lists)
    await db.disconnect()    
    
    res.status(200).json({
      message: 'Database seeded successfully'
    })

  } catch (error) {
    return res.status(500).json({
      message: 'Error seeding database',
      error
    })
  }
    
}
