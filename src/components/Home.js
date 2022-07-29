import { useSite } from "../Context/siteContext"
import Contents from "./Content"
import Sorting from "./Sorting"
import AddNewContent from "./AddNewContent"

export default function Home() {

    const { show, setShow } = useSite()

    const ShowBTN = () => {
        setShow(false)
    }
    const HideBTN = () => {
        setShow(true)
    }


    return (
        <>
            {(show && <button onClick={ShowBTN} className="test"><b>+</b>Submit A Link</button> )|| <button onClick={HideBTN}>Return</button>}

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