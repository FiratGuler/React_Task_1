import { useSite } from "../Context/siteContext"
import Contents from "./Content"
import Sorting from "./Sorting"
import AddNewContent from "./AddNewContent"

export default function Home() {

    const { show, setShow } = useSite()


    


    return (
        <>
            {( show && 
            <button onClick={()=>{setShow(!show)}} className="test"><b>+</b>Submit A Link</button> )
            ||
             <button onClick={()=>{setShow(!show)}}>Return</button>}

            {(show &&
                <div>
                    <Sorting/>
                    <Contents />
                </div>)
                ||
                <div>
                    <AddNewContent/>
                </div>
            }
        </>
    )


}