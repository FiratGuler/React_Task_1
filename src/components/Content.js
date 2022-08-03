import { React, useState, useRef, useEffect } from 'react';
import { useSite } from '../Context/siteContext';

import { Container, Col, Row, Card, Button, Modal, Alert } from 'react-bootstrap';
import { ArrowUp, ArrowDown } from 'react-bootstrap-icons';


import autoAnimate from '@formkit/auto-animate'


export default function Contents() {

    const { Content, setContent, SortedInf } = useSite()


    const parent = useRef(null)

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])



    const UpVote = (content) => {
        setContent(Content.map(u => u === content ? (
            {
                ...u,
                rating: parseInt(u.rating + 1),
            }
        ) : u))


    }

    const DownVote = (content) => {

        setContent(Content.map(u => u === content ? (
            {
                ...u,
                rating: u.rating - 1

            }

        ) : u))

    }

    const setBoxId = (i,b) => {
        setBox(i)
        setShow(true)
        setdeleteName(b)
    }


    const Delete = (i) => {
        setContent(content => content.filter((content, id) => content.id !== i))
        setShow(false)

        setAlertShow(true)

    }

    const handleClose = () => setShow(false);

    const [show, setShow] = useState(false);

    const [alertShow, setAlertShow] = useState(false);

    const [box, setBox] = useState();
    const [deleteName, setdeleteName] = useState();

    setInterval(() => {
        setAlertShow(false)
    }, 4000)
    return (

        <>
            <div ref={parent} >
                {Content.sort(SortedInf === true ? ((a, b) => (a.rating - b.rating)) : (a, b) => (b.rating - a.rating)).map((content) => (

                    <Container key={content.id} className="my-3" >

                        <Row className="Content_div">
                            <Col lg="2" className='border rounded border-3 text-center BackgroundMY pt-3'>
                                <h1> <span>{content.rating}</span></h1>POINT
                            </Col>

                            <Col lg="9" >
                                <Card className="border-0 ">

                                    <Card.Body >
                                        <Card.Title >{content.name}
                                            <Button className='float-end btn-danger rounded-circle' size="sm" onClick={() => setBoxId(content.id,content.name)}>-</Button>
                                        </Card.Title>
                                        <Card.Link>{content.url}</Card.Link>
                                        <Card.Text>

                                        </Card.Text>
                                        <Button variant='muted' className='float-start text-black' onClick={() => UpVote(content)}><ArrowUp /> Up Vote</Button>
                                        <Button variant='muted' className='float-end' onClick={() => DownVote(content)}><ArrowDown />Down Vote</Button>

                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

                    </Container>




                ))}
            </div>


            <Modal show={show} key={box} onHide={handleClose}>
                <Modal.Header className='bg-dark text-white' closeButton>
                    <Modal.Title className='fs-6'>Remove Link</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Container align="center"  >
                        <Row className='fs-5 text-black-50 mt-3'><p>Do you want remove:</p></Row>
                        <Row ><h2>{Content.map((a) => a.id === box ? a.name : '')}</h2></Row>
                    </Container>
                </Modal.Body>

                <Modal.Footer className='justify'>

                    <Button className='btn-dark rounded-4 float-start' variant="primary" onClick={() => Delete(box)}>
                        ok
                    </Button>
                    <Button className='btn-dark rounded-4 float-end' variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>

                </Modal.Footer>
            </Modal>
            {alertShow &&
                <Alert show={alertShow} className='position-absolute top-0 start-50 translate-middle-x m-5' variant="success">
                    
                    <b>{deleteName}</b> removed.
                </Alert>}

        </>
    )


}