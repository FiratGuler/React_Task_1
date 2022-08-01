
import { useSite } from "../Context/siteContext"
export default function Sorting() {




    const {Content,setContent } = useSite()
   
    const SortedChange = (e) => {
        const Options ={
            "Most": [...Content].sort((a, b) => (a.rating < b.rating ? 1 : -1)),
            "Less": [...Content].sort((a, b) => (a.rating < b.rating ? -1 : 1))
        }
        setContent(Options[e.target.value])
    
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