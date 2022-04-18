import { Card, Collapse, Grid, Text } from "@nextui-org/react"
import { FC, useContext } from "react"
import { ListsContext } from "../../../context/lists"

export interface Props {

}

export const Lists: FC<Props> = () => {

  const { lists } = useContext(ListsContext)

  return (
    <>
      <Grid.Container gap={2} direction="row" justify="flex-start">
        <Grid
          direction="column"
          xs={12}
        >
          <Collapse.Group
            splitted
            accordion={false}
          >
            {
              lists.map(list => (
                <Collapse
                  key={list._id}
                  title={list.name}
                  subtitle={`${list.createdAt} - ${list.status}`}
                >
                    {/* <Card
                      hoverable
                    > */}
                      <Text h6>{list.createdAt}</Text>
                    {/* </Card> */}
                </Collapse>
              ))
            }
          </Collapse.Group>
        </Grid>
      </Grid.Container>

    </>
  )
}
