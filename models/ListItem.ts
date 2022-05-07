import mongoose, { Model, Schema } from 'mongoose'
import { List } from '../interfaces'

export interface IListItem extends List {}

export const listItemSchema = new Schema({
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
})

const ListItemModel: Model<IListItem> = mongoose.models.ListItem || mongoose.model('ListItem', listItemSchema)

export default ListItemModel
