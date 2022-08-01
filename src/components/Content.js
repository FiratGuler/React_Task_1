import { React } from 'react';
import { useSite } from '../Context/siteContext';





export default function Contents() {

    const { Content, setContent } = useSite()

    const UpVote = (content) => {
        setContent(Content.map(u => u === content ? (
            {
                ...u,
                rating: u.rating + 1,

            }
        ) : u))
        Content.sort((a, b) => b.rating - a.rating)
    }
    const DownVote = (content) => {
        setContent(Content.map(u => u === content ? (
            {
                ...u,
                rating: u.rating -= 1

            }
        ) : u))
        Content.sort((a, b) => b.rating - a.rating)
    }
    const Delete = i => {
        setContent(content => content.filter((content, index) => index !== i))
    }

    return (

        <>

            {Content.map((content, index) => (
                <div key={index} >
                    <button onClick={() => Delete(index)}>-</button>
                    <div>ADI :{content.name}</div>
                    <div>URL :{content.url}</div>
                    <div>PUAN : {content.rating}</div>
                    <br />
                    <button onClick={() => UpVote(content)}>Up Vote</button>
                    <button onClick={() => DownVote(content)}>Down Vote</button>
                    {/* <VoteBTN/>  */}
                </div>
            ))}

        </>
    )

}