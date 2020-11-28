import React from 'react'
import MobileDetect from 'mobile-detect'

const useDevice = () => {
  const md = new MobileDetect(navigator.userAgent)
  return {
    isMobile: !!md.mobile(),
  }
}

export default useDevice
