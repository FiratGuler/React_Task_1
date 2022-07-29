import { createContext, useContext, useState } from "react";


const Context = createContext()



const Provider = ({ children }) => {

    const [Content, setContent] = useState({
        ContentArr: [
            {
                "id": 1,
                "name": "The Matrix 3",
                "rating": "8.1",
                "url": "www.ornek.com"
            },
            {
                "id": 2,
                "name": "The Matrix 2",
                "rating": "5.1",
                "url": "www.ornek.com"
            }
        ]
    }
    )


    const [Sorted, setSorted] = useState(false)
    console.log(Sorted)

    const [show, setShow] = useState(true)

    const data = {
        show,
        setShow,
        Content,
        setContent,
        Sorted,
        setSorted
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )

}

export const useSite = () => useContext(Context)

export default Provider