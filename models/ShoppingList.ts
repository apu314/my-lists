import mongoose, { Model, Schema } from 'mongoose'
import { ShoppingList } from '../interfaces'

export interface IShoppingList extends ShoppingList {}

const shoppingListSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  items: [
    {
      name: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      isCompleted: {
        type: Boolean,
        required: true,
        default: false
      }
    }
  ],
  status: {
    type: String,
    enum: {
      values: ['open', 'closed'],
      message: 'Status: {VALUE}, is not a valid status. Must be either open or closed'
    },
    required: true,
    default: 'open'
  },
  createdAt: {
    type: Number,
    required: true,
    default: Date.now()
  }
})

const ShoppingListModel: Model<IShoppingList> = mongoose.models.ShoppingList || mongoose.model('ShoppingList', shoppingListSchema)

export default ShoppingListModel
