import { useSite } from "../Context/siteContext"
import Contents from "./Content"
import Sorting from "./Sorting"
import AddNewContent from "./AddNewContent"


import { Container, Row, Col, Button } from 'react-bootstrap';


export default function Home() {



    const { show, setShow } = useSite()





    return (
        <Container>
            <Row className="p-2">
                <Col md={3}></Col>

                <Col md={6}>
                    <Container className="d-grid p-3 border-bottom border-3">
                        {(show &&
                            <Button variant="secondary" onClick={() => { setShow(!show) }}><h1>+ Submit a Link</h1></Button>)
                            ||
                            <button className="BTN_return" onClick={() => { setShow(!show) }}> Return</button>}
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