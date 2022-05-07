import { FC } from 'react'

import { useTheme } from '@nextui-org/react'

import styles from './spinner.module.css'

const Spinner: FC = () => {
  const { isDark } = useTheme()

  return (
    <>
      <div className={styles['spinner-box']}>
        {/* <div className={styles['circle-border']}>
          <div className={styles['circle-core']}></div>
        </div> */}

        <div className={styles['three-quarter-spinner']} style={{ borderColor: isDark ? 'white' : '#000000' }}></div>
      </div>

      {/* <svg className={styles.spinner} width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle className={styles.path} fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
      </svg> */}
    </>
  )
}

export default Spinner
