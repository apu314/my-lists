import { List as IList } from '../../../interfaces'

import { FC, Fragment } from 'react'
import { Grid } from '@nextui-org/react'

import { HorizontalLine } from '../'
import { Spinner } from '../spinner'
import { ListItem } from './ListItem'

interface Props {
  list: IList
}

export const List: FC<Props> = ({ list }) => {
  return (
    <>
      <Grid.Container gap={1} direction="row" justify="flex-start">
        <Grid direction="column" xs={12}>
          {!list ? (
            <Spinner />
          ) : (
            list.items.map((item, position) => (
              <Fragment key={item._id}>
                <ListItem item={item} />

                {position !== list.items.length - 1 && <HorizontalLine />}
              </Fragment>
            ))
          )}
        </Grid>
      </Grid.Container>
    </>
  )
}
