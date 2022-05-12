import type { List, ListItem as IListItem } from 'interfaces'

import { ChangeEvent, FC, useContext, useEffect, useState } from 'react'
import { Checkbox, Grid } from '@nextui-org/react'

import { ListsContext } from '../../../context/lists/ListsContext'

interface Props {
  item: IListItem
}

export const ListItem: FC<Props> = ({ item }) => {
  const { mutateList, activeList } = useContext(ListsContext)

  const [listItem, setListItem] = useState<IListItem>(item)
  const [isSelected, setIsSelected] = useState<boolean>(item.isCompleted)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement> | boolean) => {
    if (typeof e === 'boolean') {
      console.log('hola!!!')
      setIsSelected(e)
      setListItem({
        ...listItem,
        isCompleted: e,
      })
    } else {
      const value = e.currentTarget.value
      setListItem({
        ...listItem,
        [e.currentTarget.name]: value,
      })
    }

    const updatedList: List = {
      ...activeList!,
      items: activeList!.items.map((item, i) => (item._id === listItem._id ? listItem : item)),
    }

    mutateList(updatedList)
  }

  return (
    <>
      <Grid
        key={item._id}
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
            isSelected={isSelected}
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
                onChange={handleInputChange}
                name="quantity"
                value={listItem.quantity}
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
      </Grid>
    </>
  )
}
