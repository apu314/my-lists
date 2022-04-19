import { ShoppingList as IList } from '../../../interfaces'
import { Card, Grid, Modal, Text, useTheme } from "@nextui-org/react"
import { FC, useContext, useState } from "react"

import { ListsContext } from "../../../context/lists"

import { List } from "./"
import { HorizontalLine } from '../'

export interface Props {

}

export const Lists: FC<Props> = () => {

  const { theme } = useTheme()

  const { lists } = useContext(ListsContext)

  const [selectedList, setSelectedList] = useState<IList | null>(null)

  const handleClickButton = (list: IList) => setSelectedList(list)
  const handleCloseModal = () => setSelectedList(null)


  return (
    <>
      <Grid.Container gap={1} justify="flex-start">
        {
          lists.map(list => (
            <Grid
              key={list.name}
              direction="column"
              xs={6}
              sm={4}
            >
              <Card
                hoverable
                onClick={() => handleClickButton(list)}
                css={{
                  cursor: 'pointer'
                }}
                role="button"
              >
                {list.name}
              </Card>
            </Grid>
          ))
        }
      </Grid.Container>


      <Modal
        open={!!selectedList}
        onClose={handleCloseModal}
        closeButton
        fullScreen
        css={{
          borderRadius: 0,
          paddingTop: 0,
          backgroundColor: theme?.colors.background.value
        }}
      >
        <Modal.Header
          css={{
            backgroundColor: '#111111',
          }}
        >
          <Text
            id="modal-title"
            size={18}
            b
            color="$white"
          >
            {selectedList ? selectedList.name : ''}
          </Text>
        </Modal.Header>
        
        {/* <HorizontalLine /> */}

        <Modal.Body>
          {selectedList && <List list={selectedList} />}
        </Modal.Body>
      </Modal>
    </>
  )
}
