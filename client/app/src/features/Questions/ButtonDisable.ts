import { useEffect, useState } from 'react'

const useButtonDisable = (id:number): {buttonIsDisabled:boolean, buttonDisable: () => void } => {
  const [isDisabled, setIsDisabled] = useState(false)
  const disable = (): void => {
      localStorage.setItem(`${id}`, 'disabled')
      setIsDisabled(true)
  }

  return {
    buttonIsDisabled: isDisabled,
    buttonDisable: disable
  }
}

export default useButtonDisable
