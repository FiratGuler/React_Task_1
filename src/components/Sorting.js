
import { useSite } from "../Context/siteContext"
export default function Sorting() {




    const {setSorted } = useSite()
   
    const SortedChange = (e) => {
        console.log(e.target.value)
        setSorted(e.target.value)
    
    }
    return (
        <>
            <select className="custom-select" onChange={SortedChange}>
                <option>Order By</option>
                <option value="Most">Most Voted</option>
                <option value="Less">Less Voted</option>
            </select>
        </>
    )
} 