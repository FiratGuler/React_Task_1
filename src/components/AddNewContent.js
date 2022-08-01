

import {React} from "react";
import serialize from "form-serialize";

import { useSite } from "../Context/siteContext";



export default function NewAddContent() {

    const { setContent, Content} = useSite()



    const HandleFormSubmit = (e) => {
        e.preventDefault()
        const newArr = serialize(e.target, { hash: true });
        const concatArr = Content.concat(newArr)
        console.log(concatArr);
         setContent(concatArr)


    }
   

    return (
        <form onSubmit={HandleFormSubmit}>
            <input type="text" name="name" placeholder="İsim"></input>
            <input type="text" name="url" placeholder="Url"></input>
            <input type="text" name="rating" placeholder="rating"></input>

            <button type="submit">ADD</button>
        </form>
    )

}
