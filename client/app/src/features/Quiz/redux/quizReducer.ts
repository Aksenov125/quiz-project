
import type { StateThemes } from "../type"
import type { ActionTheme } from "./action"

const init = {themes:[]}


const themesReducer=(state:StateThemes=init,action:ActionTheme):StateThemes=>{
    switch (action.type) {
        case 'Theme/Init':
        
      return {
        ...state,
        themes:action.payload

       
      }
    
        default:
            return state
    }

}
export default themesReducer
