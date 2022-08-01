import { createContext, useContext, useState } from "react";


const Context = createContext()



const Provider = ({ children }) => {

    const [Content, setContent] = useState(
         [
            {
                "id": 1,
                "name": "The Matrix 3",
                "rating": 8,
                "url": "www.ornek.com"
            },
            {
                "id": 2,
                "name": "The Matrix 2",
                "rating": 2.1,
                "url": "www.ornek.com"
            },
            {
                "id": 3,
                "name": "The Matrix 4",
                "rating": 5.1,
                "url": "www.ornek.com"
            }
        ]
    
    )
   
    const [show, setShow] = useState(true)

    const data = {
        show,
        setShow,
        Content,
        setContent,
       

        // Sorted,
        // setSorted,

    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )

}

export const useSite = () => useContext(Context)

export default Provider