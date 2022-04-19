import { FC } from "react"
import { useTheme } from "@nextui-org/react"



export const HorizontalLine: FC = () => {

  const { theme } = useTheme()
  
  return (
    <i
      style={{
        border: '0 0 1px 0',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme?.colors.border.value,
        // borderColor: theme?.colors.white.value,
        width: '100%',
        height: '1px',
        margin: '0.5rem 0'
      }}
    />
  )
}