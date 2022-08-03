

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
    setInterval(() => {
        setShow(false)
    }, 4000)

    const ArrDim =Content.length+1
  

    const [show, setShow] = useState(false);
    
   
    return (
        <>
            <Container >
                <Row className="fs-3 mt-4 mb-4">
                    <b>Add New Link</b>
                </Row>

                <Row>
                    <Form onSubmit={HandleFormSubmit} >
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="name" >Link Name:</Form.Label>
                            <Form.Control id="name" className="border-dark" name="name" placeholder="Link Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="url">Link URL:</Form.Label>
                            <Form.Control className="border-dark" id="url" name="url" placeholder="Link URL" />
                        </Form.Group>

                        <Form.Control className="visually-hidden" id="rating" name="rating" defaultValue={1}  />
                        <Form.Control className="visually-hidden" id="id" name="id" defaultValue={ArrDim}  />



                        <Button className="float-end rounded-5 lg" variant="dark" type="submit" onClick={() => setShow(!show)}>Submit</Button>
                        



                    </Form>

                </Row>
                {show &&
                    <Alert show={show} className='position-absolute top-0 start-50 translate-middle-x m-5' variant="success">
                        <b>STACK OVERFLOW</b> added.
                    </Alert>}

            </Container >

        </>
    )


}

