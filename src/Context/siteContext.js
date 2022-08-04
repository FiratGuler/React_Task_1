import { createContext, useContext, useState } from "react";


const Context = createContext()



const Provider = ({ children }) => {

    const [Content, setContent] = useState(
         [
            {
                id: 1,
                name: "The Matrix 3",
                rating: 8,
                url: "www.ornek.com"
            },
            {
                id: 2,
                name: "Cars",
                rating: 2,
                url: "www.ornek.com"
            },
            {
                id: 3,
                name: "Who Am I",
                rating: 5,
                url: "www.ornek.com"
            }
        ]
    
    )
    const [SortedInf,setSortedInf]=useState(false)
    
    const [show, setShow] = useState(true)

    const SortedContent = Content.sort(SortedInf === true ? ((a, b) => (a.rating - b.rating)) : (a, b) => (b.rating - a.rating))


    const data = {
        show,
        setShow,
        Content,
        setContent,
        SortedInf,
        setSortedInf,
        SortedContent
        
       
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )

}

export const useSite = () => useContext(Context)

export default Provider