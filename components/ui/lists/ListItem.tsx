import type { IListItem } from 'interfaces'

import { ChangeEvent, FC, useContext, useEffect, useState } from 'react'

import { Checkbox, Grid } from '@nextui-org/react'

import { ListsContext } from '../../../context/lists/ListsContext'
import useDebounce from '../../../hooks/useDebounce'

interface Props {
  index: number
  item: IListItem
  handleInputChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

// export const ListItem: FC<Props> = ({ index, update, item }) => {
export const ListItem: FC<Props> = ({ index, item }) => {
  const { updateActiveListItem, activeList } = useContext(ListsContext)

  const [listItem, setListItem] = useState<IListItem>(item)
  const debouncedListItem = useDebounce(listItem, 1500)

  // const [isSelected, setIsSelected] = useState<boolean>(item.isCompleted)
  // const debouncedIsCompleted = useDebounce(isSelected, 500)
  // const [quantity, setQuantity] = useState(item.quantity)
  // const [name, setName] = useState(item.name)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement> | boolean) => {
    console.log('---> CHANGED <---', e)
    if (typeof e === 'boolean') {
      // Checkbox
      // setIsSelected(e)
      setListItem({
        ...listItem,
        isCompleted: e,
      })
    } else {
      // Other inputs
      const value = e.currentTarget.value
      setListItem({
        ...listItem,
        [e.currentTarget.name]: value,
      })
    }

    // debounce(handleSubmit((data) => update(index, data)))
  }

  // const updateList = useCallback(() => {
  //   const updatedList: List = {
  //     ...activeList!,
  //     items: activeList!.items.map((item, i) => (item._id === listItem._id ? listItem : item)),
  //   }
  //   console.log('[ListItem] updatedList --> ', updatedList)

  //   mutateList(updatedList)
  // }, [activeList, listItem, mutateList])

  // const updateList = useCallback((listItem: IListItem) => {
  //   const updatedList: List = {
  //     ...activeList!,
  //     items: activeList!.items.map((_item, i) => (_item._id === item._id ? listItem : item)),
  //   }
  //   // console.log('[ListItem] updatedList --> ', updatedList)

  //   mutateList(updatedList)
  // }, [activeList, item, mutateList])

  // useEffect(() => {
  //   if (debouncedListItem) {
  //     updateList()
  //   }
  // }, [debouncedListItem])

  useEffect(() => {
    updateActiveListItem(debouncedListItem)
  }, [debouncedListItem, updateActiveListItem])

  // useEffect(() => {
  //   updateActiveListItem({
  //     ...item,
  //     isCompleted: debouncedIsCompleted,
  //   })
  // }, [debouncedIsCompleted, item, updateActiveListItem])

  return (
    <>
      <Grid
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <>
          <Checkbox
            aria-label={`list item checkbox`}
            value={listItem._id}
            label={undefined}
            isSelected={listItem.isCompleted}
            css={{
              marginRight: '0.5rem',
            }}
            onChange={handleInputChange}
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'min-content min-content 1fr',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                alignSelf: 'center',
                position: 'relative',
                height: '100%',
                minWidth: '1em',
                width: 'min-content',
                padding: '.45rem .85rem',
              }}
            >
              <input
                aria-label="quantity"
                style={{
                  position: 'absolute',
                  left: '0',
                  width: '100%',
                  appearance: 'none',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.15rem',
                  outline: 'none',
                }}
                name="quantity"
                value={listItem.quantity}
                onChange={handleInputChange}
              />
            </div>

            <span
              style={{
                alignSelf: 'center',
                marginRight: '.85rem',
                padding: '.45rem 0',
                fontSize: '1.25rem',
              }}
            >{` x `}</span>

            <div
              style={{
                alignSelf: 'center',
                position: 'relative',
                height: '100%',
                minWidth: '1em',
                padding: '.45rem 0',
              }}
            >
              <input
                aria-label="name"
                style={{
                  position: 'absolute',
                  left: '0',
                  width: '100%',
                  appearance: 'none',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.15rem',
                  outline: 'none',
                }}
                name="name"
                value={listItem.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </>

        <div
          style={{
            width: '100%',
          }}
        >
          <p>isSelected: {`${listItem.isCompleted}`}</p>
          <p>debouncedIsCompleted: {`${debouncedListItem.isCompleted}`}</p>
          <p>quantity: {`${listItem.quantity}`}</p>
          <p>debouncedQuantity: {`${debouncedListItem.quantity}`}</p>
          <p>name: {`${listItem.name}`}</p>
          <p>debouncedName: {`${debouncedListItem.name}`}</p>
        </div>
      </Grid>
    </>
  )
}
