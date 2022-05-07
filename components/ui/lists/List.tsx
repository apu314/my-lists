import { List as IList } from '../../../interfaces'

import { FC, Fragment, useContext, useEffect, useState } from 'react'
import { Checkbox, Grid } from '@nextui-org/react'

import { HorizontalLine } from '../'
import { ListsContext } from '../../../context/lists/ListsContext'

interface Props {
  list: IList
}

export const List: FC<Props> = ({ list }) => {
  const { mutateListItem } = useContext(ListsContext)

  const [selected, setSelected] = useState<string[]>([])

  const handleCheckboxChange = (isSelected: boolean, _id: string, position: number): void => {
    const selectedItems = selected.map((value, i) => {
      if (i === position) return value.length > 0 ? '' : _id
      return value
    })
    setSelected(selectedItems)

    const listItem = list.items[position]

    listItem.isCompleted = isSelected

    mutateListItem(list._id, listItem)
  }

  useEffect(() => {
    const selectedItems = list.items.map((item, i) => (item.isCompleted ? item._id : ''))
    setSelected(selectedItems)
  }, [])

  return (
    <>
      <Grid.Container gap={1} direction="row" justify="flex-start">
        <Grid direction="column" xs={12}>
          {!list ? (
            <>Loading list...</>
          ) : (
            <Checkbox.Group label="" aria-label={list.name} value={selected} onChange={setSelected}>
              {list.items.map((item, position) => (
                <Fragment key={item._id}>
                  <Checkbox
                    value={item._id}
                    checked={item.isCompleted}
                    css={{
                      margin: '0 !important',
                      minHeight: 'calc(2 * var(--nextui-space-9))',
                    }}
                    onChange={(isSelected: boolean) => handleCheckboxChange(isSelected, item._id, position)}
                  >
                    {item.quantity} x {item.name}
                  </Checkbox>

                  {position !== list.items.length - 1 && <HorizontalLine />}
                </Fragment>
              ))}
            </Checkbox.Group>
          )}
        </Grid>
      </Grid.Container>
    </>
  )
}
