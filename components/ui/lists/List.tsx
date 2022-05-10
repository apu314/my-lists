import { List as IList } from '../../../interfaces'

import { FC, Fragment, useContext, useEffect, useState } from 'react'
import { Checkbox, Grid, Input, Text } from '@nextui-org/react'

import { HorizontalLine } from '../'
import { ListsContext } from '../../../context/lists/ListsContext'
import { Spinner } from '../spinner'

interface Props {
  list: IList
}

export const List: FC<Props> = ({ list }) => {
  const { mutateList, mutateListItem } = useContext(ListsContext)

  const [selected, setSelected] = useState<string[]>([])

  const handleCheckboxChange = (isSelected: boolean, _id: string, position: number): void => {
    const selectedItems = selected.map((value, i) => {
      if (i === position) return value.length > 0 ? '' : _id
      return value
    })
    setSelected(selectedItems)

    // const listItem = list.items[position]
    // listItem.isCompleted = isSelected
    const updatedListItems = list.items.map((listItem) => {
      if (listItem._id !== _id) return listItem
      return {
        ...listItem,
        isCompleted: isSelected,
      }
    })

    const updatedList: IList = {
      ...list,
      items: updatedListItems,
    }

    // mutateListItem(list._id, listItem)
    mutateList(updatedList)
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
            <Spinner />
          ) : (
            <Checkbox.Group label="" aria-label={list.name} value={selected} onChange={setSelected}>
              {list.items.map((item, position) => (
                <>
                  <Grid
                    key={item._id}
                    css={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Checkbox
                      value={item._id}
                      label={undefined}
                      checked={item.isCompleted}
                      css={{
                        // margin: '0',
                        marginRight: '0.5rem',
                      }}
                      onChange={(isSelected: boolean) => handleCheckboxChange(isSelected, item._id, position)}
                    ></Checkbox>
                    <div
                      style={{
                        display: 'flex',
                        flex: '1',
                      }}
                    >
                      <Text
                        as={'span'}
                        contentEditable
                        css={{
                          alignSelf: 'center',
                          padding: '.45rem .85rem',
                          fontSize: '1.15rem',
                          outline: 'none',
                        }}
                      >
                        {item.quantity}
                      </Text>
                      <span
                        style={{
                          alignSelf: 'center',
                          padding: '.45rem 0',
                          fontSize: '1.25rem',
                        }}
                      >{` x `}</span>
                      <Text
                        as={'span'}
                        contentEditable
                        css={{
                          alignSelf: 'center',
                          padding: '.45rem .85rem',
                          fontSize: '1.15rem',
                          outline: 'none',
                        }}
                      >
                        {item.name}
                      </Text>
                    </div>
                  </Grid>

                  {position !== list.items.length - 1 && <HorizontalLine />}
                </>
              ))}
            </Checkbox.Group>
          )}
        </Grid>
      </Grid.Container>
    </>
  )
}
