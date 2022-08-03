import { useSite } from "../Context/siteContext"
import Contents from "./Content"
import Sorting from "./Sorting"
import AddNewContent from "./AddNewContent"


import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowLeft,PlusSquare } from 'react-bootstrap-icons';

export default function Home() {



    const { show, setShow } = useSite()





    return (
        <Container>
            <Row className="p-2">
                <Col md={3}></Col>

                <Col  md={6}>
                    <Container className="d-grid p-2 border-bottom border-3">
                        {(show &&
                            <Button className="btn-secondary text-dark BackgroundMY fs-1 p-3" onClick={() => { setShow(!show) }}><PlusSquare/> Submit a Link</Button>)
                            ||
                            <button className="BTN_return text-dark" onClick={() => { setShow(!show) }}><ArrowLeft/> Return to List</button>}
                    </Container>

                    {(show &&
                        <div>
                            <Sorting />
                            <Contents />
                        </div>)
                        ||
                        <div>
                            <AddNewContent />
                        </div>
                    }

                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    )


}