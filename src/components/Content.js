import React from 'react';
import { useSite } from '../Context/siteContext';


export default function Contents() {

    const {Content} = useSite()

    // const SubmitHandle = (e) => {
    //     e.preventDefault()
    // }



    return (
        <>
            {Content.icerik.map((icerik,index)=>(
                <div key={index} style={{border:'1px solid red',width:150 , margin: 10}}>
                    <div>ADI :{icerik.name}</div>
                    <div>URL :{icerik.url}</div>
                    <div>PUAN : {icerik.rating}</div>
                    <br/>
                </div>
            ))}

        </>
    )
}