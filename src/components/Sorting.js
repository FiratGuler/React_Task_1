
import { useSite } from "../Context/siteContext"

export default function Sorting() {




    const { Content, setContent,SortedInf,setSortedInf } = useSite()
    
    
    

    const SortedChange = (e) => {
        const Options = {
            "OrderBy":[...Content].sort((a, b) => (a.rating < b.rating ? 1 : -1)),
            "Most": [...Content].sort((a, b) => (a.rating < b.rating ? 1 : -1)),
            "Less": setSortedInf(!SortedInf)
            
        }
        
        
        setContent(Options[e.target.value])

    }
    return (
        <>
            <select className="custom-select" onChange={SortedChange}>
                <option value="OrderBy">Order By</option>
                <option value="Most">Most Voted</option>
                <option value="Less">Less Voted</option>
            </select>

        </>
    )
}
