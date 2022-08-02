

import { React, useState } from "react";
import serialize from "form-serialize";
import { Container, Row, Form, Button, Alert } from 'react-bootstrap';

import { useSite } from "../Context/siteContext";



export default function NewAddContent() {

    const { setContent, Content } = useSite()

   

    const HandleFormSubmit = (e) => {
        e.preventDefault()
        const newArr = serialize(e.target, { hash: true });
        const concatArr = Content.concat(newArr)
        console.log(concatArr)
        setContent(concatArr)
    }
    const [show, setShow] = useState(false);



    return (
        <Container >

            <Row>
                <Form onSubmit={HandleFormSubmit}>
                    <Form.Group className="mb-2" >
                        <Form.Label htmlFor="name" >Link Name:</Form.Label>
                        <Form.Control id="name" name="name" placeholder="Link Name" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label htmlFor="url">Link URL:</Form.Label>
                        <Form.Control id="url" name="url" placeholder="Link URL" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label htmlFor="rating">Rating</Form.Label>
                        <Form.Control type="number" id="rating" name="rating" placeholder="Disabled input"  />
                    </Form.Group>

                    <Button type="submit" onClick={() => setShow(!show)}>Submit</Button>



                </Form>

            </Row>
            {show &&
                <Alert show={show} className='position-absolute top-0 start-50 translate-middle-x m-5' variant="success">
                    <b>STACK OVERFLOW</b> added.
                </Alert>}

        </Container >
        // <form onSubmit={HandleFormSubmit}>
        //     <input type="text" name="name" placeholder="İsim"></input>
        //     <input type="text" name="url" placeholder="Url"></input>
        //     <input type="text" name="rating" placeholder="rating" ></input>
        //     <button type="submit">ADD</button>
        // </form>
    )

}
