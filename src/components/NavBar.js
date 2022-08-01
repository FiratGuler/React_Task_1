
import { Container, Col, Row } from 'react-bootstrap';

export default function NavBar() {

    return (
        <NavBar>
            <Container>
                <Row>
                    <Col xs={{ order: 'first' }}>Hepsiburada.com</Col>
                    <Col xs></Col>
                    <Col xs={{ order: 'last' }}>Link Vote Challange</Col>
                </Row>
            </Container>
        </NavBar>
    )
}