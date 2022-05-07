declare module '*module.css' {
  const styles: {
    [className: string]: string
  }
  export default styles
}

declare global {
  interface Window {
    __WB_DISABLE_DEV_LOGS: boolean
  }
}

export {}
