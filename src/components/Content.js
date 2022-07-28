import React from 'react';
import serialize from 'form-serialize';

class Content extends React.Component {

    //  AddContentSubmit = (e) => {
    //     e.preventDefault()
    //     const newContent = serialize(e.target, { hash: true });
    //     props.AddContentSubmit(newContent);
    // }
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
    BTN = (e) => {
        e.preventDefault();
        const newContent = serialize(e.target, { hash: true });
        this.setState({content : this.state.content.concat(newContent)})
        console.log(this.state.content)
    }


    render() {
        return (
            <>
                <form onSubmit={this.BTN} >
                    {this.state.content.map((content) =>

                        <div key={content.id}>

                            <input type="text" name='name' placeholder='name'></input>
                            <input type="text" name='rating' placeholder='rating'></input>
                            <input type="text" name='siteURL' placeholder='siteURL'></input>
                           
                        </div>

                    )}
                     <button >YEP</button>
                </form>


            </>
        )
    }
}
export default Content 