import { createContext, useContext} from "react";

const Context = createContext()

const Provider = ({ children }) => {

    const data = {
      
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )

}

export const useAuth = () => useContext(Context)

export default Provider