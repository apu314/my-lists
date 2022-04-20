import { List as IList } from "../../../interfaces"

import { FC, Fragment, useEffect, useState } from "react"
import { Checkbox, Grid } from '@nextui-org/react'

import { HorizontalLine } from "../";


interface Props {
  list: IList
}

export const List: FC<Props> = ({ list }) => {
  
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    setSelected(list.items.map(item => item.isCompleted ? item.name : ''))
  }, [list])


  return (
    <>
      <Grid.Container gap={1} direction="row" justify="flex-start">
        <Grid
          direction="column"
          xs={12}
        >
          <Checkbox.Group
            label=""
            aria-label={list.name}
            value={selected}
            onChange={setSelected}
          >
            {
              list.items.map((item, index) => (
                <Fragment key={item.name}>

                  <Checkbox
                    // key={item.name}
                    value={item.name}
                    checked={item.isCompleted}
                    css={{
                      margin: '0 !important',
                      minHeight: 'calc(2 * var(--nextui-space-9))'
                    }}
                  >{item.name}</Checkbox>
                  
                  {index !== list.items.length - 1 && <HorizontalLine />}

                </Fragment>
              ))
            }
          </Checkbox.Group>
        </Grid>
      </Grid.Container>
    </>
  )
}


