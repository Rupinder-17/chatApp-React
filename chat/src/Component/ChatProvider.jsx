import  {createContext} from 'react'
import { useRegisterApi } from '../Hooks/useRegister'

 export const ChatContent = createContext()
export const ChatProvider = ({children}) => {
    const [state, registerApi] = useRegisterApi()
    console.log("state", state);
    const chatDisplay = {
        state,
        registerApi
    }
    return( <ChatContent.Provider value={chatDisplay} >{children}</ChatContent.Provider>)
    
  
}
