import { Button, Container } from '@nextui-org/react'
import Head from 'next/head'
import { FC, useMemo } from 'react'
import { FaPlus } from 'react-icons/fa'

import { Header } from '../ui/header'

interface Props {
  title?: string
  description?: string
  children: JSX.Element | JSX.Element[]
}

// Used to get images path from rich data meta tags
// const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const MainLayout: FC<Props> = ({ children, title, description }) => {
  const getTitle = useMemo(() => {
    return title ? `${title} - myLists` : 'myLists'
  }, [title])

  const handleCreateList = () => {
    console.log('[handleCreateList] --> Button clicked')
  }

  return (
    <>
      <Head>
        <title>{getTitle}</title>
        <meta name="description" content={description} />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container
        fluid
        gap={0}
        css={{
          marginTop: '1rem',
        }}
      >
        {children}
      </Container>

      <Button
        onClick={handleCreateList}
        css={{
          position: 'fixed',
          right: '1rem',
          bottom: '1rem',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          paddingLeft: '0',
          paddingRight: '0',
        }}
        auto
        color="primary"
        icon={<FaPlus fill="white" size={15} />}
      />
    </>
  )
}
