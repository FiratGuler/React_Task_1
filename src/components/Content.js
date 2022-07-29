import React from 'react';
import { useSite } from '../Context/siteContext';


export default function Contents() {

    const {Content} = useSite()


    return (
        <>
            {Content.ContentArr.map((content,index)=>(
                <div key={index} style={{border:'1px solid red',width:150 , margin: 10}}>
                    <div>ADI :{content.name}</div>
                    <div>URL :{content.url}</div>
                    <div>PUAN : {content.rating}</div>
                    <div>ID : {content.id}</div>
                    <br/>
                </div>
            ))}

        </>
    )
}