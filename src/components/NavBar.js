

import { Container, Col, Row } from 'react-bootstrap';

export default function NavBar() {

    return (
        <Container className='p-3 my-1 border-bottom'>
            <Row>
                <Col md={6}><h2>Hepsiburada<b>.COM</b></h2></Col>
                <Col md={6} className="text-end"><h3><b>Link</b>VOTE Challenge</h3></Col>
            </Row>
        </Container>
    )
}