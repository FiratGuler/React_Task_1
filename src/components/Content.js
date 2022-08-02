import { React, useState } from 'react';
import { useSite } from '../Context/siteContext';
import { Container, Col, Row, Card, Button, Modal } from 'react-bootstrap';


//  import { useAutoAnimate } from '@formkit/auto-animate/react'


export default function Contents() {

    const { Content, setContent, } = useSite()

    //  const [animationParent] = useAutoAnimate()



    const UpVote = (content) => {
        setContent(Content.map(u => u === content ? (
            {
                ...u,
                rating: u.rating + 1,
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
    const Delete = (i) => {
        setContent(content => content.filter((content, index) => index !== i))
        
        setShow(false)
        
    }
    const [show, setShow] = useState(false);

    const [a, set] = useState();

    const seta=(i)=>{
        set(i)
        setShow(true)
    }
    
    console.log(a)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (

        <>

            {Content.sort((a, b) => (b.rating - a.rating)).map((content, index) => (
                <>
                    <Container key={index} className="my-3" >

                        <Row className="Content_div">
                            <Col lg="2" className='border rounded border-3' align='center' >
                                <h1> <span>{content.rating}</span></h1>
                            </Col>

                            <Col lg="7" >
                                <Card className="Card_body_content border-0 ">

                                    <Card.Body   >
                                        <Card.Title >{content.name}
                                            <Button className='float-end btn-danger rounded-circle' size="sm" onClick={() => seta(index)}>-</Button>
                                        </Card.Title>
                                        <Card.Link>{content.url}</Card.Link>
                                        <Card.Text>

                                        </Card.Text>
                                        <Button variant='secondary' className='float-start' onClick={() => UpVote(content)}>Up Vote</Button>
                                        <Button variant='secondary' className='float-end' onClick={() => DownVote(content)}>Down Vote</Button>

                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="2"></Col>
                        </Row>

                    </Container>



                </>
            ))}


            <Modal show={show}  onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"  onClick={()=>Delete(a)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )

}