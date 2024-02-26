import {useState } from 'react'

const useButtonDisable = (id:string): {buttonIsDisabled:boolean, buttonDisable: () => void } => {
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
