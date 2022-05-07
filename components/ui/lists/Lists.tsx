import { List as IList } from '../../../interfaces'
import { Card, Grid, Modal, Text, useTheme } from '@nextui-org/react'
import { FC, Suspense, useContext, useState } from 'react'

import { ListsContext } from '../../../context/lists'

import { List } from './'
import { HorizontalLine } from '../'
import { Spinner } from '../spinner'

export interface Props {}

export const Lists: FC<Props> = () => {
  const { theme } = useTheme()

  const { lists, isLoading, activeList, toggleActiveList } = useContext(ListsContext)

  const handleClickButton = (list: IList) => toggleActiveList(list)
  const handleCloseModal = () => toggleActiveList()

  return (
    <>
      <Grid.Container gap={1} justify={isLoading ? 'center' : 'flex-start'}>
        {isLoading && (
          <Grid>
            <Spinner />
          </Grid>
        )}
        <Grid xs={12} justify="flex-start" css={{ flexWrap: 'wrap' }}>
          {lists.map((list) => (
            <Grid key={list.name} direction="column" xs={6} sm={4}>
              <Card
                hoverable
                onClick={() => handleClickButton(list)}
                css={{
                  cursor: 'pointer',
                }}
                role="button"
              >
                {list.name}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid.Container>

      <Modal
        open={!!activeList}
        onClose={handleCloseModal}
        closeButton
        fullScreen
        css={{
          borderRadius: 0,
          paddingTop: 0,
          backgroundColor: theme?.colors.background.value,
        }}
      >
        <Modal.Header
          css={{
            backgroundColor: '#111111',
          }}
        >
          <Text id="modal-title" size={18} b color="$white">
            {activeList ? activeList.name : ''}
          </Text>
        </Modal.Header>

        {/* <HorizontalLine /> */}

        <Modal.Body>{activeList && <List list={activeList} />}</Modal.Body>
      </Modal>
    </>
  )
}
