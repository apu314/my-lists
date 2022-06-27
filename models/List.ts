import mongoose, { Model, Schema } from 'mongoose'
import { List } from '../interfaces'

export interface IList extends List {}

const listSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      isCompleted: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  ],
  status: {
    type: String,
    enum: {
      values: ['open', 'closed'],
      message: 'Status: {VALUE}, is not a valid status. Must be either open or closed',
    },
    required: true,
    default: 'open',
  },
  createdAt: {
    type: Number,
    required: true,
    default: Date.now(),
  },
})

const ListModel: Model<IList> = mongoose.models.List || mongoose.model('List', listSchema)

export default ListModel
