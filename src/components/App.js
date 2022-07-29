import SiteContext from "../Context/siteContext"
import Home from "./Home"
import Navbar from "./NavBar"


export default function App() {

    return (
        <SiteContext>
            <Navbar />
            <Home />
        </SiteContext>

    )
}