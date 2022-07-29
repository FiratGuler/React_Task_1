import { createContext, useContext, useState } from "react";


const Context = createContext()



const Provider = ({ children }) => {
    
    const [show, setShow] = useState(true)

    const [Content,setContent] = useState({
        icerik: [
            {
                "id": 1,
                "name": "The Matrix 3",
                "rating": "8.1",
                "siteURL": "www.ornek.com"
            },
            {
                "id": 2,
                "name": "The Matrix 2",
                "rating": "5.1",
                "siteURL": "www.ornek.com"
            }
        ]}
    )





    const data = {
        show,
        setShow,
        Content,
        setContent
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )

}

export const useSite = () => useContext(Context)

export default Provider