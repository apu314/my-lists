import mongoose from "mongoose"

/**
 * 0 --> disconnected
 * 1 --> connected
 * 2 --> connecting
 * 3 --> disconnecting
 */
const mongoConnection = {
  isConnected: 0
}

export const connect = async () => {

  if (mongoConnection.isConnected) {
    console.log('Already connected to mongodb')
    return
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState

    if (mongoConnection.isConnected === 1) {
      console.log('Using existing connection to mongodb')
      return
    }

    await mongoose.disconnect()
  }

  await mongoose.connect(process.env.MONGO_DB_URL || '')

  mongoConnection.isConnected = 1

  console.log('Connected to mongodb: ', process.env.MONGO_DB_URL || '')
}

export const disconnect = async () => {
  // No need to disconnect if we're in development mode
  if (process.env.NODE_ENV === 'development') return

  if (mongoConnection.isConnected === 0) {
    console.log('Not connected to mongodb')
    return
  }

  await mongoose.disconnect()

  mongoConnection.isConnected = 0

  console.log('Disconnected from mongodb')

}
