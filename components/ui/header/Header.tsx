import { FC } from 'react'
import NextLink from 'next/link'

import { Image, Link, Spacer, Switch, SwitchEvent, Text, useTheme } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'

export interface Props {}

export const Header: FC<Props> = () => {
  const { isDark, type, theme } = useTheme()
  const { setTheme } = useNextTheme()

  const handleChangeTheme = (e: SwitchEvent) => setTheme(e.target.checked ? 'dark' : 'light')

  return (
    <div
      style={{
        backgroundColor: theme?.colors.gray900.value,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        padding: '0 20px',
        width: '100%',
      }}
    >
      <NextLink href="/" passHref>
        <Link
          style={{
            textDecoration: 'none',
            color: theme?.colors.gray100.value,
            fontSize: '1.5rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png`}
            alt="Logo"
            width={70}
            height={70}
          /> */}

          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
            }}
          >
            <Text color="white" h1>
              MyLists
            </Text>
          </div>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <Switch checked={isDark} onChange={handleChangeTheme} />
    </div>
  )
}
