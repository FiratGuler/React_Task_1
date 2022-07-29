import Content from "./Content";
import NavBar from "./NavBar";
import SubmitSwitcher from "./SubmıtSwitcher";
import AddNewContent from "./AddNewContent";
import { MainContext } from "./context";
import React from "react";




class App extends React.Component {

    state = {

        content: [
            {
                "id": 1,
                "name": "The Matrix 3",
                "rating": "8.1",
                "siteURL": "www.ornek.com"
            },
            {
                "id": 2,
                "name": "The Matrix 2",
                "rating": "5.1",
                "siteURL": "www.ornek.com"
            }
        ],

    }
    deneme = this.state.content

    data = {

    }
    render() {

        return (

            <MainContext.Provider value={this.data}>
                <NavBar />
                <SubmitSwitcher />
                <Content />

                <AddNewContent />
            </MainContext.Provider>
        )
    }
}
export default App