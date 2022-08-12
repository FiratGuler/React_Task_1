import { createContext, useContext, useState } from "react";


const Context = createContext()



const Provider = ({ children }) => {

    const [Content, setContent] = useState(
         [
            {
                id: 1,
                name: "The Matrix 3",
                rating: 8,
                url: "www.ornek.com",
                clicked:false
            },
            {
                id: 2,
                name: "Cars",
                rating: 2,
                url: "www.ornek.com",
                clicked:false
            },
            {
                id: 3,
                name: "Who Am I",
                rating: 5,
                url: "www.ornek.com",
                clicked:false
            }
        ]
    
    )
    const [SortedInf,setSortedInf]=useState(false)
    
    const [show, setShow] = useState(true)

    const SortedContent = Content.sort(SortedInf === true ? ((a, b) => (a.rating - b.rating)) : (a, b) => (b.rating - a.rating))
   
    const [open, setOpen] = useState();

    const data = {
        show,
        setShow,
        Content,
        setContent,
        SortedInf,
        setSortedInf,
        SortedContent,
        open, setOpen
        
       
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )

}

export const useSite = () => useContext(Context)

export default Provider