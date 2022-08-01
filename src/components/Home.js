import { useSite } from "../Context/siteContext"
import Contents from "./Content"
import Sorting from "./Sorting"
import AddNewContent from "./AddNewContent"

import { Container, Row, Col,Button } from 'react-bootstrap';


export default function Home() {

    const { show, setShow } = useSite()





    return (
        <Container>
            <Row>
                <Col>
                    
                    {(show &&
                        <Button variant="primary" onClick={() => { setShow(!show) }}><b>+</b>Submit A Link</Button>)
                        ||
                        <button onClick={() => { setShow(!show) }}>Return</button>}

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
            </Row>
        </Container>
    )


}